---
layout: default
permalink: /travel/
title: travel
nav: true
nav_order: 4.5
---

<style>
  .travel-list {
    display: grid;
    gap: 1.5rem;
    margin: 2rem 0 1.5rem;
    padding: 0;
    list-style: none;
  }
  .travel-card {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
    background: var(--global-card-bg-color);
    color: var(--global-text-color);
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }
  .travel-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px -14px rgba(0, 0, 0, 0.35);
    border-color: var(--global-theme-color);
    color: var(--global-text-color);
  }
  .travel-card-media {
    position: relative;
    flex: 0 0 40%;
    max-width: 40%;
    min-height: 200px;
    overflow: hidden;
    background: var(--global-bg-color);
  }
  /* Absolute fill layer: one image fills it, two images split it 50/50.
     Using inset:0 (not percentage heights) so it always constrains the photos. */
  .tc-fill {
    position: absolute;
    inset: 0;
    display: flex;
  }
  .tc-fill > img {
    flex: 1 1 0;
    min-width: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .tc-fill > img + img {
    border-left: 2px solid var(--global-card-bg-color);
  }
  .travel-card-ph {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--global-theme-color);
    background: var(--global-card-bg-color);
    background: linear-gradient(
      135deg,
      color-mix(in srgb, var(--global-theme-color) 16%, var(--global-card-bg-color)),
      var(--global-card-bg-color)
    );
  }
  .travel-card-ph svg {
    width: 56px;
    height: 56px;
    opacity: 0.45;
  }
  .travel-card-body {
    flex: 1 1 auto;
    padding: 1.25rem 1.5rem;
    display: flex;
    flex-direction: column;
  }
  .travel-kind {
    align-self: flex-start;
    display: inline-block;
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--global-theme-color);
    border: 1px solid var(--global-theme-color);
    border-radius: 100px;
    padding: 0.12rem 0.6rem;
    margin-bottom: 0.6rem;
  }
  .travel-card-title {
    font-size: 1.4rem;
    line-height: 1.2;
    margin: 0 0 0.45rem;
    color: var(--global-text-color);
  }
  .travel-card:hover .travel-card-title {
    color: var(--global-theme-color);
  }
  .travel-card-ext {
    width: 0.95rem;
    height: 0.95rem;
    vertical-align: baseline;
    opacity: 0.6;
    margin-left: 0.3rem;
  }
  .travel-card-desc {
    font-size: 0.9rem;
    margin: 0 0 0.85rem;
    color: var(--global-text-color);
  }
  .travel-card-meta {
    font-size: 0.8rem;
    color: var(--global-text-color-light);
    margin: auto 0 0;
  }
  .travel-credits {
    font-size: 0.72rem;
    color: var(--global-text-color-light);
    text-align: center;
    margin: 0 0 2rem;
  }
  @media (max-width: 576px) {
    .travel-card {
      flex-direction: column;
    }
    .travel-card-media {
      flex-basis: auto;
      max-width: 100%;
      width: 100%;
      height: 190px;
      min-height: 190px;
    }
  }
</style>

<div class="post">

  <div class="header-bar">
    <h1>Travel</h1>
    <h2>Plans, journals, and 游记 — notes from the road.</h2>
  </div>

  {% assign travel_entries = site.travel | sort: "date" | reverse %}

  {% if travel_entries.size > 0 %}
  <ul class="travel-list">
    {% for entry in travel_entries %}

    {% comment %} Resolve destination: standalone HTML / external link / own page {% endcomment %}
    {% assign is_external = false %}
    {% if entry.redirect == blank %}
      {% assign href = entry.url | relative_url %}
    {% elsif entry.redirect contains '://' %}
      {% assign href = entry.redirect %}
      {% assign is_external = true %}
    {% else %}
      {% assign href = entry.redirect | relative_url %}
    {% endif %}

    {% comment %} Keep only cover images that actually exist on disk (graceful fallback) {% endcomment %}
    {% assign _ex = "" %}
    {% if entry.covers %}
      {% for c in entry.covers %}
        {% capture _e %}{% file_exists {{ c }} %}{% endcapture %}
        {% if _e == "true" %}{% assign _ex = _ex | append: c | append: "|" %}{% endif %}
      {% endfor %}
    {% else %}
      {% assign single = entry.cover | default: entry.thumbnail %}
      {% if single %}
        {% capture _e %}{% file_exists {{ single }} %}{% endcapture %}
        {% if _e == "true" %}{% assign _ex = single | append: "|" %}{% endif %}
      {% endif %}
    {% endif %}
    {% assign existing_covers = _ex | split: "|" %}

    <li>
      <a class="travel-card" href="{{ href }}"{% if is_external %} target="_blank" rel="noopener noreferrer"{% endif %}>
        <div class="travel-card-media">
          {% if existing_covers.size == 0 %}
            <div class="travel-card-ph" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 20h18M5 20l5-9 3.2 5.4 2-3.2L19 20" />
                <circle cx="16.5" cy="6" r="2" />
              </svg>
            </div>
          {% else %}
            <div class="tc-fill">
              {% for c in existing_covers %}
                <img src="{{ c | relative_url }}" alt="{{ entry.title | escape }}">
              {% endfor %}
            </div>
          {% endif %}
        </div>
        <div class="travel-card-body">
          {% if entry.kind %}<span class="travel-kind">{{ entry.kind }}</span>{% endif %}
          <h3 class="travel-card-title">
            {{ entry.title }}
            {% if is_external %}
              <svg class="travel-card-ext" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            {% endif %}
          </h3>
          {% if entry.description %}<p class="travel-card-desc">{{ entry.description }}</p>{% endif %}
          <p class="travel-card-meta">
            {{ entry.date | date: '%B %d, %Y' }}
            {% if entry.location %} &nbsp; &middot; &nbsp; {{ entry.location }}{% endif %}
          </p>
        </div>
      </a>
    </li>
    {% endfor %}
  </ul>

  {% comment %} Image credits footnote (only entries that declare cover_credits) {% endcomment %}
  {% assign has_credits = false %}
  {% for entry in travel_entries %}{% if entry.cover_credits %}{% assign has_credits = true %}{% endif %}{% endfor %}
  {% if has_credits %}
  <p class="travel-credits">
    Cover photos —
    {% for entry in travel_entries %}{% if entry.cover_credits %}{{ entry.cover_credits }}{% unless forloop.last %} · {% endunless %}{% endif %}{% endfor %}
  </p>
  {% endif %}

  {% else %}
  <p>Coming soon — travel plans and journals will land here.</p>
  {% endif %}

</div>
