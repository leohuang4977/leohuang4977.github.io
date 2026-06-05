---
layout: page
title: Customer Perceptions of AI Agents in the Workplace
description: A large-scale weighted survey on readiness, openness, demand, and the barriers shaping where an agent roadmap should start
img: assets/img/agents-cover.png
importance: 2
category: ux
tags: [Strategy & segmentation]
---

{% include figure.liquid loading="eager" path="assets/img/agents-cover.png" class="img-fluid rounded z-depth-1" %}

> **Portfolio version.** This is a generalized, anonymized account of a real study. The platform is unnamed and all figures are *illustrative* — recreated to show how the research shaped strategy, not to report actual numbers.

## The brief

A platform was weighing how seriously to invest in AI *agents* — assistants that can take actions on a user's behalf, not just answer questions. The leadership question wasn't "is the technology impressive?" It was strategic: are customers actually ready, where should we start, and what will hold adoption back? The research had to turn an open-ended bet into a sequenced plan.

<div class="row mt-4">
  <div class="col-md-4 mt-2 mt-md-0">
    <h6 class="font-weight-bold">Are they ready?</h6>
    <p>How aware and how open the user base is — and how far that sits from actual usage today.</p>
  </div>
  <div class="col-md-4 mt-2 mt-md-0">
    <h6 class="font-weight-bold">Where do we start?</h6>
    <p>Which teams and which agent types represent the natural beachhead for a first release.</p>
  </div>
  <div class="col-md-4 mt-2 mt-md-0">
    <h6 class="font-weight-bold">What's in the way?</h6>
    <p>The concerns most likely to stall adoption — and what they imply for how agents are designed.</p>
  </div>
</div>

## A survey built to generalize

I ran a large stratified survey and applied two-stage weighting so the results would represent the whole user base rather than the subset who happened to respond. (The companion writing-assistant study goes deeper on the statistics; here the method is the foundation, and the story is what it told us to *do*.)

{% include figure.liquid loading="eager" path="assets/img/agents-funnel.png" class="img-fluid rounded z-depth-1" %}

## High awareness, low usage

The first finding framed everything that followed. Awareness is nearly universal, but hands-on usage for real work is still rare — a roughly four-to-one gap. That distance isn't a problem to explain away; it's the size of the opportunity, and the reason a well-aimed first release could move a lot of people at once.

{% include figure.liquid loading="eager" path="assets/img/agents-gap.png" class="img-fluid rounded z-depth-1" %}

## Openness is high — and mostly untapped

Crucially, the gap isn't driven by resistance. When asked how open they are to adopting agents inside the platform they already use, about six in ten lean positive and only about two in ten are opposed. The audience is willing; it simply hasn't been given the right first thing to try.

{% include figure.liquid loading="eager" path="assets/img/agents-openness.png" class="img-fluid rounded z-depth-1" %}

## Where to start: the beachhead

This is the part that changed the roadmap conversation. Readiness isn't uniform — it concentrates in specific job functions, and each high-readiness function wants a *different* first agent. Segmenting this way converts "build agents" into a concrete sequence: start where awareness and openness are highest, and lead with the capability that function actually asked for.

{% include figure.liquid loading="eager" path="assets/img/agents-segmentation.png" class="img-fluid rounded z-depth-1" %}

## What's holding people back

<div class="row align-items-center">
  <div class="col-md-7 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/agents-barriers.png" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-5 mt-3 mt-md-0">
    <p>Among users who are hesitant, the top concern has shifted. In earlier AI research waves, accuracy and reliability led; here, <strong>ethical implications</strong> rank first.</p>
    <p>That reframes mitigation as a product surface, not a comms exercise — transparency, control, and a human in the loop become design requirements, not reassurances.</p>
  </div>
</div>

## How customers want to adopt

The shape of demand was as instructive as its size. Users don't want agents acting on them ambiently — they want to stay in control of when help shows up.

<div class="row text-center mt-3 mb-2">
  <div class="col-md-4 mt-2 mt-md-0">
    <h5 class="font-weight-bold">Invoked, not ambient</h5>
    <p class="text-muted">Strong preference for agents the user calls on over always-on automation.</p>
  </div>
  <div class="col-md-4 mt-2 mt-md-0">
    <h5 class="font-weight-bold">Private-first</h5>
    <p class="text-muted">A private space to work with an agent before anything becomes shared or visible.</p>
  </div>
  <div class="col-md-4 mt-2 mt-md-0">
    <h5 class="font-weight-bold">Human in the loop</h5>
    <p class="text-muted">Agents that propose and assist, with the person keeping the final call.</p>
  </div>
</div>

## The decisions this drove — and the open questions

The value of the study was that it replaced a vague ambition with specific, defensible choices:

- **Sequence the roadmap by readiness.** Rather than building broadly, start in the beachhead functions and ship each one the agent it actually wants — earning early wins where adoption is likeliest.
- **Design for invocation and privacy from day one.** Because that's how customers say they want to adopt, the interaction model and the privacy model are first-release requirements, not later polish.
- **Treat ethics as a first-class surface.** Since it's now the top barrier, transparency and human-in-the-loop controls belong in the core design, not a trust-and-safety appendix.

And the questions I'd want to close before betting heavily:

- **The function-level cuts are directional.** Sub-samples shrink once you segment, so the intervals widen. I'd confirm the beachhead with targeted follow-up before fully committing the roadmap to it.
- **Openness isn't adoption.** The cleanest validation is a limited pilot in one beachhead function, measured on real usage and on whether it actually narrows that awareness-to-usage gap.
- **"Address ethics" needs to become concrete.** I'd probe the ethical concerns qualitatively to turn a ranked barrier into specific, testable design requirements.

That's the throughline I care about as a researcher: not just measuring sentiment, but handing the team a defensible order of operations — and being honest about which parts are decisions and which are still hypotheses.
