---
layout: page
title: research-companion
description: Strategic research-thinking agents for Claude Code and Codex — idea evaluation, project triage, and structured brainstorming to decide which papers are worth writing.
img: assets/img/projects/research-companion.svg
importance: 1
category: tools
github: https://github.com/andrehuang/research-companion
---

Most AI tools for researchers help you *write* papers. **research-companion** helps you decide *which* papers to write. It is inspired by Nicholas Carlini's essay ["How to Win a Best Paper Award"](https://nicholas.carlini.com/writing/2026/how-to-win-a-best-paper-award.html): great research starts with taste, strategic problem selection, honest self-evaluation, and knowing when to kill your darlings.

What researchers usually lack is not the ability to write, but a trusted colleague who will tell them an idea isn't worth six months *before* they spend those months — who asks what their unfair advantage is, makes them state the key insight in one sentence, and helps decide whether a struggling project should be continued, pivoted, or killed. The plugin plays that colleague with three agents:

- **Idea Critic** stress-tests an idea along seven dimensions — novelty, impact, timing, feasibility, competitive landscape, the nugget, and narrative potential — and returns a Pursue / Refine / Kill verdict.
- **Research Strategist** handles project-level triage: comparative advantage, impact forecasting, opportunity cost, and scooping risk.
- **Brainstormer** looks for cross-field connections and for assumptions the field follows uncritically.

The `/research-companion` command orchestrates all three through a six-phase session — Seed → Diverge → Evaluate → Deepen → Frame → Decide — including the *conclusion-first test*: if you can't write a compelling conclusion now, the idea isn't ready. Verdicts are saved to disk, so parked ideas keep their revisit conditions and your research thinking accumulates across sessions instead of starting from scratch.

The agents are deliberately direct: they'd rather save you three months than spare your feelings. Research Companion also ships as the strategic-thinking component of [researcher-pack](https://github.com/andrehuang/researcher-pack), an all-in-one research workflow plugin.

The repository is open source on [GitHub](https://github.com/andrehuang/research-companion) — issues and pull requests are welcome.
