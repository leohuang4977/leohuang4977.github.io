---
page_id: projects
layout: page
title: Projects
permalink: /projects/
description: Research that bridges academic rigor and applied product work.
nav: true
nav_order: 3
display_categories: [ux, academic]
horizontal: false
---

<!-- ============================================================
     PROJECTS PAGE
     - Edit the intro copy in .projects-intro below (plain text).
     - Cards are generated automatically from _projects/en-us/*.
       Each project's `category` decides its section and
       `importance` decides its order (lower = first).
     - Section labels live in _data/en-us/strings.yml under
       `categories:` and are listed in `display_categories` above.
     ============================================================ -->

<div class="projects-intro">
  <p class="projects-lead">
    I'm a social-psychology PhD and UX researcher. I bring the rigor of
    experimental science to practical product questions — pairing quantitative
    methods with the qualitative depth that explains the <em>why</em> behind
    the numbers.
  </p>
  <p class="projects-sub">
    A selection of applied and academic work. Client projects are generalized
    and anonymized, and every figure shown is illustrative.
  </p>
</div>

<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
    <!-- Display categorized projects -->
    {% for category in page.display_categories %}
      {% assign categorized_projects = site.projects | where: "category", category %}
      {% assign sorted_projects = categorized_projects | sort: "importance" %}
      {% if sorted_projects.size > 0 %}
        <h2 class="category" id="{{ category }}">{{ site.data[site.active_lang].strings.categories[category] }}</h2>
        {% if page.horizontal %}
          <div class="container">
            <div class="row row-cols-1 row-cols-md-2">
              {% for project in sorted_projects %}
                {% include projects_horizontal.liquid %}
              {% endfor %}
            </div>
          </div>
        {% else %}
          <div class="row row-cols-1 row-cols-sm-2">
            {% for project in sorted_projects %}
              {% include projects.liquid %}
            {% endfor %}
          </div>
        {% endif %}
      {% endif %}
    {% endfor %}
  {% else %}
    <!-- Display projects without categories -->
    {% assign sorted_projects = site.projects | sort: "importance" %}
    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
          {% for project in sorted_projects %}
            {% include projects_horizontal.liquid %}
          {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="row row-cols-1 row-cols-sm-2">
        {% for project in sorted_projects %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    {% endif %}
  {% endif %}
</div>
