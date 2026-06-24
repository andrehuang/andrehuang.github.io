---
layout: page
title: Translation of Social Theory Works
description: 一个译丛——把缺乏中文译本的社会理论文献，做成带校注的中英对照「校勘本」。当前主题：群体如何成为实体（how an aggregate of individuals becomes an entity）。以 scholarly-translation skill 完成。
img: assets/img/projects/social-theory-translations.svg
importance: 5
category: translation
github: https://github.com/andrehuang/scholarly-translation-skill
permalink: /projects/social-theory-translations/
---

社会理论译丛 —— 把我看重、却还没有好的中文译本的社会理论文献，做成带注释的**中英对照「校勘本」**：译文力求流畅，关键术语于首次出现处保留原文，校注（译者注）置于边栏，图表忠实取自原文，并配有页内导航。每一部独立成页。

全部译本都用我自己写的开源 [Claude skill](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview) **[scholarly-translation](https://github.com/andrehuang/scholarly-translation-skill)** 完成——它固定了工作流（逐章翻译、累加进同一个文件）、术语纪律（术语表先定、全程复用）与版式系统。这个译丛本身就是该 skill 的试验场：每多译一部，都既检验、也打磨这件工具，而每一页都会链接回它。

---

## Theme 1 · 群体如何成为实体

我挑选的文本并不随机，它们都在追问同一个问题：

> **群体如何成为实体？** —— 一群人，如何硬化成一个能持有资源、能在成员更替之后存续、能以自己的名义行动的「东西」。

### 导读 · 从总和到实体

社会学很早就把一个区分讲得很干净。一边是 **aggregate**——人群、总和、统计意义上的 population，是个体相加或取平均得到的东西；另一边是 **corporate actor（法人行动者）**——能持有属性、能在成员更替之后继续存续、能作为一个单位去行动、能被归属一个「意志」、能承载权利与义务的实体。公司、国家、教会、行会、同盟，都属于后者。

这两者之间隔着一道跃迁：一群人，如何**结晶**成一个「东西」？这道坎，不是把个体行为求和、求平均就能跨过去的——求和至多给你一个宏观的**图案**，给不出一个宏观的**行动者**。而真正占据社会宏观层的，恰恰不是图案，而是实体；它们本身又是行动者，彼此博弈，并反过来约束自己的成员。「群体如何成为实体」追问的，正是这一层是如何被一个实体**占据**的。

历史给过一个干净的样本。中世纪的 `universitas`——无论是一座宣誓结成的城市公社（commune，即 *coniuratio*，一个靠誓言黏合的兄弟会），还是一所大学行会——会在某个法理—制度时刻，从一堆重叠的成员身份里被「钉」成一个法律人格：它有名字与印章（*sigillum*），好让它跨越成员更替仍被重新指认为「同一个」；有把众多意志压成单一输出的议事程序；有不随某个成员死亡而分割的共同金库；还有一个把它当作「一个单位」来打交道的外部对手方。当这几样同时锁住，群体就像一次相变那样「凝固」下来，而且一旦成形便极难逆转。`perpetual succession`（永续存续）由此诞生——实体的时间，从此走得比它任何一个成员都慢。

但这道跃迁究竟**如何**发生，理论家们的答案并不一致——而正是这种不一致，撑起了本主题的张力。分歧沿两条轴展开：诞生是一个**瞬时的事件**，还是一段**长时段的生成**？是**意图驱动、对参与者可读**的，还是**结构驱动、连当事人自己当时也看不清**的？这条轴的两端，立着本系列最尖锐的一组对照。一端是 **Searle**：有人宣告「我们在此结成 X」，这个构成性的言语行为一旦赢得**集体承认（uptake）**，就点亮一整套**道义权力（deontic powers）**，实体便「算数」了——声明式、瞬时、可读，诞生有一个清清楚楚的语言时刻。另一端是 **Padgett 与 Ansell** 笔下的美第奇：那个 corporate actor 不是被谁设计出来的，而是从婚姻、经济、庇护几张只部分重叠的网络的交汇处，靠多义、不可读的 **robust action** 慢慢固化而成；当时连它的成员也说不清这究竟是不是一个统一的计划——模糊、缓慢、illegible、由结构而非意图驱动，恰好是 Searle 那条路的反面。

另外两家界定了这片区域的边界。**Coleman** 站在原点：他未必给出机制，却是第一个把「成为实体」明确**立为一个问题、一个范畴**的人——他标定了那条最难的、向上的箭头，也标定了本主题要填的缺口。**Padgett 与 Powell** 则把镜头拉到更长的时段：实体是新组织形态的**涌现（genesis）**，从多重网络的交叠与溢出里长出，靠把一个领域的关系实践搬进另一个领域（transposition）而获得新功能。下面这张图，把四家放在这两条轴上。

<figure style="margin:2.2rem auto;max-width:760px;"><img src="{{ '/assets/img/projects/social-theory-map.svg' | relative_url }}" alt="一张把四部著作放在两条轴上的地图：横轴自结构驱动·不可读伸向意图驱动·可读，纵轴自瞬时的事件伸向长时段的生成。Searle 在右上（声明式、瞬时、可读），Padgett & Ansell 与 Padgett & Powell 在左下（结构、不可读、缓慢），Coleman 在原点。" style="width:100%;height:auto;border-radius:8px;display:block;"><figcaption style="font-size:.85rem;color:#8a8378;margin-top:.7rem;text-align:center;">同一场「诞生」，四种讲法。横轴自<em>结构驱动 · 不可读</em>伸向<em>意图驱动 · 可读</em>，纵轴自<em>瞬时的事件</em>伸向<em>长时段的生成</em>。Coleman 立于原点——是他把「成为实体」第一个立为了一个问题。</figcaption></figure>

### 阅读与翻译计划

我把这四家读作对同一个问题的四种回答，从最*可读、最有意图、最瞬时*的诞生（Searle 的声明时刻），一直排到最*不可读、最结构、最缓慢*的那一种（Padgett 笔下安静的结构性凝结）。Coleman 框定了整片领域，两部 Padgett 的著作则锚住了相反的结构一极。

**James Coleman — *Foundations of Social Theory*（1990）** · <span style="color:#7a2b25;">计划中</span><br>
群体成为实体，是那条最难的微观→宏观上行箭头的极端形态——不是个体行动聚合成一个宏观统计量，而是结晶出一个全新范畴的存在物（corporate actor）：它能换人而存续、能持有资源、能与自然人不对称地博弈。这是把「成为实体」**定为问题、定为范畴**的路径——他标定了缺口，却把法人当作外生输入引了进来。

**John Searle — *The Construction of Social Reality*（1995）/ *Making the Social World*（2010）** · <span style="color:#7a2b25;">计划中</span><br>
群体经由一个构成性的言语行为成为实体——有人宣告「我们在此结成 X」，这个声明一旦获得**集体承认（uptake）**，就点亮一整套权利与义务（**deontic powers**），实体便「算数」了。声明式、瞬时、可读——诞生有一个清晰的语言时刻。

**John Padgett & Christopher Ansell — *“Robust Action and the Rise of the Medici”*（AJS, 1993）** · <span style="color:#977028;font-weight:600;">已完成 ↓</span><br>
一个具体 corporate actor 的诞生。在这个例子里，corporate actor 是**结构的产物、不是意图的产物**，且常常 **illegible**：美第奇党从几张只部分重叠的网络的交汇处，靠多义、不可读的 **robust action** 慢慢固化成一个 corporate actor；其成员当时谁也说不清这是不是一个统一的项目。模糊、缓慢、illegible、由结构而非意图驱动——恰是 Searle 那条声明式路径的反面。

**John Padgett & Walter Powell — *The Emergence of Organizations and Markets*（2012）** · <span style="color:#7a2b25;">计划中</span><br>
群体成为实体，是一种新组织形态的 **genesis**——它从亲属／经济／政治等多重网络的交叠与溢出中长出，靠把某个领域的关系实践搬到另一个领域（**transposition**）而获得新功能，并在网络变得自我再生产（**autocatalysis** 自催化）时穿过成员更替而存续。生成动力学、长时段、跨域重组——关注新 actor 从何冒出，而非哪些得以存活。

### 术语对照表（持续更新）

把这几家放在一起读，一个附带的收获，是让它们共享的词汇在中文里被**一致地**译出来——同一个术语，在每一页都指同一件事。这张总表是临时的，会随译丛增长。

| English | 中文 | 简注 |
| --- | --- | --- |
| corporate actor | 法人行动者 | 能换人存续、持有资源、与自然人不对称博弈的实体 |
| robust action | 稳健行动 | 多义、不锁定单一目标、对多方都「说得通」的行动（Padgett &amp; Ansell） |
| multivocality | 多义性 | 同一行动在不同受众处可有不同读法 |
| ecological control | 生态控制 | 凭借结构位置、而非直接干预实现的控制（Padgett） |
| micro–macro transition | 微观—宏观转换 | 个体层面如何「上行」为宏观存在物（Coleman） |
| Declaration | 宣告／声明式言语行为 | 经由陈述本身使其成真的言语行为（Searle） |
| deontic powers | 道义权力 | 权利、义务、授权等规范性力量（Searle） |
| collective recognition / uptake | 集体承认 | 声明须被集体接受，方才「算数」（Searle） |
| transposition | 移植／换位 | 把某一领域的关系实践搬入另一领域（Padgett &amp; Powell） |
| autocatalysis | 自催化 | 网络自我再生产，穿过成员更替而存续（Padgett &amp; Powell） |

### 译本

按时间倒序，每一部独立成页。

#### [《稳健行动与美第奇家族的崛起，1400–1434》](/assets/html/robust-action-medici.html)

*Padgett &amp; Ansell, “Robust Action and the Rise of the Medici, 1400–1434,” **American Journal of Sociology** 98, no. 6 (1993): 1259–1319.*

*2026.06.24 · 全文译毕*

本主题的奠基案例。美第奇并非靠设计夺权，而是被「抬」进了权力——一个 corporate actor 从婚姻、经济、庇护多重重叠的网络中，靠刻意保持 illegible 的 robust action 凝结而成。完整校勘本：§0 术语表、脚注做成悬停注、忠实提取的图与重建的表，以及关于佛罗伦萨制度的校注。**[阅读全文 →](/assets/html/robust-action-medici.html)**
