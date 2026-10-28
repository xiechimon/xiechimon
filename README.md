<div align="center">

### AI-native full-stack engineer

**I fix AI coding agents at the infrastructure level.**

</div>

---

## What I build

<a href="https://github.com/xiechimon/cairn"><img src="https://raw.githubusercontent.com/xiechimon/cairn/main/apps/web/public/logo.svg" alt="" width="40" align="left"></a>

**[Cairn](https://github.com/xiechimon/cairn)** · [cairn.xmon.me](https://cairn.xmon.me) — a self-hosted multi-agent workspace that develops itself.

<br clear="left">

You file tickets on a kanban board; agents claim them, build in their own git worktree on your machines, review each other's work and open the PRs. Every run stops twice for a human, at the plan and at the diff, and the AI reviewer can block a merge.

- **Multi-agent orchestration**: a chief agent only dispatches; coder and reviewer agents each carry their own model, skills, MCP servers and memory.
- **Bootstrap loop**: Cairn claims, implements and reviews its own tickets and opens the PRs; a human still gates the merge.
- **Eval and trajectory driven**: builds record base SHA and harness hash, rejections become structured records, and strong-vs-weak model A/B evals decide which prompt, skill and routing changes stay. No weight fine-tuning.
- TypeScript monorepo: React 19 + Vite, Hono + SQLite server, a daemon on the Claude Agent SDK and pi.

<a href="https://github.com/xiechimon/cairn">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/xiechimon/cairn/main/docs/assets/readme/board-dark.png">
    <img alt="Cairn board" src="https://raw.githubusercontent.com/xiechimon/cairn/main/docs/assets/readme/board-light.png">
  </picture>
</a>

### Also

- **[QuizBank](https://github.com/xiechimon/QuizBank)** — Flutter (Material 3) quiz app with 1,170 questions, spaced-repetition scheduling, AI explanations streamed from DeepSeek / MiMo, and offline SQLite.
- **[shanlink](https://github.com/xiechimon/shanlink)** — a high-performance short-link service built as Spring Boot 3 microservices.

## Upstream contributions

<!-- STATS:START -->
**30 pull requests merged into 13 upstream projects, 4 of them 30k+ star repos.**
<!-- STATS:END -->

<!-- LEDGER:START -->
| Project | Stars | Merged PRs |
| :--- | ---: | ---: |
| [OmniRoute](https://github.com/cheaper-inference/OmniRoute) — Never stop coding. Free MIT AI gateway: one endpoint, 375… | [![OmniRoute: 82017 stars](https://img.shields.io/github/stars/cheaper-inference/OmniRoute?style=flat-square&label=%E2%98%85&color=555)](https://github.com/cheaper-inference/OmniRoute/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) | [12](https://github.com/cheaper-inference/OmniRoute/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) |
| [headroom](https://github.com/headroomlabs-ai/headroom) — Compress tool outputs, logs, files, and RAG chunks before… | [![headroom: 78086 stars](https://img.shields.io/github/stars/headroomlabs-ai/headroom?style=flat-square&label=%E2%98%85&color=555)](https://github.com/headroomlabs-ai/headroom/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) | [2](https://github.com/headroomlabs-ai/headroom/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) |
| [pnpm](https://github.com/pnpm/pnpm) — Fast, disk space efficient package manager | [![pnpm: 36939 stars](https://img.shields.io/github/stars/pnpm/pnpm?style=flat-square&label=%E2%98%85&color=555)](https://github.com/pnpm/pnpm/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) | [3](https://github.com/pnpm/pnpm/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) |
| [oh-my-pi](https://github.com/can1357/oh-my-pi) — ⌥ Coding agent with the IDE wired in. Built by Stencil… | [![oh-my-pi: 36907 stars](https://img.shields.io/github/stars/can1357/oh-my-pi?style=flat-square&label=%E2%98%85&color=555)](https://github.com/can1357/oh-my-pi/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) | [4](https://github.com/can1357/oh-my-pi/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) |
| [phoenix](https://github.com/Arize-ai/phoenix) — AI Observability & Evaluation | [![phoenix: 12041 stars](https://img.shields.io/github/stars/Arize-ai/phoenix?style=flat-square&label=%E2%98%85&color=555)](https://github.com/Arize-ai/phoenix/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) | [1](https://github.com/Arize-ai/phoenix/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) |
| [Soup](https://github.com/MakazhanAlpamys/Soup) — Fine-tune LLMs from one YAML. Layer streaming trains an… | [![Soup: 9738 stars](https://img.shields.io/github/stars/MakazhanAlpamys/Soup?style=flat-square&label=%E2%98%85&color=555)](https://github.com/MakazhanAlpamys/Soup/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) | [1](https://github.com/MakazhanAlpamys/Soup/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) |
| [atlas](https://github.com/pacifio/atlas) — Source control for agents. Use multiple coding agents,… | [![atlas: 9554 stars](https://img.shields.io/github/stars/pacifio/atlas?style=flat-square&label=%E2%98%85&color=555)](https://github.com/pacifio/atlas/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) | [1](https://github.com/pacifio/atlas/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) |
| [bifrost](https://github.com/maximhq/bifrost) — Open-source, high-performance AI gateway that works as… | [![bifrost: 9167 stars](https://img.shields.io/github/stars/maximhq/bifrost?style=flat-square&label=%E2%98%85&color=555)](https://github.com/maximhq/bifrost/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) | [1](https://github.com/maximhq/bifrost/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) |
| [agentscope-java](https://github.com/agentscope-ai/agentscope-java) — Build distributed, production-grade, long-running agents. | [![agentscope-java: 6155 stars](https://img.shields.io/github/stars/agentscope-ai/agentscope-java?style=flat-square&label=%E2%98%85&color=555)](https://github.com/agentscope-ai/agentscope-java/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) | [1](https://github.com/agentscope-ai/agentscope-java/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) |
| [OpenBitFun](https://github.com/GCWing/OpenBitFun) — OpenBitFun combines a high-performance agent runtime… | [![OpenBitFun: 3296 stars](https://img.shields.io/github/stars/GCWing/OpenBitFun?style=flat-square&label=%E2%98%85&color=555)](https://github.com/GCWing/OpenBitFun/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) | [1](https://github.com/GCWing/OpenBitFun/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) |
| [rocketmq-rust](https://github.com/mxsm/rocketmq-rust) — 🚀 Apache RocketMQ built in Rust 🦀 — faster, safer, and… | [![rocketmq-rust: 1530 stars](https://img.shields.io/github/stars/mxsm/rocketmq-rust?style=flat-square&label=%E2%98%85&color=555)](https://github.com/mxsm/rocketmq-rust/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) | [1](https://github.com/mxsm/rocketmq-rust/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) |
| [libredb-studio](https://github.com/libredb/libredb-studio) — One browser tab for PostgreSQL, MySQL, Oracle, SQL… | [![libredb-studio: 1297 stars](https://img.shields.io/github/stars/libredb/libredb-studio?style=flat-square&label=%E2%98%85&color=555)](https://github.com/libredb/libredb-studio/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) | [1](https://github.com/libredb/libredb-studio/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) |
| [forceinjection.github.io](https://github.com/ForceInjection/forceinjection.github.io) — the published site for the AI-fundamentals knowledge base | [![forceinjection.github.io: 89 stars](https://img.shields.io/github/stars/ForceInjection/forceinjection.github.io?style=flat-square&label=%E2%98%85&color=555)](https://github.com/ForceInjection/forceinjection.github.io/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) | [1](https://github.com/ForceInjection/forceinjection.github.io/pulls?q=is%3Apr%20is%3Amerged%20author%3Axiechimon) |
<!-- LEDGER:END -->

Notable fixes: a CLI's Copilot device-flow routing, SSE responses that discarded valid empty completions, a provider router that rewrote a GA model id back to preview, governance config keys dropped on `PUT`, an API error body that leaked upstream detail, pasted-image paths lost between the terminal and the agent, and a second <kbd>Ctrl</kbd>+<kbd>C</kbd> that could not exit a stuck session.

## Contact

[xiechimon@qq.com](mailto:xiechimon@qq.com)

---

<sub>Ledger refreshes daily; every count links to its source.</sub>