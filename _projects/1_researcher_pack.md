---
layout: page
title: researcher-pack
description: A Claude Code research loop that keeps reading, ideation, experiments, and writing connected through shared plain-text state.
img: assets/img/projects/researcher-pack.svg
importance: 1
category: tools
github: https://github.com/andrehuang/researcher-pack
---

The LLM-research toolkit most of us have is a bag of disconnected tools — a chatbot for brainstorming, a summarizer for papers, an autocomplete for writing. Each is individually impressive, but nothing compounds: an idea parked in a chat on Monday, a paper read in a PDF viewer on Wednesday, and a paragraph drafted in LaTeX on Friday never know the others exist.

**researcher-pack** is one loop, and you only ever type one command. `/research-session` reads a plain-text research state, scans a local wiki for stale topic pages and unresolved review findings, and produces a briefing in under a page — what's due, what drifted, what to pick up. From there it dispatches to sub-skills: `/paper-read` for ingesting a paper, `/research-companion` for brainstorming and triage, `/weekly-review` for digests, `/orchestrate` for multi-stage pipelines.

The loop — Read → Ideate → Experiment → Write → Reflect — is what the pack keeps turning. Every skill reads and writes the same wiki, so reading feeds brainstorming without a copy-paste, and Friday's reflection can remind you on Monday what you decided the Friday before. Nothing needs to be carried in your head between sessions; if it was worth writing down, it's already in a page the next skill will read.

The repository is open source on [GitHub](https://github.com/andrehuang/researcher-pack) — issues and pull requests are welcome.
