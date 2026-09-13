---
layout: home
title: Research
---

<style>
  .research-page h1,
  .research-page h2,
  .research-page h3 {
    letter-spacing: 0;
  }

  .research-page h1 {
    text-align: center;
  }

  .research-overview {
    max-width: none;
    margin: 18px 0 34px;
    padding: 18px 22px;
    border: 1px solid #dce7e7;
    border-left: 4px solid #389092;
    border-radius: 8px;
    background: #f7fbfb;
  }

  .research-subtitle {
    margin: 0;
    color: #37494c;
    font-size: 1.08rem;
    line-height: 1.7;
  }

  .research-subtitle strong {
    color: #165f66;
  }

  .research-updates {
    margin: 18px 0 24px;
    padding: 20px 22px 18px;
    border: 1px solid #dce7e7;
    border-radius: 8px;
    background: #fff;
    scroll-margin-top: 90px;
  }

  .research-updates-heading {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid #dce7e7;
  }

  .research-updates h2 {
    margin: 0;
    color: #165f66;
    font-size: 1.25rem;
    line-height: 1.35;
  }

  .research-updates-all {
    flex: 0 0 auto;
    color: #1f7a7f;
    font-size: 0.88rem;
    font-weight: 700;
    text-decoration: none;
  }

  .research-updates-all:hover,
  .research-updates-all:focus {
    color: #165f66;
    text-decoration: underline;
  }

  .research-updates-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 14px;
    margin: 13px 0 3px;
    padding: 0;
    color: #4d5b5d;
    font-size: 0.78rem;
    font-weight: 700;
    list-style: none;
  }

  .research-updates-legend li {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .research-updates-legend-marker,
  .research-timeline-dot {
    display: inline-block;
    flex: 0 0 auto;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .research-updates-legend-marker--publication,
  .research-timeline-event--publication .research-timeline-dot {
    background: #b24852;
  }

  .research-updates-legend-marker--funding,
  .research-timeline-event--funding .research-timeline-dot {
    background: #c78723;
  }

  .research-updates-legend-marker--conference,
  .research-timeline-event--conference .research-timeline-dot {
    background: #52789b;
  }

  .research-timeline {
    margin-top: 8px;
  }

  .research-timeline-viewport {
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    scrollbar-width: thin;
    scrollbar-color: #8eb3b5 #edf3f3;
  }

  .research-timeline-scroll-controls {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 12px;
    color: #4d5b5d;
    font-size: 0.8rem;
  }

  .research-timeline-scroll-controls[hidden] {
    display: none;
  }

  @media (max-width: 480px) {
    .research-timeline-scroll-controls span {
      order: 1;
      flex-basis: 100%;
      text-align: center;
    }
  }

  .research-timeline-scroll-controls button {
    padding: 6px 10px;
    border: 1px solid #8eb3b5;
    border-radius: 6px;
    background: #fff;
    color: #165f66;
    font: inherit;
    cursor: pointer;
  }

  .research-timeline-scroll-controls button:disabled {
    opacity: 0.4;
    cursor: default;
  }

  .research-timeline-events {
    position: relative;
    width: calc(100% - 44px);
    min-width: 720px;
    height: 72px;
    margin: 0 22px;
    padding: 0;
    list-style: none;
  }

  .research-timeline-events::before {
    position: absolute;
    top: 29px;
    right: 0;
    left: 0;
    height: 2px;
    background: #dce7e7;
    content: "";
  }

  .research-timeline-event {
    position: absolute;
    top: 0;
    left: calc(var(--timeline-position) + var(--timeline-offset));
    width: 44px;
    transform: translateX(-50%);
  }

  .research-timeline-event button {
    display: grid;
    grid-template-rows: 22px 14px 20px;
    justify-items: center;
    width: 44px;
    min-height: 56px;
    padding: 0;
    border: 0;
    color: #637174;
    background: transparent;
    font: inherit;
    cursor: pointer;
  }

  .research-timeline-event time {
    grid-row: 1;
    font-size: 0.71rem;
    font-weight: 700;
    line-height: 1.25;
  }

  .research-timeline-dot {
    grid-row: 2;
    align-self: center;
    z-index: 1;
    box-sizing: content-box;
    border: 2px solid #fff;
  }

  .research-timeline-event button[aria-selected="true"] .research-timeline-dot,
  .research-timeline-event button:hover .research-timeline-dot {
    box-shadow: 0 0 0 2px #fff, 0 0 0 3.5px currentColor;
  }

  .research-timeline-event--publication button {
    color: #b24852;
  }

  .research-timeline-event--funding button {
    color: #a66b12;
  }

  .research-timeline-event--conference button {
    color: #3c668c;
  }

  .research-timeline-year {
    grid-row: 3;
    position: relative;
    min-height: 18px;
    color: #637174;
    font-size: 0.68rem;
    font-weight: 700;
    line-height: 1.4;
  }

  .research-timeline-year::before {
    position: absolute;
    top: -4px;
    left: 50%;
    width: 1px;
    height: 5px;
    background: #b7cdcd;
    content: "";
    transform: translateX(-50%);
  }

  .research-timeline-year--empty {
    visibility: hidden;
  }

  .research-timeline-month--empty {
    visibility: hidden;
  }

  .research-timeline-content {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 18px;
    align-items: start;
    min-height: 114px;
    margin-top: 8px;
  }

  .research-timeline-detail {
    min-width: 0;
  }

  .research-timeline-detail article[hidden] {
    display: none;
  }

  .research-timeline-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    align-items: center;
    margin: 0 0 5px;
    color: #4d5b5d;
    font-size: 0.82rem;
    font-weight: 700;
    line-height: 1.4;
  }

  .research-timeline-type {
    display: inline-flex;
    align-items: center;
    min-height: 1.6em;
    padding: 1px 7px;
    border-radius: 999px;
    font-size: 0.74rem;
  }

  .research-timeline-type--publication {
    color: #8d313b;
    background: #f8e8ea;
  }

  .research-timeline-type--funding {
    color: #82530a;
    background: #fbf1df;
  }

  .research-timeline-type--conference {
    color: #315c80;
    background: #e9f0f6;
  }

  .research-timeline-detail h3 {
    margin: 0 0 5px;
    font-size: 1rem;
    line-height: 1.45;
  }

  .research-timeline-detail h3 a {
    color: #1f7a7f;
    text-decoration: none;
  }

  .research-timeline-detail h3 a:hover,
  .research-timeline-detail h3 a:focus {
    color: #165f66;
    text-decoration: underline;
  }

  .research-timeline-summary {
    margin: 0;
    color: #4d5b5d;
    font-size: 0.92rem;
    line-height: 1.58;
  }

  .research-timeline-controls {
    display: flex;
    gap: 6px;
    padding-top: 4px;
  }

  .research-timeline-control {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    padding: 0;
    border: 1px solid #9ebebe;
    border-radius: 50%;
    color: #1f7a7f;
    background: #fff;
    cursor: pointer;
  }

  .research-timeline-control:hover:not(:disabled),
  .research-timeline-control:focus-visible:not(:disabled) {
    color: #fff;
    background: #1f7a7f;
  }

  .research-timeline-control:disabled {
    border-color: #dce7e7;
    color: #a9b6b8;
    cursor: not-allowed;
  }

  .research-updates a:focus-visible,
  .research-timeline-event button:focus-visible,
  .research-timeline-control:focus-visible {
    outline: 2px solid #1f7a7f;
    outline-offset: 3px;
  }

  .research-updates-screen-reader-status {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .research-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    scroll-margin-top: 90px;
  }

  .research-filters button {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    max-width: 100%;
    min-height: 44px;
    box-sizing: border-box;
    padding: 10px 14px;
    border: 1px solid #b5cccc;
    border-radius: 8px;
    color: #334e50;
    background: #fff;
    font: inherit;
    font-size: 0.88rem;
    font-weight: 600;
    line-height: 1.4;
    text-align: left;
    cursor: pointer;
  }

  .research-filters button:hover {
    border-color: #1f6f70;
    background: #eef6f6;
  }

  .research-filters button[aria-pressed="true"] {
    border-color: #1f6f70;
    color: #fff;
    background: #1f6f70;
    box-shadow: inset 0 0 0 1px #1f6f70;
  }

  .research-filter-help {
    margin: 0 0 12px;
    color: #4d5b5d;
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .research-filter-help strong {
    color: #334e50;
    margin-right: 7px;
  }

  .research-filters button:focus-visible,
  .research-project-tag:focus-visible {
    outline: 2px solid #1f7a7f;
    outline-offset: 3px;
  }

  .research-filter-count {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 1.65em;
    height: 1.65em;
    border-radius: 50%;
    color: #496467;
    background: #edf3f3;
    font-size: 0.82em;
    font-weight: 600;
  }

  .research-filters button[aria-pressed="true"] .research-filter-count {
    color: #fff;
    background: rgba(255, 255, 255, 0.18);
  }

  .research-filter-status {
    margin: 14px 0 22px;
    color: #637174;
    font-size: 0.9rem;
  }

  .research-filters[hidden],
  .research-filter-help[hidden],
  .research-filter-status[hidden],
  .research-topic-description[hidden],
  .research-project[hidden] {
    display: none;
  }

  #publication-adaptivecopilot {
    scroll-margin-top: 90px;
  }

  .research-topic-description {
    margin: 0 0 24px;
    padding: 18px 22px;
    border: 1px solid #dce7e7;
    border-radius: 8px;
    background: #eef6f6;
  }

  .research-topic-description h2 {
    margin: 0 0 8px;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .research-topic-description p {
    margin: 0;
    color: #4d5b5d;
    line-height: 1.65;
  }

  .research-project-list {
    display: grid;
    gap: 24px;
  }

  .research-project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin: 0 0 14px;
  }

  .research-funding-status {
    display: inline-block;
    margin: 0 0 7px;
    padding: 3px 8px;
    border: 1px solid #b8d4d0;
    border-radius: 4px;
    color: #276866;
    background: #eef7f4;
    font-size: 0.72rem;
    font-weight: 700;
    line-height: 1.35;
  }

  .research-project .research-project-tag {
    max-width: 100%;
    padding: 3px 7px;
    border-radius: 4px;
    color: #185f63;
    background: #dfeded;
    font-size: 0.7rem;
    font-weight: 700;
    line-height: 1.4;
    text-decoration: none;
  }

  .research-project-tag:hover {
    background: #cfe4e4;
    text-decoration: underline;
  }

  .research-project {
    display: grid;
    grid-template-columns: 360px minmax(0, 1fr);
    gap: 28px;
    align-items: start;
    margin-top: 0;
    padding: 20px;
    border: 1px solid #e2ecec;
    border-left: 4px solid #cfe8e8;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(31, 122, 127, 0.07);
    scroll-margin-top: 90px;
  }

  .research-project img {
    width: 360px;
    height: 240px;
    object-fit: cover;
    border-radius: 8px;
  }

  .project-media-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 360px;
    height: 240px;
    border: 1px dashed #b9d4d4;
    border-radius: 8px;
    color: #637174;
    background: #f7fbfb;
    text-align: center;
  }

  #project-ai-vr-manufacturing-foundry figure > img {
    object-fit: contain;
    background: #f7fbfb;
  }

  .project-video-demo {
    grid-column: 1 / -1;
    width: 100%;
    margin: 22px 0 0;
  }

  .project-video-demo h4 {
    margin: 0 0 10px;
  }

  .project-video-demo video {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 8px;
    background: #172326;
  }

  .project-video-note {
    margin: 8px 0 0;
    text-align: center;
    font-size: 0.92rem;
  }

  .project-video-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 76px;
    margin-top: 16px;
    border: 1px dashed #b9d4d4;
    border-radius: 6px;
    color: #637174;
    background: #f7fbfb;
    font-weight: 700;
  }

  #project-ai-vr-manufacturing-foundry .project-video-placeholder {
    grid-column: 1 / -1;
    margin-top: 0;
    min-height: 150px;
  }

  .research-project figure {
    margin: 0;
  }

  .research-project figcaption {
    margin-top: 10px;
    font-size: 0.95rem;
    font-weight: 700;
    line-height: 1.35;
  }

  .research-project figcaption a {
    color: #389092;
  }

  .research-project figcaption span {
    display: block;
    margin-top: 4px;
    color: #4d5b5d;
    font-weight: 700;
  }

  .project-button {
    display: inline-block;
    margin-top: 3px;
    padding: 7px 16px;
    border-radius: 6px;
    color: #fff;
    background: #1f7a7f;
    text-decoration: none;
    font-weight: 700;
  }

  .project-button:hover,
  .project-button:focus {
    color: #fff;
    background: #185f63;
    text-decoration: none;
  }

  .research-project h3 {
    margin-top: 0;
  }

  .research-project p {
    line-height: 1.68;
    text-align: justify;
    text-justify: inter-word;
  }

  .research-project a {
    font-weight: 700;
  }

  .project-publications {
    margin-top: 18px;
    padding: 14px 16px;
    border-radius: 8px;
    background: #f7fbfb;
  }

  .project-publications h4 {
    margin: 0 0 8px;
    color: #454545;
    font-size: 1rem;
  }

  .project-publication-list {
    margin: 0;
    padding-left: 20px;
  }

  .project-publication-list li {
    margin-bottom: 8px;
    line-height: 1.55;
  }

  .project-publication-list a {
    color: #1f7a7f;
    font-weight: 400;
  }

  .project-outline-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;
  }

  .project-outline-button {
    display: inline-block;
    padding: 7px 16px;
    border: 1px solid #1f7a7f;
    border-radius: 6px;
    color: #165f66;
    background: #fff;
    text-decoration: none;
    font-weight: 700;
  }

  .project-outline-button:hover,
  .project-outline-button:focus {
    color: #165f66;
    background: #eaf5f5;
    text-decoration: none;
  }

  @media (max-width: 480px) {
    .research-updates {
      padding: 17px 16px 16px;
    }

    .research-updates-heading {
      align-items: flex-start;
      flex-direction: column;
      gap: 7px;
    }

    .research-filters button {
      width: 100%;
    }
  }

  @media (max-width: 760px) {
    .research-overview {
      margin: 16px 0 30px;
      padding: 16px;
    }

    .research-subtitle {
      font-size: 1rem;
    }

    .research-timeline-content {
      grid-template-columns: 1fr;
      gap: 12px;
      min-height: 0;
    }

    .research-timeline-controls {
      order: -1;
      justify-content: flex-end;
      padding-top: 0;
    }

    .research-timeline-events {
      min-width: 640px;
    }

    .research-topic-description {
      padding: 15px 16px;
    }

    .research-project {
      grid-template-columns: 1fr;
      padding: 16px;
    }

    .research-project img {
      width: 100%;
      height: auto;
      max-height: 260px;
    }

    .project-media-placeholder {
      width: 100%;
      height: auto;
      aspect-ratio: 3 / 2;
    }

    .research-project p {
      text-align: left;
    }
  }
