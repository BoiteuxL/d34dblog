---
title: 'Blogue'
description: "L'endroit où je parle de tout ce qui me passe par la tête."
permalink: /fr/blog/index.html
---

<h2 class="text-4xl font-bold mb-4">Blogue</h2>
<p class="text-lg">L'endroit où je parle de tout ce qui me passe par la tête.</p>
<section>
    {%- for post in collections["post-fr"] -%}
    <article>
        <time class="text-sm italic">{{ post.data.time }}</time>
        <h3 class="text-2xl font-bold"><a>{{ post.data.title }}</a></h3>
    </article>
    {%- endfor -%}
</section>