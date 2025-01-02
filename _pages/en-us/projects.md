---
layout: portfolio
title: "Projects"
permalink: /projects/
---

# UX Projects
<div class="row">
  {% for project in site.pages %}
    {% if project.category == "UX" %}
      <div class="col-md-4">
        {% include card.liquid content=project %}
      </div>
    {% endif %}
  {% endfor %}
</div>


# Data Science Projects
<div class="row">
  {% for project in site.pages %}
    {% if project.category == "DS" %}
      <div class="col-md-4">
        {% include card.liquid content=project %}
      </div>
    {% endif %}
  {% endfor %}
</div>