</style>

<div class="research-page">
  <h1>Ongoing Research Projects</h1>

  {%- assign research_update_posts = site.posts | where_exp: "post", "post.tags contains 'news'" -%}
  {%- assign research_update_count = 0 -%}
  {%- assign research_update_start_ordinal = 0 -%}
  {%- assign research_update_end_ordinal = 0 -%}
  {%- for post in research_update_posts reversed -%}
    {%- if post.tags contains 'publications' or post.tags contains 'funding' or post.tags contains 'conferences' -%}
      {%- assign research_update_year_number = post.date | date: "%Y" | plus: 0 -%}
      {%- assign research_update_month_number = post.date | date: "%m" | plus: 0 -%}
      {%- assign research_update_day_number = post.date | date: "%d" | plus: 0 -%}
      {%- assign research_update_month_ordinal = research_update_year_number | times: 12 | plus: research_update_month_number -%}
      {%- assign research_update_ordinal = research_update_month_ordinal | times: 31 | plus: research_update_day_number -%}
      {%- if research_update_count == 0 -%}
        {%- assign research_update_start_ordinal = research_update_ordinal -%}
      {%- endif -%}
      {%- assign research_update_end_ordinal = research_update_ordinal -%}
      {%- assign research_update_count = research_update_count | plus: 1 -%}
    {%- endif -%}
  {%- endfor -%}
  {%- assign research_update_span = research_update_end_ordinal | minus: research_update_start_ordinal -%}
  {%- if research_update_span == 0 -%}
    {%- assign research_update_span = 1 -%}
  {%- endif -%}
  {%- capture research_related_news -%}
  <section class="research-updates" id="research-updates" aria-labelledby="research-updates-heading">
    <div class="research-updates-heading">
      <h2 id="research-updates-heading">Research-Related News</h2>
      <a class="research-updates-all" href="{{ '/News.html' | relative_url }}">View all news <span aria-hidden="true">→</span></a>
    </div>
    <ul class="research-updates-legend" aria-label="Research news categories">
      <li><span class="research-updates-legend-marker research-updates-legend-marker--publication" aria-hidden="true"></span>Publications</li>
      <li><span class="research-updates-legend-marker research-updates-legend-marker--funding" aria-hidden="true"></span>Research Funding</li>
      <li><span class="research-updates-legend-marker research-updates-legend-marker--conference" aria-hidden="true"></span>Conference Presentations</li>
    </ul>
    <div class="research-timeline" data-research-updates>
      <div class="research-timeline-scroll-controls" data-timeline-scroll-controls hidden>
        <button type="button" data-timeline-scroll-left aria-label="Scroll timeline to earlier dates">← Earlier dates</button>
        <span>Swipe or scroll to explore</span>
        <button type="button" data-timeline-scroll-right aria-label="Scroll timeline to later dates">Later dates →</button>
      </div>
      <div class="research-timeline-viewport" aria-label="Research news timeline">
        <ol class="research-timeline-events" role="tablist" aria-label="Select a research news item">
          {%- assign research_update_index = 0 -%}
          {%- assign previous_update_year = '' -%}
          {%- assign previous_update_month = '' -%}
          {%- for post in research_update_posts reversed -%}
            {%- if post.tags contains 'publications' or post.tags contains 'funding' or post.tags contains 'conferences' -%}
              {%- if post.tags contains 'publications' -%}
                {%- assign research_update_type = 'publication' -%}
                {%- assign research_update_label = 'Publication' -%}
              {%- elsif post.tags contains 'funding' -%}
                {%- assign research_update_type = 'funding' -%}
                {%- assign research_update_label = 'Research funding' -%}
              {%- else -%}
                {%- assign research_update_type = 'conference' -%}
                {%- assign research_update_label = 'Conference presentation' -%}
              {%- endif -%}
              {%- assign research_update_index = research_update_index | plus: 1 -%}
              {%- assign research_update_year = post.date | date: "%Y" -%}
              {%- assign research_update_month = post.date | date: "%Y-%m" -%}
              {%- assign research_update_year_number = post.date | date: "%Y" | plus: 0 -%}
              {%- assign research_update_month_number = post.date | date: "%m" | plus: 0 -%}
              {%- assign research_update_day_number = post.date | date: "%d" | plus: 0 -%}
              {%- assign research_update_month_ordinal = research_update_year_number | times: 12 | plus: research_update_month_number -%}
              {%- assign research_update_ordinal = research_update_month_ordinal | times: 31 | plus: research_update_day_number -%}
              {%- assign research_update_offset = research_update_ordinal | minus: research_update_start_ordinal -%}
              {%- assign research_update_position = research_update_offset | times: 100.0 | divided_by: research_update_span | round: 2 -%}
              <li class="research-timeline-event research-timeline-event--{{ research_update_type }}" role="presentation" data-timeline-position="{{ research_update_position }}" style="--timeline-position: {{ research_update_position }}%; --timeline-offset: 0px;">
                <button type="button" id="research-update-tab-{{ research_update_index }}" role="tab" aria-controls="research-update-panel-{{ research_update_index }}" aria-selected="{% if research_update_index == 1 %}true{% else %}false{% endif %}" data-research-update-tab data-research-update-index="{{ research_update_index | minus: 1 }}" aria-label="{{ research_update_label }}: {{ post.date | date: '%B %-d, %Y' }} — {{ post.title | escape }}">
                  {%- if research_update_month != previous_update_month -%}
                  <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: "%b" }}</time>
                  {%- else -%}
                  <span class="research-timeline-month--empty" aria-hidden="true">{{ post.date | date: "%b" }}</span>
                  {%- endif -%}
                  <span class="research-timeline-dot" aria-hidden="true"></span>
                  {%- if research_update_year != previous_update_year -%}
                  <span class="research-timeline-year" aria-hidden="true">’{{ post.date | date: "%y" }}</span>
                  {%- else -%}
                  <span class="research-timeline-year research-timeline-year--empty" aria-hidden="true">’{{ post.date | date: "%y" }}</span>
                  {%- endif -%}
                </button>
              </li>
              {%- assign previous_update_year = research_update_year -%}
              {%- assign previous_update_month = research_update_month -%}
            {%- endif -%}
          {%- endfor -%}
        </ol>
      </div>
      <div class="research-timeline-content">
        <div class="research-timeline-detail">
          {%- assign research_update_index = 0 -%}
          {%- for post in research_update_posts reversed -%}
            {%- if post.tags contains 'publications' or post.tags contains 'funding' or post.tags contains 'conferences' -%}
              {%- if post.tags contains 'publications' -%}
                {%- assign research_update_type = 'publication' -%}
                {%- assign research_update_label = 'Publication' -%}
              {%- elsif post.tags contains 'funding' -%}
                {%- assign research_update_type = 'funding' -%}
                {%- assign research_update_label = 'Research Funding' -%}
              {%- else -%}
                {%- assign research_update_type = 'conference' -%}
                {%- assign research_update_label = 'Conference Presentation' -%}
              {%- endif -%}
              {%- assign research_update_index = research_update_index | plus: 1 -%}
          <article id="research-update-panel-{{ research_update_index }}" role="tabpanel" aria-labelledby="research-update-tab-{{ research_update_index }}" data-research-update-panel{% unless research_update_index == 1 %} hidden{% endunless %}>
            <p class="research-timeline-meta">
              <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.display_date | default: post.date | date: "%B %-d, %Y" }}</time>
              <span class="research-timeline-type research-timeline-type--{{ research_update_type }}">{{ research_update_label }}</span>
            </p>
            <h3><a href="{{ post.url | relative_url }}">{{ post.title | escape }} <span aria-hidden="true">→</span></a></h3>
            <p class="research-timeline-summary">{{ post.summary | strip_html | escape }}</p>
          </article>
            {%- endif -%}
          {%- endfor -%}
        </div>
        <div class="research-timeline-controls" aria-label="Research news navigation">
          <button class="research-timeline-control" type="button" data-research-update-previous aria-label="Show previous news item">
            <span aria-hidden="true">←</span>
          </button>
          <button class="research-timeline-control" type="button" data-research-update-next aria-label="Show next news item">
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <p class="research-updates-screen-reader-status" data-research-update-status role="status"></p>
    </div>
  </section>
  {%- endcapture -%}

  <div class="research-overview" aria-label="Research overview">
    <p class="research-subtitle">Our research advances <strong>human-centered AI and adaptive systems</strong> that coordinate with people as their states, goals, and capabilities evolve.</p>
  </div>

  <p class="research-filter-help" id="research-filter-help" hidden><strong>Filter by topic</strong> Click a topic to explore, or choose All to see every project.</p>
  <div class="research-filters" role="group" aria-label="Filter research projects by topic" aria-describedby="research-filter-help" hidden>
    <button type="button" data-research-filter="all" data-research-label="All projects" aria-label="All projects: {{ site.data.research_projects.size }} projects" aria-pressed="true" aria-controls="research-project-list"><span>All</span><span class="research-filter-count" aria-hidden="true">{{ site.data.research_projects.size }}</span></button>
    {%- for topic in site.data.research_topics -%}
      {%- assign topic_key = topic[0] -%}
      {%- assign topic_count = 0 -%}
      {%- for project in site.data.research_projects -%}
        {%- if project[1].topics contains topic_key -%}
          {%- assign topic_count = topic_count | plus: 1 -%}
        {%- endif -%}
      {%- endfor -%}
    <button type="button" data-research-filter="{{ topic_key }}" data-research-label="{{ topic[1].label | escape }}" aria-label="{{ topic[1].label | escape }}: {{ topic_count }} {% if topic_count == 1 %}project{% else %}projects{% endif %}" aria-pressed="false" aria-controls="research-project-list"><span>{{ topic[1].label | escape }}</span><span class="research-filter-count" aria-hidden="true">{{ topic_count }}</span></button>
    {%- endfor -%}
  </div>
  <p class="research-filter-status" role="status" aria-live="polite" hidden></p>

  {%- for topic in site.data.research_topics -%}
  <section class="research-topic-description" data-research-description="{{ topic[0] }}" aria-labelledby="topic-heading-{{ topic[0] }}" hidden>
    <h2 id="topic-heading-{{ topic[0] }}">{{ topic[1].label | escape }}</h2>
    <p>{{ topic[1].description | escape }}</p>
  </section>
  {%- endfor -%}

  <section class="research-project-list" id="research-project-list" aria-label="MINDxAI Lab research projects">
      <article class="research-project" id="project-cognitive-emotional-driving-automation" data-research-topics="{{ site.data.research_projects['project-cognitive-emotional-driving-automation'].topics | join: ' ' }}">
      <figure>
        <img src="/assets/images/banners/Updated Images/Picture2.jpg" alt="NSF EDSE automation intervention project graphic">
        <figcaption>
          <a href="https://www.nsf.gov/awardsearch/show-award/?AWD_ID=2535920&HistoricalAwards=false" target="_blank" rel="noopener">Sponsor: NSF EDSE</a>
          <span>PIs: Yunmei Liu and David Kaber</span>
        </figcaption>
      </figure>
      <div>
        <h3>Cognitive-Emotional State Assessment for Adaptive Automation Intervention</h3>
        {% include research-project-tags.html project="project-cognitive-emotional-driving-automation" %}
