---
layout: page
title: Why Customers Switch Mortgage Providers
description: A 200-person comparative study on the drivers of switching versus staying put
img: assets/img/mortgage-cover.png
importance: 7
category: ux
tags: [Comparative / causal]
---

{% include figure.liquid loading="eager" path="assets/img/mortgage-cover.png" class="img-fluid rounded z-depth-1" %}

> **A note on the data.** This is an anonymized, portfolio version of a real client study. The bank is unnamed and the numbers below are _illustrative_ — recreated to show the design and analysis, not to report actual results.

## The brief

A bank wanted to grow _mortgage switching_ — customers moving an existing mortgage over from another provider — and to redesign its mortgage page in support of that goal. Before touching the page, the team needed to understand the behavior underneath it: what actually moves someone to switch, and what keeps an otherwise-eligible customer parked where they are.

<div class="row text-center mt-4 mb-2">
  <div class="col-sm-4">
    <h2 class="font-weight-bold mb-0">200</h2>
    <p class="text-muted">survey participants</p>
  </div>
  <div class="col-sm-4">
    <h2 class="font-weight-bold mb-0">100&nbsp;/&nbsp;100</h2>
    <p class="text-muted">switchers vs. non-switchers</p>
  </div>
  <div class="col-sm-4">
    <h2 class="font-weight-bold mb-0">16</h2>
    <p class="text-muted">questions, 15 quant + 1 qual</p>
  </div>
</div>

## How I ran it

The design was built for comparison. I recruited a balanced sample — 100 recent switchers and 100 non-switchers — so the two groups could be read head to head. Each person answered the same battery: demographics, a true/false mortgage-knowledge check, ranked decision factors, and how difficult they expected switching to be. I then compared the groups factor by factor, tested which differences were statistically meaningful, and looked specifically for _interactions_ between them rather than treating each variable in isolation.

## Experience predicts switching

The strongest signal had nothing to do with who someone is and everything to do with what they've already done. People who have switched a mortgage before separate sharply from those who haven't — on intent, on confidence, and on how easy they expect the process to be. Demographic variables like age, income, and region barely moved the needle by comparison.

{% include figure.liquid loading="eager" path="assets/img/mortgage-comparison.png" class="img-fluid rounded z-depth-1" %}

## Difficulty is the barrier for first-timers

The most useful finding wasn't a main effect — it was an interaction. Perceived difficulty barely dented experienced switchers, but for first-timers it was decisive: the harder switching felt, the more of them dropped out. The two groups respond to friction completely differently, which is exactly the kind of thing an average would have hidden.

<div class="row align-items-center">
  <div class="col-md-7 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/mortgage-interaction.png" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-5 mt-3 mt-md-0">
    <p>This is the lever the redesign can actually pull. You can't change whether someone has switched before — but you <em>can</em> change how hard the process feels.</p>
    <p>So the highest-value audience is narrow and specific: <strong>first-time switchers who perceive the move as difficult.</strong> Lower that perception and a group that was otherwise stuck starts to convert.</p>
  </div>
</div>

## Rate is the headline

Across three different ways of asking — reasons to switch, decision factors, and obstacles — one thing ranked first every time. Rate. Everything else, from fees to service to reputation, sits clearly below a competitive number.

{% include figure.liquid loading="eager" path="assets/img/mortgage-factors.png" class="img-fluid rounded z-depth-1" %}

## From insight to design

<div class="row mt-3">
  <div class="col-md-4 mt-3 mt-md-0">
    <h6 class="font-weight-bold">Demystify switching</h6>
    <p>Show, step by step, how straightforward moving a mortgage is — aimed squarely at first-time switchers and the difficulty they perceive.</p>
  </div>
  <div class="col-md-4 mt-3 mt-md-0">
    <h6 class="font-weight-bold">Foreground the rate</h6>
    <p>Make rate competitiveness the most prominent, scannable element on the page — it's the thing every segment checks first.</p>
  </div>
  <div class="col-md-4 mt-3 mt-md-0">
    <h6 class="font-weight-bold">Cut the friction</h6>
    <p>Address the obstacles people actually named — paperwork, penalties — directly and early in the journey, before they become reasons to stall.</p>
  </div>
</div>

## Reading this as correlation, not proof

This was an observational design, and I think it's important to be precise about what that does and doesn't license:

- **The groups self-selected.** "Prior switchers are likelier to switch again" is an association, not a proven cause — people who've switched before may simply be more financially engaged. I'd frame it to stakeholders as a strong predictor for _targeting_, not as evidence that the act of switching changes people.
- **The interaction is the testable claim.** "Reducing perceived difficulty converts first-timers" is causal, specific, and cheap to validate. The natural next step is a live A/B that shows a difficulty-reducing treatment to first-time switchers and measures switch-intent — with that interaction hypothesis pre-registered so we're confirming it, not fishing for it.
- **"Rate is #1" is a stated ranking.** Self-reported importance tends to inflate the obvious answer. Before over-indexing the whole page on rate, I'd triangulate against revealed behavior — which page elements actually precede an application.

Being explicit about the causal limits is what makes the recommendations trustworthy: it separates the findings we can target on today from the one experiment that would turn a correlation into a decision.
