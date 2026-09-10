---
layout: home
title: News
# permalink: /about/
---

<style>
  .mindxai-news h1 {
    margin-bottom: 28px;
    text-align: center;
    letter-spacing: 0;
  }

  .news-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 18px;
    padding-bottom: 6px;
    border-bottom: 1px solid #dce7e7;
  }

  .news-filters button {
    padding: 8px 0;
    border: 0;
    border-bottom: 2px solid transparent;
    color: #4d5b5d;
    background: transparent;
    font: inherit;
    font-weight: 600;
    cursor: pointer;
  }

  .news-filters button[aria-pressed="true"] {
    border-bottom-color: #1f7a7f;
    color: #165f66;
  }

  .news-filters button:hover {
    color: #165f66;
  }

  .news-filters button:focus-visible {
    outline: 2px solid #1f7a7f;
    outline-offset: 3px;
  }

  .news-filter-count {
    margin-left: 4px;
    font-size: 0.85em;
    font-weight: 400;
  }

  .news-filter-status {
    margin: 10px 0 22px;
    color: #637174;
    font-size: 0.9rem;
  }

  .news-filters[hidden],
  .news-filter-status[hidden],
  .news-card[hidden] {
    display: none;
  }

  .news-list {
    display: grid;
    gap: 22px;
  }

  .news-card {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 20px;
    padding: 20px;
    border-left: 4px solid #389092;
    border-radius: 8px;
    background: #f6fbfb;
  }

  .news-thumb {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 8px;
    object-fit: cover;
    background: #eef4f4;
  }

  .news-thumb--contain {
    object-fit: contain;
    background: #fff;
  }

  .news-date {
    margin: 0 0 8px;
    color: #1f7a7f;
    font-weight: 700;
  }

  .news-card h2 {
    margin: 0 0 10px;
    color: #3f4a4c;
    font-size: 1.3rem;
    line-height: 1.35;
    letter-spacing: 0;
  }

  .news-card h2 a {
    color: inherit;
    text-decoration: none;
  }

  .news-card h2 a:hover,
  .news-card h2 a:focus {
    color: #1f7a7f;
    text-decoration: underline;
  }

  .news-card p {
    margin: 0 0 12px;
    line-height: 1.7;
  }

  .news-read-more {
    color: #1f7a7f;
    font-weight: 700;
    text-decoration: none;
  }

  .news-read-more:hover,
  .news-read-more:focus {
    text-decoration: underline;
  }

  @media (max-width: 720px) {
    .news-card {
      grid-template-columns: 1fr;
      padding: 18px 16px;
    }

    .news-thumb {
      max-height: 260px;
    }
  }
</style>

<div class="mindxai-news">
  <h1>Lab News</h1>

  {%- assign news_posts = site.posts | where_exp: "post", "post.tags contains 'news'" -%}
  <div class="news-filters" role="group" aria-label="Filter news by category" hidden>
    <button type="button" data-news-filter="all" data-news-label="All news" aria-pressed="true" aria-controls="lab-news-list">All<span class="news-filter-count">{{ news_posts.size }}</span></button>
    {%- for category in site.data.news_categories -%}
      {%- assign category_key = category[0] -%}
      {%- assign category_posts = news_posts | where_exp: "post", "post.tags contains category_key" -%}
      {%- if category_posts.size > 0 -%}
    <button type="button" data-news-filter="{{ category_key }}" data-news-label="{{ category[1].label | escape }}" aria-pressed="false" aria-controls="lab-news-list">{{ category[1].label | escape }}<span class="news-filter-count">{{ category_posts.size }}</span></button>
      {%- endif -%}
    {%- endfor -%}
  </div>
  <p class="news-filter-status" role="status" aria-live="polite" hidden></p>

  <section class="news-list" id="lab-news-list" aria-label="MINDxAI Lab news">
    {%- for post in news_posts -%}
    <article class="news-card" data-news-topics="{{ post.tags | join: ' ' | escape }}">
      {%- assign post_image = post.card_image | default: post.image -%}
      {%- assign post_image_alt = post.card_image_alt | default: post.image_alt | default: post.title -%}
      {%- if post_image -%}
      <a href="{{ post.url | relative_url }}" aria-label="{{ post.title | escape }}">
        <img class="news-thumb{% if post.card_image_fit == 'contain' %} news-thumb--contain{% endif %}" src="{{ post_image | relative_url }}" alt="{{ post_image_alt | escape }}">
      </a>
      {%- endif -%}
      <div>
        {%- if post.display_date -%}
        <p class="news-date">{{ post.display_date }}</p>
        {%- else -%}
        <p class="news-date">{{ post.date | date: "%B %Y" }}</p>
        {%- endif -%}
        <h2><a href="{{ post.url | relative_url }}">{% include news-category-badge.html post=post %} {{ post.title | escape }}</a></h2>
        <p>{{ post.summary }}</p>
        <a class="news-read-more" href="{{ post.url | relative_url }}">Read more</a>
      </div>
    </article>
    {%- endfor -%}
  </section>
</div>

<script src="{{ '/assets/js/news-filters.js' | relative_url }}" defer></script>
