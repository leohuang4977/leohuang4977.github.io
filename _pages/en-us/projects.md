---
layout: page
title: "Projects"
permalink: /projects/
---

# Data Science Projects
<div class="row">
  {% for project in site.projects %}
    {% if project.category == "DS" %}
      <div class="col-md-4">
        {% include card.liquid content=project %}
      </div>
    {% endif %}
  {% endfor %}
</div>

# UX Projects
<div class="row">
  {% for project in site.projects %}
    {% if project.category == "UX" %}
      <div class="col-md-4">
        {% include card.liquid content=project %}
      </div>
    {% endif %}
  {% endfor %}
</div>