<p>
  This project aims to develop an integrated cognitive-emotional state assessment system to support real-time automation intervention and adaptive system design. By combining physiological sensing, behavioral performance data, and machine learning, the project aims to detect changes in human cognitive workload, emotional state, and task engagement during human-automation interaction.
</p>
<p>
  The resulting models will help identify when and how automation should intervene, adapt, or provide support in order to improve safety. This work contributes to the design of human-centered automation systems that respond not only to task conditions, but also to the evolving cognitive and emotional states of the human operator.
</p>
        <a class="project-button" href="https://mindxai-lab.github.io/nsf-edse-automation-intervention/" target="_blank" rel="noopener">Website</a>
        <div class="project-publications">
<h4>Publications From This Project</h4>
          <ol class="project-publication-list">
            <li>
            <a href="https://openaccess-api.cms-conferences.org/articles/download/978-1-964867-75-5_71" target="_blank" rel="noopener">Das, U.&#42;, Chowdhury, M. H.&#42;, <b>Liu, Y.</b>&dagger;, and Kaber, D. (2025). A systematic review of ground-truth labeling and prediction for cognitive workload adaptive systems. <i>International Conference on Applied Human Factors and Ergonomics</i>.</a>
            </li>
            <li>
              Chowdhury, M. H.&#42;, Wang, S., and <b>Liu, Y.</b>&dagger; (2026). Mediation analysis of workload and emotion on the performance of supervision tasks. <i>Proceedings of the Human Factors and Ergonomics Society Annual Meeting</i>. Accepted.
            </li>
          </ol>
        </div>
        <div class="project-publications">
