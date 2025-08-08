---
created-on: 2025-07-29T22:37
modified-on: 2025-07-29T22:55
tags:
  - Article
  - Website/Project
title: D34dBlog
description: Site web et blog personnel.
permalink: /{{locale.code}}/projects/d34dblog/
repository: https://github.com/BoiteuxL/d34dblog
---

# D34dBlog
Site web et blog personnel. [Voir sur Github]((https://github.com/BoiteuxL/d34dblog))

---

## Résumé
D34dBlog est le site web sur lequel vous êtes. Il s’agit de mon site personnel, la trace de mon passage sur Internet. 

## Fonctionnalités et contenu
### Articles
Sur ce site, différents articles et liens sont disponibles. Je fais ceci dans le but de documenter mon expérience dans le milieu du développement informatique et d’exprimer mon opinion sur différents sujets. Les articles sont séparés selon deux catégories: **Projet** et **Blogue**.
#### Projets
Mes projets publiques sont documentés et disponibles sur ce site. Pour chaque projet, je vais inscrire:
- **Le dépot Git:** Le code source sera disponible et Open-Source.
- **Un bref résumé:** Un sommaire du projet.
- **Les différentes fonctionnalités/contenu:** À quoi le projet sert et qu'est-ce qu'il peut faire.
- **Les technologies utilisées:** Les langages de programmation, les frameworks, les librairies, etc.
- **Notes additionnelles:** Tout autre détail ne rentrant pas dans aucune des autres catégories.

#### Blog
Le blog est l’endroit où je poste des articles sur ce qui m’intéresse actuellement. Le jour où je publie cet article, je n’ai rien de publié sur le blog, mais qui sait ce que le future nous réserve…

### Liens
Je garde aussi certains liens vers mes profils professionnels, tel que [LinkedIn](https://www.linkedin.com/in/boiteuxl/) ou [Github](https://github.com/BoiteuxL). Je rajouterai aussi d’autres liens dans un futur article.
## Technologies
Le site est conçu avec le générateur de site web statique [11ty](https://www.11ty.dev/). 11ty utilise des modèles Nunchuck et des pages de contenu Markdown/HTML afin d’assembler un site web statique en HTML pur. Celui-ci peut être ensuite déployé et hébergé pour être accessible sur Internet. Dans mon cas, j’ai utilisé [Netlify](https://www.netlify.com/), car ce service a une intégration simple avec Github.

~~J’utilise [TailwindCSS](https://tailwindcss.com/) avec [DaisyUI](https://daisyui.com/) pour le style ainsi qu’un peu de Javascript pour différents détails (thème clair/sombre, etc).~~

J’ai récemment fait une mise à jour pour éviter d’utilisé des librairies externes. Le site est maintenant stylisé avec du SCSS transpilé en CSS pur et minimisé.