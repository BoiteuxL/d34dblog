---
title: "Dotfiles"
description: "Fichiers de configuration pour GNU/Linux (Gnome)."
permalink: /{{language}}/projects/dotfiles/
repository: "https://github.com/BoiteuxL/dotfiles"
language: fr
tags:
  - project
---
{% import "macros/media.njk" as media %}

# {{title}}
{{description}} [Github]({{repository}})

---

## Résumé
Mes fichiers de configuration personnels pour GNU/Linux, spécifiquement adaptés à l'environnement de bureau Gnome. Ces fichiers incluent des paramètres et des personnalisations qui améliorent mon flux de travail quotidien et mon expérience utilisateur tout en offrant une belle interface graphique.

## Fonctionnalités
### Distribution et environnement de bureau
Lorsque j'ai dû choisir une distribution Linux, j'ai toujours eu du mal à trouver celle qui correspondait à mes besoins. J'en ai essayé beaucoup, comme Debian, Ubuntu, Fedora, Linux Mint et même Arch Linux. Je me suis finalement tourné vers EndeavourOS, qui est basé sur Arch Linux et offre une expérience conviviale tout en conservant la flexibilité et la puissance d'Arch. J'utilise EndeavourOS depuis un certain temps maintenant, et je suis très satisfait de ses performances et de sa stabilité. C'est devenu ma distribution de prédilection pour mon ordinateur portable et mes ordinateurs de bureau.

J'utilise Gnome comme environnement de bureau. Bien que j'aie essayé d'autres environnements comme KDE, Cinnamon et même des gestionnaires de fenêtres comme i3 et Hyprland, je trouve Gnome le plus adapté à mes besoins. Il est fluide, élégant, esthétiquement agréable par défaut et les multiples espaces de travail sont indispensables pour moi.

### Thème et icônes
J'utilise le thème Catppuccin Mocha avec l'accent mauve, ce qui me permet d'avoir une palette de couleurs pastel apaisante et agréable à regarder. Le thème est complété par l'ensemble d'icônes Tela avec l'accent Dracula, qui offre un look simple et moderne.

De plus, je suis un grand fan de Star Wars, alors, pour mon ordinateur portable (nommé *Acclamator*), j'ai ajouté un petit fond d'écran mettant en vedette le *vaisseau d'assaut de classe Acclamator*.
{{ media.image(
    "/assets/images/projects/dotfiles/laptop.png",
    "Capture d'écran de mon ordinateur portable",
    "Capture d'écran de mon ordinateur portable"
) }}

Et pour mon ordinateur de bureau (nommé *Venator*), j'ai un fond d'écran mettant en vedette le *Destroyer stellaire de classe Venator*.
{{ media.image(
    "/assets/images/projects/dotfiles/desktop.png",
    "Capture d'écran de mon ordinateur de bureau",
    "Capture d'écran de mon ordinateur de bureau"
) }}

J'ai aussi quelques fichiers de configuration pour divers applications et outils, tel que ZShell, Git, Starship Prompt ou Fastfetch.

### Extensions
Gnome permet aux utilisateurs de personnaliser et d'améliorer l'environnement de bureau en installant des extensions. Ils offrent une flexibilité pour adapter l'interface aux préférences individuelles, telles que l'ajout d'applets, la modification de la gestion des fenêtres ou l'intégration d'outils de productivité. 

J'ai sélectionné une série d'extensions qui améliorent mon flux de travail et mon expérience utilisateur. Certaines extensions que j'utilise incluent :

- [Dash To Dock](https://extensions.gnome.org/extension/307/dash-to-dock/)
- [User Themes](https://extensions.gnome.org/extension/19/user-themes/)
- [Just Perfection](https://extensions.gnome.org/extension/3843/just-perfection/)
- [Forge](https://extensions.gnome.org/extension/4481/forge/)
- [RunCat](https://extensions.gnome.org/extension/2986/runcat/)
- [Arch Linux Updates Indicator](https://extensions.gnome.org/extension/1010/archlinux-updates-indicator/)

## Technologies
Ce projet est juste un ensemble de scripts Bash qui installe des programmes, télécharge des thèmes, importe des paramètres avec *gsettings* et installe des extensions.

## Notes
Ces dotfiles sont conçus pour être compatible qu'avec une installation fraîche d'EndeavourOS avec Gnome. Ils doivent être modifié pour fonctionner sur d'autres systèmes.