<h4>Prior Related Work: Wearable Sensing and Real-Time Human-State Prediction</h4>
          <ol class="project-publication-list">
            <li>
            <a href="https://ieeexplore.ieee.org/document/10555690" target="_blank" rel="noopener"><b>Liu, Y.</b>, Grimaldi, N., Basnet, N., Wozniak, D., Chen, E., Zahabi, M., Kaber, D. B., and Ruiz, J. (2024). Classifying cognitive workload using machine learning techniques and non-intrusive wearable devices. <i>IEEE International Conference on Human-Machine Systems</i>, pp. 1-6.</a>
            </li>
            <li>
            <a href="https://ieeexplore.ieee.org/document/10555701" target="_blank" rel="noopener">Grimaldi, N., <b>Liu, Y.</b>, McKendrick, R., Ruiz, J., and Kaber, D. B. (2024). Deep learning forecast of cognitive workload using fNIRS data. <i>IEEE International Conference on Human-Machine Systems</i>, pp. 1-6.</a>
            </li>
            <li>
            <a href="https://openaccess.cms-conferences.org/publications" target="_blank" rel="noopener">Nadri, C., <b>Liu, Y.</b>, Zahabi, M., Kaber, D. B., Ruiz, J., Middleton, M., and McKendrick, R. (2024). Analysis of pre-flight and monitoring tasks using cognitive performance modeling. <i>International Conference on Applied Human Factors and Ergonomics</i>.</a>
            </li>
            <li>
            <a href="https://openaccess.cms-conferences.org/publications" target="_blank" rel="noopener">Grimaldi, N., <b>Liu, Y.</b>, Kaber, D. B., and McKendrick, R. (2024). Deep learning forecast of perceptual load using fNIRS data. <i>International Conference on Applied Human Factors and Ergonomics</i>.</a>
            </li>
          </ol>
