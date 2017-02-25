---
layout: default
use_hero: true
---

<h1 class="center">News</h1>
{% for post in site.posts %}
<div class="section">
    <a href="{{ post.url }}"><h4>{{ post.title }}</h4></a>
    <p>{{ post.excerpt }}</p>
</div>
<div class="divider"></div>
{% endfor %}
