---
title: 'Blog'
description: 'The place where I ramble about anything that comes to my mind.'
permalink: /en/blog/index.html
---

<h2 class="text-4xl font-bold mb-4">Blog</h2>
<p class="text-lg">The place where I ramble about anything that comes to my mind.</p>
<section>
    {%- for post in collections["post-en"] -%}
    <article>
        <time class="text-sm italic">{{ post.data.time }}</time>
        <h3 class="text-2xl font-bold"><a>{{ post.data.title }}</a></h3>
    </article>
    {%- endfor -%}
</section>