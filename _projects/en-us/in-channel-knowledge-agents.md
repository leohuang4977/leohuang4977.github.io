---
layout: page
title: What Users Want from In-Channel Knowledge Agents
description: A mixed-method study pairing survey attitudes with behavioral telemetry to define where an AI help-agent earns its place in team chat
img: assets/img/ckas-cover.png
importance: 5
category: ux
tags: [Mixed-method triangulation]
---

{% include figure.liquid loading="eager" path="assets/img/ckas-cover.png" class="img-fluid rounded z-depth-1" %}

> **Portfolio version.** A generalized, anonymized account of real research. The product is unnamed and every figure is _illustrative_ — recreated to show the method and reasoning, not to report actual results.

## The brief

A team-chat platform was exploring an _in-channel knowledge agent_: an AI that helps people find answers right where they already work, instead of sending them off to a separate knowledge base. Three questions mattered — do people actually want this, where does it earn its place, and how should it behave? I ran it mixed-method on purpose, because what people _say_ about getting help and what they _do_ to get it are rarely the same thing.

## How I ran it

I combined two lenses and read them against each other. A survey captured attitudes, demand, and what people believe they do; behavioral telemetry captured what they actually do in-channel. Triangulating the two is the whole design: each one covers the other's blind spot, and the most important findings live exactly where they disagree.

## Big appetite, leaky adoption

The demand signal was strong but lossy. Most people want in-channel help — but fewer can get it today, and fewer still actually use what exists. Every step from desire to real usage sheds people, which is the gap an agent would need to close.

{% include figure.liquid loading="eager" path="assets/img/ckas-gap.png" class="img-fluid rounded z-depth-1" %}

## What people say vs. what they do

This is the finding the mixed-method design existed to catch. In the survey, people described themselves as searching the knowledge base first. In the telemetry, they overwhelmingly **direct-messaged a person** instead. The help is real and generous — but it happens in private DMs, where it's invisible to everyone else and never becomes reusable. The knowledge base stays quiet not because people won't help, but because helping privately is faster.

{% include figure.liquid loading="eager" path="assets/img/ckas-triangulation.png" class="img-fluid rounded z-depth-1" %}

That single disagreement reframed the product. The opportunity isn't to nag people toward search — it's to surface what's already locked inside DMs and threads, and turn one-off answers into something the whole team can reuse.

## What users want the agent to do

<div class="row align-items-center">
  <div class="col-md-7 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/ckas-wants.png" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-5 mt-3 mt-md-0">
    <p>The headline wants are about <strong>surfacing what already exists</strong> — past answers, confident replies to common questions, thread summaries.</p>
    <p>Graceful handoff — suggesting the right expert, or flagging a human when the agent isn't sure — ranks lower in raw demand but is what makes the rest safe to trust. It's a guardrail, not a feature.</p>
  </div>
</div>

## Help happens here — but users want the agent _there_

The second triangulation was about scope, and it produced a clean crossover. Most peer help today happens on **live project work** — exactly the judgment-heavy territory where users are _least_ comfortable handing things to an agent. Where they _do_ want an agent is the knowable, low-judgment stuff: policy and HR, IT and tools, how-to and process. An agent that respects that line earns trust; one that wades into live project judgment loses it.

{% include figure.liquid loading="eager" path="assets/img/ckas-expectation.png" class="img-fluid rounded z-depth-1" %}

## What this means for design

<div class="row mt-3">
  <div class="col-md-6 mt-2 mt-md-0">
    <h6 class="font-weight-bold">Scope to the knowable</h6>
    <p>Aim the agent at policy, IT, and how-to — not the live project judgment users want to keep human.</p>
  </div>
  <div class="col-md-6 mt-2 mt-md-0">
    <h6 class="font-weight-bold">Surface buried answers</h6>
    <p>Mine the threads and (appropriately) the patterns people DM about, and turn them into reusable, findable answers.</p>
  </div>
</div>
<div class="row mt-2">
  <div class="col-md-6 mt-2 mt-md-0">
    <h6 class="font-weight-bold">Hand off gracefully</h6>
    <p>Answer only when confident; when not, suggest the right person or loop in a human rather than guessing.</p>
  </div>
  <div class="col-md-6 mt-2 mt-md-0">
    <h6 class="font-weight-bold">Meet people in-channel</h6>
    <p>Deliver help where the conversation already is — don't make reuse depend on visiting a separate tool.</p>
  </div>
</div>

## Designing the guardrails — and what I'd validate next

What I want this study to demonstrate is mixed-method judgment: not just running two methods, but knowing what each one can and can't tell you, and designing for the seam between them.

- **The triangulation is the contribution.** Self-report told us what people want and value; behavior told us what they actually do — and they diverged precisely where it mattered (search vs. DM). Either method alone would have shipped the wrong product.
- **The findings dictate the guardrails.** A confidence threshold so the agent answers only when sure, graceful handoff when it isn't, and domain scoping away from live project judgment — these aren't polish, they're the conditions under which an agent is trusted at all.
- **Telemetry shows what, not why.** A DM might be relationship-building, not search-avoidance. I'd pair the behavioral data with a handful of contextual interviews so I'm not over-reading intent into clicks.
- **The populations only overlap.** Survey respondents and the telemetry sample weren't identical, so I treat the comparison as directional and would reconcile it at the individual level where the data allows.
- **The real proof is a scoped pilot.** I'd ship the agent to the knowable domains and measure whether it actually converts buried DMs into reusable answers — while watching false-confidence errors closely, since a wrong answer given confidently is the fastest way to lose the trust the handoff design is meant to protect.
