---
page_id: projects
layout: page
title: Projects
permalink: /projects/
description: Research that bridges academic rigor and applied product work.
nav: true
nav_order: 3
---

<!-- ============================================================
     PROJECTS PAGE
     - Edit the intro copy in .projects-intro below (plain text).
     - Cards are generated automatically from the files in
       _projects/en-us/ and ordered by each project's `importance`
       (lower number = appears earlier). No categories/headers.
     ============================================================ -->

<div class="projects-intro">
  <p class="projects-lead">
    I'm a social-psychology PhD and UX researcher. I bring the rigor of
    experimental science to real product questions by pairing quantitative
    methods with the qualitative depth that explains the <em>why</em> behind
    the numbers.
  </p>
  <p class="projects-sub">
    Below is a selection of applied work. Client projects have been generalized
    and anonymized, and all figures shown are illustrative.
  </p>
</div>

<div class="projects">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
    {% assign sorted_projects = site.projects | sort: "importance" %}
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
