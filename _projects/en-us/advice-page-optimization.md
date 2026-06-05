---
layout: page
title: Advice & Contact Page Optimization
description: Survey research on what clients value in an advisor — and how they want to get in touch
img: assets/img/advice-cover.png
importance: 6
category: ux
tags: [Trust & credibility]
---

{% include figure.liquid loading="eager" path="assets/img/advice-cover.png" class="img-fluid rounded z-depth-1" %}

> **About this case study.** This is a generalized, anonymized version of real client work. The firm is unnamed, internal context has been removed, and every figure shown is _illustrative_ — recreated to demonstrate method, not to report any client's results.

## The brief

A wealth-management firm wanted its advice page and "Contact Us" flow to do more than describe services — it wanted them to start real conversations with an advisor. Before redesigning anything, the team needed to understand three things from the client's side: what people actually look for in an advisor, what would move them to reach out, and how they prefer to make contact in the first place.

<div class="row text-center mt-4 mb-2">
  <div class="col-sm-4">
    <h2 class="font-weight-bold mb-0">150</h2>
    <p class="text-muted">survey participants</p>
  </div>
  <div class="col-sm-4">
    <h2 class="font-weight-bold mb-0">16</h2>
    <p class="text-muted">questions, quant + qualitative</p>
  </div>
  <div class="col-sm-4">
    <h2 class="font-weight-bold mb-0">4</h2>
    <p class="text-muted">client segments analyzed</p>
  </div>
</div>

## How I ran it

I built a 16-question instrument that blended ranking tasks, Likert scales, and open-ended prompts, and fielded it to roughly 150 current and prospective clients. The sample was screened on investing experience and investable assets so the answers reflected the firm's real audience rather than the general public. On the back end, I ran quantitative ranking and segmentation by age, region, and investor type, and thematically coded every open-ended response so the qualitative "why" sat alongside the numbers.

## What clients actually value

The ranking task was unambiguous: credibility beats capability. Trustworthiness, ethics, and deep experience sit far above everything else, while the things firms often lead with — technology, digital tooling, global reach — land at the bottom. They're reassuring to have, but they don't decide who someone trusts with their money.

{% include figure.liquid loading="eager" path="assets/img/advice-ranking.png" class="img-fluid rounded z-depth-1" %}

## What makes them switch

Valuing an advisor and _switching_ to one are different decisions, so I asked about them separately. Here the picture shifts: when people weigh moving to a new advisor, investment performance and lower fees dominate. The trust signals still matter — they're the cost of being considered — but on their own they rarely tip the decision.

{% include figure.liquid loading="eager" path="assets/img/advice-switching.png" class="img-fluid rounded z-depth-1" %}

## How they want to connect

<div class="row align-items-center">
  <div class="col-md-7 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/advice-channels.png" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-5 mt-3 mt-md-0">
    <p>When it came to making contact, people reached for <strong>human channels first</strong> — phone, email, and in-person. The web form was a fallback, not a preference.</p>
    <p>There was little agreement on the "right" number of form fields. What people <em>did</em> want to volunteer was specific: their reason for reaching out, their area of interest, and their financial situation — the context that lets an advisor show up prepared.</p>
  </div>
</div>

## From insight to design

The findings pointed to a clear, prioritized direction the design team could act on:

- **Lead with credibility.** Surface advisor experience, track record, and trust signals above the fold — before any product or feature detail.
- **Streamline the form.** Cut to the few fields people actually want to provide, and mark anything beyond that explicitly optional.
- **Offer real channels.** Make phone, email, and in-person paths obvious, and treat the form as one option among several rather than the default front door.

## How I'd pressure-test this

A ranking survey tells you what people _say_ matters, which is the right place to start but the wrong place to stop. A few things I'd hold loosely and validate before betting heavily on them:

- **Stated vs. revealed preference.** "Credibility over features" is a self-report. I'd confirm it against on-page behavior — scroll depth, what content actually drives contact — and ideally a live A/B of a credibility-forward layout against the current one, measured on intent-to-contact rather than clicks.
- **Segment sample sizes.** Cutting 150 responses four ways leaves thin cells, so I'd treat the subgroup differences as directional and re-run the segments that drive a real design decision with a larger, balanced sample.
- **The form question is empirical, not philosophical.** Rather than argue about field count, I'd test two or three concrete form lengths and read completion and lead-quality directly.

Framing the limits this plainly is part of the deliverable: it tells stakeholders which findings are safe to build on now, and which ones are a cheap experiment away from being settled.
