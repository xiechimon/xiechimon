// Regenerates the upstream-contribution ledger in README.md from live GitHub data.
// Every number in the README is produced by this script, so none of them can go stale.
//
//   GH_TOKEN=$(gh auth token) node scripts/refresh-ledger.mjs
//
// Requires the token to have read access to public repos (the default GITHUB_TOKEN does).

import { readFile, writeFile } from 'node:fs/promises'

const LOGIN = 'xiechimon'
const README = new URL('../README.md', import.meta.url)

const token = process.env.GH_TOKEN ?? process.env.GITHUB_TOKEN
if (!token) {
	console.error('Set GH_TOKEN or GITHUB_TOKEN.')
	process.exit(1)
}

// Merged PRs authored by LOGIN in repos owned by someone else.
const QUERY = `query($q: String!, $cursor: String) {
	search(query: $q, type: ISSUE, first: 100, after: $cursor) {
		pageInfo { hasNextPage endCursor }
		nodes {
			... on PullRequest {
				number
				url
				additions
				deletions
				closedAt
				repository { nameWithOwner stargazerCount description }
			}
		}
	}
}`

async function searchAll() {
	const nodes = []
	let cursor = null
	do {
		const res = await fetch('https://api.github.com/graphql', {
			method: 'POST',
			headers: { authorization: `bearer ${token}`, 'content-type': 'application/json' },
			body: JSON.stringify({
				query: QUERY,
				variables: { q: `author:${LOGIN} is:pr is:merged -user:${LOGIN}`, cursor },
			}),
		})
		if (!res.ok) throw new Error(`GraphQL ${res.status}: ${await res.text()}`)
		const { data, errors } = await res.json()
		if (errors) throw new Error(JSON.stringify(errors))
		nodes.push(...data.search.nodes.filter(Boolean))
		cursor = data.search.pageInfo.hasNextPage ? data.search.pageInfo.endCursor : null
	} while (cursor)
	return nodes
}

// Repos whose own description says less than the reader needs.
const NOTES = {
	'ForceInjection/forceinjection.github.io': 'the published site for the AI-fundamentals knowledge base',
}

// Truncate on a word boundary so a blurb never ends mid-word.
function shorten(text, max) {
	if (text.length <= max) return text
	const cut = text.slice(0, max)
	const lastSpace = cut.lastIndexOf(' ')
	return `${(lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`
}

function group(prs) {
	const byRepo = new Map()
	for (const pr of prs) {
		const key = pr.repository.nameWithOwner
		const row = byRepo.get(key) ?? {
			repo: key,
			stars: pr.repository.stargazerCount,
			blurb: (pr.repository.description ?? '').replace(/\s+/g, ' ').trim(),
			prs: 0,
			added: 0,
			removed: 0,
			latest: pr.closedAt,
		}
		row.prs += 1
		row.added += pr.additions
		row.removed += pr.deletions
		if (pr.closedAt > row.latest) row.latest = pr.closedAt
		byRepo.set(key, row)
	}
	return [...byRepo.values()].sort((a, b) => b.stars - a.stars)
}

const pullUrl = (repo) =>
	`https://github.com/${repo}/pulls?q=${encodeURIComponent(`is:pr is:merged author:${LOGIN}`)}`

function renderStats(rows, prs) {
	const added = rows.reduce((s, r) => s + r.added, 0)
	const removed = rows.reduce((s, r) => s + r.removed, 0)
	const big = rows.filter((r) => r.stars >= 30000).length
	const contributors = rows
		.filter((r) => r.stars >= 30000)
		.map((r) => `[${r.repo.split('/')[1]}](https://github.com/${r.repo}/graphs/contributors)`)
		.join(', ')
	return [
		`**${prs.length} pull requests merged into ${rows.length} upstream projects (+${added.toLocaleString('en-US')} / −${removed.toLocaleString('en-US')} lines), ${big} of them 30k+ star repos.**`,
		``,
		`Listed in the contributor graph of ${contributors}.`,
	].join('\n')
}

function renderLedger(rows) {
	const head = ['| Project | Stars | Merged PRs | Lines |', '| :--- | ---: | ---: | ---: |']
	const body = rows.map((r) => {
		const name = r.repo.split('/')[1]
		const blurb = shorten(NOTES[r.repo] ?? r.blurb, 58)
		const label = `[${name}](https://github.com/${r.repo})${blurb ? ` — ${blurb}` : ''}`
		const stars = `[![${name}: ${r.stars} stars](https://img.shields.io/github/stars/${r.repo}?style=flat-square&label=%E2%98%85&color=555)](${pullUrl(r.repo)})`
		return `| ${label} | ${stars} | [${r.prs}](${pullUrl(r.repo)}) | +${r.added} / −${r.removed} |`
	})
	return [...head, ...body].join('\n')
}

function replaceBlock(markdown, name, content) {
	const re = new RegExp(`(<!-- ${name}:START -->)[\\s\\S]*?(<!-- ${name}:END -->)`)
	if (!re.test(markdown)) throw new Error(`Markers ${name}:START / ${name}:END not found in README.md`)
	return markdown.replace(re, `$1\n${content}\n$2`)
}

const prs = await searchAll()
const rows = group(prs)
let readme = await readFile(README, 'utf8')
readme = replaceBlock(readme, 'STATS', renderStats(rows, prs))
readme = replaceBlock(readme, 'LEDGER', renderLedger(rows))
await writeFile(README, readme)
console.log(`${prs.length} merged PRs across ${rows.length} repos written to README.md`)