<h4>Prior Related Work: Adaptive Automation in Aviation</h4>
          <ol class="project-publication-list">
            <!-- <li>
              <a href="https://doi.org/10.1016/j.ijhcs.2024.103287" target="_blank" rel="noopener">Zhang, W., <b>Liu, Y.</b>, and Kaber, D. B. (2024). Effect of interface design on cognitive workload in unmanned aerial vehicle control. <i>International Journal of Human-Computer Studies</i>.</a>
            </li> -->
            <li id="publication-adaptivecopilot">
            <a href="https://ieeexplore.ieee.org/abstract/document/10937388" target="_blank" rel="noopener">Wen, S., Middleton, M., Ping, S., &hellip;, <b>Liu, Y.</b>, Kaber, D. B., Zahabi, M., McMahan, R., Quispe, S., McKendrick, R., Qian, J., and Silva, C. (2025). AdaptiveCoPilot: design and testing of a neuroadaptive LLM cockpit guidance system in both novice and expert pilots. <i>IEEE VR</i>.</a>
            </li>
          </ol>
        </div>
      </div>
    </article>

    <article class="research-project" id="project-aggressive-driving-mixed-traffic" data-research-topics="{{ site.data.research_projects['project-aggressive-driving-mixed-traffic'].topics | join: ' ' }}">
      <figure>
        <img src="/assets/images/banners/Updated Images/AD.png" alt="Aggressive Driving project graphic">
        <figcaption>
          <a href="/news/jon-rieger-seed-grant-dual-axis-aggression-detection.html" target="_blank" rel="noopener">Sponsor: UofL Jon Rieger Seed Grant</a>
          <span>PI: Yunmei Liu</span>
        </figcaption>
      </figure>
      <div>
        <h3>Aggressive Driving in Mixed Traffic</h3>
        {% include research-project-tags.html project="project-aggressive-driving-mixed-traffic" %}
        <p>
          This project studies how aggressive driving behaviors in mixed human-AV traffic propagate from individual driver state and local maneuvers to traffic-flow safety and efficiency. The work combines CARLA-SUMO human-in-the-loop experiments, empirical human driver modeling, SUMO/TraCI traffic-flow simulation, and human-aware adaptive AV control to understand how surrounding AV aggressiveness and human driver aggressiveness shape workload, trust, stress, speed choice, braking, lane changes, congestion, and surrogate safety outcomes.
        </p>
        <!-- <a class="project-button" href="https://mindxai-lab.github.io/nsf-edse-automation-intervention/" target="_blank" rel="noopener">Website</a> -->
        <a class="project-outline-button" href="https://hfesam2025.conference-program.com/presentation/?id=LECT696&sess=sess263" target="_blank" rel="noopener">Presentation 1: HFES 2025</a>
        <div class="project-publications">
    <h4>Publications From This Project</h4>
          <ol class="project-publication-list">
            <li>
              Das, U.&#42;, Chen, Y.&#42;, Chowdhury, M. H.&#42;, and <b>Liu, Y.</b>&dagger; (2026). A vision-based multimodal framework for quantifying novice driver behavioral responses to aggressive overtaking in continuous simulator traffic. <i>International Conference on Applied Human Factors and Ergonomics</i>. Accepted.
            </li>
            <li>
              Chen, Y.&#42;, Chowdhury, M. H.&#42;, and <b>Liu, Y.</b>&dagger; (2026). From driver intent to road-user perception: a narrative and systematic review of perceived aggressive driving. <i>International Conference on Applied Human Factors and Ergonomics</i>. Accepted.
            </li>
          </ol>
        </div>
        <div class="project-publications">
    <h4>Prior Related Work: Driver Behavior Analysis</h4>
          <ol class="project-publication-list">
            <li>
              <a href="https://doi.org/10.1016/j.aap.2026.108427" target="_blank" rel="noopener">Yang, G., Chase, R. T., <b>Liu, Y.</b>, Pyo, K., Cunningham, C. M., and Kaber, D. B. (2026). Driver behavior analysis at alternative intersection corridors through driving simulator. <i>Accident Analysis & Prevention</i>.</a>
            </li>
            <li>
              <a href="https://doi.org/10.1016/j.apergo.2024.104287" target="_blank" rel="noopener"><b>Liu, Y.</b>, Kaber, D. B., Cunningham, C. M., Chase, R. T., and Pyo, K. (2024). Analysis of driver behavior at grade-separated intersections to support design. <i>Applied Ergonomics</i>.</a>
            </li>
          </ol>
    <h4>Prior Related Work: Human Behavior Modeling</h4>
          <ol class="project-publication-list">
            <li>
              <a href="https://pubmed.ncbi.nlm.nih.gov/41457446/" target="_blank" rel="noopener"><b>Liu, Y.</b> and Kaber, D. B. (2025). Models of automation proportion in human-in-the-loop systems and operator situation awareness responses. <i>Ergonomics</i>.</a>
            </li>
            <li>
              <a href="https://ieeexplore.ieee.org/document/9582630" target="_blank" rel="noopener"><b>Liu, Y.</b> and Kaber, D. B. (2021). Quantitative models for automation rate and situation awareness response: a case study of levels of driving automation. <i>IEEE International Conference on Human-Machine Systems</i>.</a>
            </li>
          </ol>
        </div>
      </div>
      <div class="project-video-demo">
        <h4>Video Demo</h4>
        <video controls preload="metadata" aria-label="Aggressive Driving in Mixed Traffic demonstration video">
          <source src="/assets/images/banners/aggressive%20driving.mp4" type="video/mp4">
          Your browser does not support the video element.
        </video>

        <p class="project-video-description">
          This demo illustrates a representative aggressive-overtaking scenario in
          continuous mixed-traffic simulation and demonstrates the behavioral responses
          detected using our vision-based multimodal framework. It accompanies the study:
          Das, U.*, Chen, Y.*, Chowdhury, M. H.*, and <strong>Liu, Y.</strong>† (2026),
          “A Vision-Based Multimodal Framework for Quantifying Novice Driver Behavioral
          Responses to Aggressive Overtaking in Continuous Simulator Traffic,”
          <em>International Conference on Applied Human Factors and Ergonomics (AHFE)</em>,
          accepted.
        </p>
      </div>
    </article>

    <article class="research-project" id="project-teen-driver-safety-education" data-research-topics="{{ site.data.research_projects['project-teen-driver-safety-education'].topics | join: ' ' }}">
      <figure>
        <img src="/assets/images/banners/High%20school.png" alt="Teen Driver Safety Education project graphic">
        <figcaption>
          <a href="/news/kytc-teen-driver-safety-contract.html" target="_blank" rel="noopener">Sponsor: NHTSA with KYTC</a>
          <span>PI: Yunmei Liu</span>
        </figcaption>
      </figure>
      <div>
        <h3>Teen Driver Safety Education</h3>
        {% include research-project-tags.html project="project-teen-driver-safety-education" %}
        <p>
          This project develops a simulator-ready curriculum package to support teen driver safety education in Kentucky high schools. The work will align teacher lesson plans, student materials, classroom debriefs, and an interactive driving scenario with KYTC and KOHS safety messaging on distracted driving and aggressive driving.
        </p>
        <p>
          The project will integrate a classroom rotation model, driving-log feedback on behaviors such as speed choice, following distance, braking, and hazard response, and an optional wearable-sensor component that provides a student-friendly driver-state snapshot. A classroom pilot will assess the module's feasibility and learning value before the final toolkit is delivered for use by educators and transportation safety partners.
        </p>
      </div>
    </article>
    <article class="research-project" id="project-ai-vr-manufacturing-foundry" data-research-topics="{{ site.data.research_projects['project-ai-vr-manufacturing-foundry'].topics | join: ' ' }}">
      <figure>
        <img src="/assets/images/banners/VR_manufacturing_extended.png" alt="AI-enabled virtual reality manufacturing foundry project graphic">
        <figcaption>
          <a href="https://www.nsf.gov/awardsearch/show-award/?AWD_ID=2627659&HistoricalAwards=false" target="_blank" rel="noopener">Sponsor: NSF FINDERS FOUNDRY</a>
          <span>PI: Yunmei Liu</span>
        </figcaption>
      </figure>
      <div>
        <h3>AI-Enabled Virtual Reality Manufacturing Foundry</h3>
        {% include research-project-tags.html project="project-ai-vr-manufacturing-foundry" %}
        <p>
          This NSF FINDERS FOUNDRY Planning project develops an AI-enabled virtual reality platform to help high school students explore modern manufacturing careers. The platform will provide safe, accessible, and authentic opportunities for students to learn manufacturing workflows, practice decision-making, and interact with a supportive AI mentor.
        </p>
        <p>
          By making advanced manufacturing careers more visible and engaging, the project aims to strengthen students’ interest in manufacturing pathways and help them understand AI as a transparent learning support for feedback, reflection, and problem solving.
        </p>
      </div>
    </article>
  <article class="research-project" id="project-prosthetic-control" data-research-topics="{{ site.data.research_projects['project-prosthetic-control'].topics | join: ' ' }}">
      <figure>
        <img src="/assets/images/banners/NSF.png" alt="EMG-based upper-limb prosthetic control evaluation setup">
        <figcaption>
          Sponsor: NA
          <!-- <span>Collaborators: Yunmei Liu, Juhye Park, Jason Berman, David Kaber, H. Huang, J. Ruiz, Mahsa Zahabi, and team</span> -->
        </figcaption>
      </figure>
      <div>
        <h3>Human-Centered Design for Natural Upper-Limb Prosthetic Control</h3>
        {% include research-project-tags.html project="project-prosthetic-control" %}
        <p>          This project focuses on advancing upper-limb prosthetic control from conventional control modes toward more natural and intuitive control. Our prior work compared alternative prosthetic control strategies, generated workload and usability evidence for early-stage design, and examined VR as a scalable platform for testing prosthetic manipulation tasks before full physical-device deployment. Together, these studies provide human-centered design guidance for selecting and refining prosthetic control interfaces that better align with users’ movement intentions, improve performance, reduce workload, and support rehabilitation training.
        </p>
        <div class="project-publications">
          <h4>Prior Related Work: Upper-Limb Prosthetic Control</h4>
          <ol class="project-publication-list">
            <li>
              <a href="https://doi.org/10.1109/TNSRE.2026.3652083" target="_blank" rel="noopener"><b>Liu, Y.</b>, Park, J., Delgado, D., Music, A., Berman, J., Ruiz, J., Kaber, D. B., Huang, H., and Zahabi, M. (2026). Virtual reality as a platform for upper-limb prosthetic control training and early-stage design. <i>IEEE Transactions on Neural Systems and Rehabilitation Engineering</i>.</a>
            </li>
            <li>
              <a href="https://doi.org/10.1109/THMS.2024.3381094" target="_blank" rel="noopener"><b>Liu, Y.</b>, Berman, J., Dodson, A., Park, J., Zahabi, M., Huang, H., Ruiz, J., and Kaber, D. (2024). Human-centered evaluation of EMG-based upper-limb prosthetic control modes. <i>IEEE Transactions on Human-Machine Systems</i>.</a>
            </li>
            <li>
              <a href="https://doi.org/10.1080/00140139.2023.2221413" target="_blank" rel="noopener">Park, J., Berman, J., Dodson, A., <b>Liu, Y.</b>, Armstrong, M., Huang, H., Kaber, D. B., Ruiz, J., and Zahabi, M. (2023). Assessing workload in using electromyography (EMG)-based prostheses. <i>Ergonomics</i>.</a>
            </li>
            <li>
              <a href="https://ieeexplore.ieee.org/document/10394286" target="_blank" rel="noopener">Park, J., Music, A., Daniel, D., Berman, J., Dodson, A., <b>Liu, Y.</b>, Ruiz, J., Huang, H., Kaber, D., and Zahabi, M. (2023). Cognitive workload and usability of virtual reality simulation for prosthesis training. <i>IEEE International Conference on Systems, Man, and Cybernetics</i>, pp. 1567-1572.</a>
            </li>
            <li>
              <a href="https://ieeexplore.ieee.org/document/9980676" target="_blank" rel="noopener">Park, J., Berman, J., Dodson, A., <b>Liu, Y.</b>, Armstrong, M., Huang, H., Kaber, D., Ruiz, J., and Zahabi, M. (2022). Cognitive workload classification of upper-limb prosthetic devices. <i>IEEE International Conference on Human-Machine Systems</i>, pp. 1-6.</a>
            </li>
          </ol>
        </div>

      </div>
    </article>
      <article class="research-project" id="project-eeg-seizure-modeling" data-research-topics="{{ site.data.research_projects['project-eeg-seizure-modeling'].topics | join: ' ' }}">
      <figure>
        <img src="/assets/images/banners/Updated Images/Seizure.png" alt="Seizure-EEG project graphic">
        <figcaption>
          Sponsor: NA
          <!-- <span>PIs: Yunmei Liu and Tianlong Chen</span> -->
        </figcaption>
      </figure>
      <div>
        <h3>AI-Driven Scalp EEG Modeling for Seizure Detection and Signal Enhancement</h3>
        {% include research-project-tags.html project="project-eeg-seizure-modeling" %}
        <p>
          We develop AI methods that transform multichannel scalp EEG into spatial, visual, and geometry-aware representations for neurological condition detection. This work supports robust seizure detection, EEG spatial super-resolution, and reliable biomedical signal modeling for real-time and clinically meaningful assessment.

        </p>
        <!-- <a class="project-button" href="https://mindxai-lab.github.io/nsf-edse-automation-intervention/" target="_blank" rel="noopener">Website</a> -->
        <div class="project-publications">
          <h4>Publications From This Project</h4>
          <ol class="project-publication-list">
            <li>
              <a href="https://arxiv.org/pdf/2602.04769" target="_blank" rel="noopener">Chen, Y., Peng, J., Chowdhury, M. H., Chen, T., and <b>Liu, Y.</b> (2026). NeuroCanvas: VLLM-powered robust seizure detection by reformulating multichannel EEG as image. <i>arXiv preprint arXiv:2602.04769</i>.</a>
            </li>
            <li>
              <a href="https://arxiv.org/pdf/2602.02238" target="_blank" rel="noopener">Yao, L., Zhang, G., Chowdhury, M., <b>Liu, Y.</b>, and Chen, T. (2026). Geometry- and relation-aware diffusion for EEG super-resolution. <i>arXiv preprint arXiv:2602.02238</i>.</a>
            </li>
          </ol>
        </div>
        <div class="project-publications">
          <h4>Prior Related Work: Biomedical Signal Modeling</h4>
          <ol class="project-publication-list">
            <li>
              <a href="https://proceedings.iclr.cc/paper_files/paper/2024/hash/7f2257d2b291b8d7e712c70b67e09412-Abstract-Conference.html" target="_blank" rel="noopener">Chen, Z., Song, Y., <b>Liu, Y.</b>, and Sebe, N. (2024). A Lie group approach to Riemannian batch normalization. <i>International Conference on Learning Representations (ICLR)</i>.</a>
            </li>
          </ol>
        </div>
      </div>
    </article>

    <article class="research-project" id="project-communication-barriers-healthcare" data-research-topics="{{ site.data.research_projects['project-communication-barriers-healthcare'].topics | join: ' ' }}">
      <figure>
        <img src="/assets/images/banners/Updated Images/CB.png" alt="Communication Barriers project graphic">
        <figcaption>
          Sponsor: NA
          <!-- <span>PI: Yunmei Liu</span> -->
        </figcaption>
      </figure>
      <div>
        <h3>Communication Barriers in Patient-Provider Interactions</h3>
        {% include research-project-tags.html project="project-communication-barriers-healthcare" %}
        <p>
          This project examines how communication barriers disrupt patient-provider communication and affect patient experience, clinical decision-making, health outcomes, and healthcare system efficiency. Building on a scoping review of patient-provider communication studies, the work maps how barriers intersect and identifies intervention opportunities including interpreter services, cultural and empathy training, plain-language and visual supports, AI-enabled translation and chatbot tools, clinical note-taking agents, and wearable or remote-monitoring technologies. The goal is to inform adaptive, patient-centered communication systems that combine AI support with real-time human-state and context awareness.
        </p>

        <div class="project-publications">
          <h4>Publications From This Project</h4>
          <ol class="project-publication-list">
            <li>
              <a href="https://www.jmir.org/2026/1/e79744/" target="_blank" rel="noopener">Chowdhury, M. H.&#42;, and <b>Liu, Y.</b>&dagger; (2026). Systematic review of communication barriers in healthcare: implications for technological interventions. <i>Journal of Medical Internet Research (JMIR)</i>. </a>
            </li>
          </ol>
        </div>
      </div>
    </article>
  </section>

  {{ research_related_news }}

</div>

<script src="{{ '/assets/js/research-filters.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/research-updates-timeline.js' | relative_url }}" defer></script>
