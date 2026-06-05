---
layout: page
title: "Open vs. Closed: An Accordion Navigation Test"
description: A moderated mobile usability test comparing two navigation defaults — and what users actually did
img: assets/img/accordion-cover.png
importance: 8
category: ux
tags: [Behavior beats preference]
---

{% include figure.liquid loading="eager" path="assets/img/accordion-cover.png" class="img-fluid rounded z-depth-1" %}

> **A note on the data.** A generalized, anonymized version of real client work. Figures are *illustrative*, recreated to demonstrate the method rather than to report any client's results.

## The question

On mobile, a page's section tabs collapse into an accordion. That left the design team with a small but real decision: should the first section open automatically on load, or should everything start closed? We wanted to know which default helped people find content faster — and, just as importantly, whether users even noticed the difference.

<div class="row text-center mt-4 mb-2">
  <div class="col-sm-4">
    <h2 class="font-weight-bold mb-0">8</h2>
    <p class="text-muted">participants, moderated</p>
  </div>
  <div class="col-sm-4">
    <h2 class="font-weight-bold mb-0">2</h2>
    <p class="text-muted">prototype versions</p>
  </div>
  <div class="col-sm-4">
    <h2 class="font-weight-bold mb-0">A / B</h2>
    <p class="text-muted">within-subjects, Figma</p>
  </div>
</div>

## What I compared

I built two Figma prototypes that differed in exactly one way — the first section's default state — and ran a within-subjects test so every participant experienced both. Each person completed the same set of find-the-content tasks on each version. I captured two things in parallel: which version they *said* they preferred, and how long it actually took them to locate content in each.

{% include figure.liquid loading="eager" path="assets/img/accordion-conditions.png" class="img-fluid rounded z-depth-1" %}

## No clear favorite

<div class="row align-items-center">
  <div class="col-md-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/accordion-preference.png" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-md-6 mt-3 mt-md-0">
    <p>Asked outright which version they preferred, participants split — and fully half had no strong opinion either way.</p>
    <p>That's a useful non-result: stated preference simply couldn't decide this design. If we wanted an evidence-based answer, the <strong>behavioral</strong> data would have to carry it.</p>
  </div>
</div>

## Open is faster — especially deeper in the page

Behavior told a much clearer story than opinion did. People located content meaningfully faster when the first section was already open — and the advantage *grew* the further down the page the target sat. Starting closed taxes every interaction; starting open pays that cost back, most of all where it's hardest to navigate.

{% include figure.liquid loading="eager" path="assets/img/accordion-time.png" class="img-fluid rounded z-depth-1" %}

## The call

<div class="row mt-3">
  <div class="col-md-6 mt-3 mt-md-0">
    <h6 class="font-weight-bold">Default to the first section open</h6>
    <p>It measurably speeds up finding content with no cost in stated preference — a clear, low-risk default the team could ship with confidence.</p>
  </div>
  <div class="col-md-6 mt-3 mt-md-0">
    <h6 class="font-weight-bold">Adapt to the entry point</h6>
    <p>When someone lands from a specific link, open the section they came for rather than always defaulting to the first — let intent override the default.</p>
  </div>
</div>

## What eight users can — and can't — tell you

A moderated study with eight people is the right tool for some questions and the wrong one for others, and I try to be clear about which is which:

- **Don't over-read the preference split.** With n = 8, a 4&ndash;2&ndash;2 breakdown is far too thin to treat as a real distribution. The honest takeaway is the *absence* of a strong preference, not the exact proportions — which is precisely why I leaned on behavior to make the call.
- **The timing result is directional.** Eight participants are enough to see a consistent, sensible pattern, but not to put a confidence interval around the gap. I'd frame it as a strong signal pointing one way, and validate it at scale with a larger remote unmoderated timing test or a live A/B before treating the size of the effect as settled.
- **Watch the design's own confounds.** Within-subjects exposure invites order and novelty effects, so I'd confirm the conditions were counterbalanced. And the open-first advantage likely *interacts* with page length — it should matter more on long pages — which is the first thing I'd probe next.

Small-sample usability is for finding problems and pointing the way, not for declaring effect sizes. Saying that plainly is what lets a team act on the direction now while knowing exactly which experiment would confirm it.
