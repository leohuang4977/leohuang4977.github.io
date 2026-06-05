---
layout: page
title: AI Writing Assistance for Workplace Messaging
description: A large-scale weighted survey on what users want from an in-product writing assistant — and how high they set the bar
img: assets/img/writing-cover.png
importance: 3
category: ux
tags: [Quantitative rigor]
---

{% include figure.liquid loading="eager" path="assets/img/writing-cover.png" class="img-fluid rounded z-depth-1" %}

> **Anonymized case study.** The product, population, and every figure here are *illustrative* — removed or replaced to demonstrate the research method, not to report a client's results.

## Context

Workplace teams already reach for general AI assistants and dedicated writing tools every day. The open question for a messaging platform was narrower: what do people actually want from a writing assistant built into the place they already communicate — and does living *inside* the product raise the bar, because the assistant can see a user's own work voice and the context around them?

<div class="row mt-4">
  <div class="col-md-4 mt-2 mt-md-0">
    <h6 class="font-weight-bold">An in-product assistant</h6>
    <p>Writing help where messages and docs are already created — not a separate tab.</p>
  </div>
  <div class="col-md-4 mt-2 mt-md-0">
    <h6 class="font-weight-bold">A higher bar</h6>
    <p>Measured against the dedicated tools users already trust for grammar and drafting.</p>
  </div>
  <div class="col-md-4 mt-2 mt-md-0">
    <h6 class="font-weight-bold">A unique advantage</h6>
    <p>Access to the user's work voice and their organizational context.</p>
  </div>
</div>

## A weighted, generalizable survey

The whole study hinges on one design choice: making the sample stand in for the entire user base, not just the people who happened to answer. I drew a stratified sample from the eligible population and corrected the responses with **two-stage weighting** — post-stratification to match the known population, and a non-response adjustment to resemble those who didn't reply. That's what lets the findings generalize rather than describe a self-selected slice.

{% include figure.liquid loading="eager" path="assets/img/writing-funnel.png" class="img-fluid rounded z-depth-1" %}

## Reading the results

I treat uncertainty as part of the deliverable, not a footnote. Every estimate below is reported as a range, not a single number, and I'm explicit about when a difference is real versus when it only looks that way.

<div class="row align-items-center">
  <div class="col-md-7 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/writing-ci.png" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-5 mt-3 mt-md-0">
    <p>A <strong>95% confidence interval</strong> is the band that would contain the true value in about 95 of 100 repeated surveys. Smaller subgroups produce wider bands and less certainty.</p>
    <p>When two intervals don't overlap, the difference is meaningful; when they do, I won't claim one. Non-significant gaps still get reported — as <em>suggestive</em>, weighed accordingly rather than ignored or over-sold.</p>
  </div>
</div>

## Strong, broad demand — led by proofreading

About three-quarters of users want writing assistance of some kind, and the appetite is concentrated where most messages start: the composer (~80% want it there, versus ~50% in collaborative docs and ~40% in lists). Within that, proofreading is the clear front-runner, with tone and length adjustment close behind.

{% include figure.liquid loading="eager" path="assets/img/writing-demand.png" class="img-fluid rounded z-depth-1" %}

## The bar is high — and that's the opportunity

Because an in-product assistant can see a user's voice and context, expectations climb rather than relax. That's not a threat; it's a moat the product is uniquely positioned to clear.

<div class="row align-items-center mb-2">
  <div class="col-md-3 text-center mt-3 mt-md-0">
    <h2 class="font-weight-bold mb-0">9 in 10</h2>
    <p class="text-muted">expect it to match or beat the dedicated tools they already use</p>
  </div>
  <div class="col-md-9 mt-3 mt-md-0">
    <div class="row">
      <div class="col-sm-4"><h6 class="font-weight-bold">Work voice</h6><p>Learns and matches how the user already writes.</p></div>
      <div class="col-sm-4"><h6 class="font-weight-bold">Org &amp; channel context</h6><p>Aligns to team norms and company standards.</p></div>
      <div class="col-sm-4"><h6 class="font-weight-bold">In the flow</h6><p>Drafts and summarizes without leaving the tool.</p></div>
    </div>
  </div>
</div>

## Trust is the price of entry

Adoption hinges on trust before features. When asked what matters most, users prioritized accuracy, privacy, and the ability to customize — and a large share want to know when AI was involved at all. Most also want to draft *privately* first: collaborative assistance is welcome, but not at the cost of a private space to think.

{% include figure.liquid loading="eager" path="assets/img/writing-trust.png" class="img-fluid rounded z-depth-1" %}

## What to prioritize

<div class="row">
  <div class="col-md-6 mt-2 mt-md-0">
    <ul>
      <li><strong>Invest in the composer.</strong> Keep refining assistance where demand is highest — where most messages start.</li>
      <li><strong>Lead with proofread &amp; tone.</strong> Ship the transformations users want most first.</li>
      <li><strong>Private-first, then shared.</strong> Make private drafting table stakes; layer in collaboration without removing it.</li>
    </ul>
  </div>
  <div class="col-md-6 mt-2 mt-md-0">
    <ul>
      <li><strong>Offer real customization.</strong> A balanced mix of sensible presets and user-controllable settings.</li>
      <li><strong>Default to transparency.</strong> Disclose AI involvement by default — most users want to know.</li>
    </ul>
  </div>
</div>

## How the method de-risked the decisions

The point of the weighting and the confidence intervals wasn't statistical theater — it was to let the team treat these numbers as population-level evidence and, just as importantly, to know *how much* to trust each one. A few things I'd hold honestly:

- **Demand is stated intent, not usage.** People say they want proofreading most; whether they *reach for* it most is an empirical question I'd answer with behavioral telemetry once a first version ships.
- **"Match or beat dedicated tools" is an expectation, not a benchmark.** I'd pair this survey with comparative usability testing against those tools so the quality target is grounded in observed performance, not just self-report.
- **Subgroups stay directional.** Function- and role-level cuts carry wider intervals, so I report them as leads to pursue, not conclusions to ship on.

Framed this way, the survey did two jobs at once: it set priorities, and it told the team which debates the evidence had actually closed — and which were one experiment away from settled.
