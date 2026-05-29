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

  <section class="news-list" aria-label="MINDxAI Lab news">
    {%- assign news_posts = site.posts | where_exp: "post", "post.tags contains 'news'" -%}
    {%- for post in news_posts -%}
    <article class="news-card">
      {%- assign post_image = post.card_image | default: post.image -%}
      {%- assign post_image_alt = post.card_image_alt | default: post.image_alt | default: post.title -%}
      {%- if post_image -%}
      <a href="{{ post.url | relative_url }}" aria-label="{{ post.title | escape }}">
        <img class="news-thumb" src="{{ post_image | relative_url }}" alt="{{ post_image_alt | escape }}">
      </a>
      {%- endif -%}
      <div>
        {%- if post.display_date -%}
        <p class="news-date">{{ post.display_date }}</p>
        {%- else -%}
        <p class="news-date">{{ post.date | date: "%B %Y" }}</p>
        {%- endif -%}
        <h2><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h2>
        <p>{{ post.summary }}</p>
        <a class="news-read-more" href="{{ post.url | relative_url }}">Read more</a>
      </div>
    </article>
    {%- endfor -%}
  </section>
</div>
