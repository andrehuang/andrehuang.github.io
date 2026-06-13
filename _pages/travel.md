---
layout: default
permalink: /travel/
title: travel
nav: true
nav_order: 4.5
---

<style>
  .travel-kind {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--global-theme-color);
    border: 1px solid var(--global-theme-color);
    border-radius: 100px;
    padding: 0.15rem 0.6rem;
    margin-bottom: 0.5rem;
  }
  .post-list li .post-loc {
    color: var(--global-text-color-light);
  }
</style>

<div class="post">

  <div class="header-bar">
    <h1>Travel</h1>
    <h2>Plans, journals, and 游记 — notes from the road.</h2>
  </div>

  {% assign travel_entries = site.travel | sort: "date" | reverse %}

  {% if travel_entries.size > 0 %}
  <ul class="post-list">
    {% for entry in travel_entries %}
    {% assign year = entry.date | date: "%Y" %}
    <li>
      {% if entry.thumbnail %}
      <div class="row">
        <div class="col-sm-9">
      {% endif %}

      {% if entry.kind %}<span class="travel-kind">{{ entry.kind }}</span>{% endif %}

      <h3>
        {% if entry.redirect == blank %}
          <a class="post-title" href="{{ entry.url | relative_url }}">{{ entry.title }}</a>
        {% elsif entry.redirect contains '://' %}
          <a class="post-title" href="{{ entry.redirect }}" target="_blank">{{ entry.title }}</a>
          <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        {% else %}
          <a class="post-title" href="{{ entry.redirect | relative_url }}">{{ entry.title }}</a>
        {% endif %}
      </h3>

      <p>{{ entry.description }}</p>

      <p class="post-meta">
        {{ entry.date | date: '%B %d, %Y' }}
        {% if entry.location %}
        &nbsp; &middot; &nbsp; <span class="post-loc">{{ entry.location }}</span>
        {% endif %}
      </p>

      {% if entry.thumbnail %}
        </div>
        <div class="col-sm-3">
          <img class="card-img" src="{{ entry.thumbnail | relative_url }}" style="object-fit: cover; height: 90%" alt="image">
        </div>
      </div>
      {% endif %}
    </li>
    {% endfor %}
  </ul>
  {% else %}
  <p>Coming soon — travel plans and journals will land here.</p>
  {% endif %}

</div>
