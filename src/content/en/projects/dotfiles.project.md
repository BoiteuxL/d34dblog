---
title: "Dotfiles"
description: "Configuration files for GNU/Linux (Gnome)."
permalink: /{{language}}/projects/dotfiles/
repository: "https://github.com/BoiteuxL/dotfiles"
language: en
tags:
    - project
---
{% import "macros/media.njk" as media %}

# {{title}}
{{description}} [Github]({{repository}})

---

## Summary
My personal configuration files for GNU/Linux, specifically tailored to the Gnome desktop environment. These files include settings and customizations that enhance my daily workflow and user experience while providing a beautiful graphical interface.

## Features
### Distribution and Desktop Environment
When I had to choose a Linux distribution, I always struggled to find one that suited my needs. I tried many, such as Debian, Ubuntu, Fedora, Linux Mint, and even Arch Linux. I eventually turned to EndeavourOS, which is based on Arch Linux and offers a user-friendly experience while retaining the flexibility and power of Arch. I have been using EndeavourOS for some time now, and I am very satisfied with its performance and stability. It has become my go-to distribution for my laptop and desktop computers.

I use Gnome as my desktop environment. Although I have tried others like KDE, Cinnamon, and even window managers like i3 and Hyprland, I find Gnome best suited to my needs. It is smooth, elegant, aesthetically pleasing by default, and the multiple workspaces are essential for me.

### Theme and Icons
I use the Catppuccin Mocha theme with the mauve accent, which gives me a soothing and pleasant pastel color palette. The theme is complemented by the Tela icon set with the Dracula accent, offering a simple and modern look.

Additionally, I am a big Star Wars fan, so for my laptop (named *Acclamator*), I added a wallpaper featuring the *Acclamator-class assault ship*.
{{ media.image(
        "/assets/images/projects/dotfiles/laptop.png",
        "Screenshot of my laptop",
        "Screenshot of my laptop"
) }}

And for my desktop (named *Venator*), I have a wallpaper featuring the *Venator-class Star Destroyer*.
{{ media.image(
        "/assets/images/projects/dotfiles/desktop.png",
        "Screenshot of my desktop",
        "Screenshot of my desktop"
) }}

I also have some configuration files for various applications and tools, such as ZShell, Git, Starship Prompt, and Fastfetch.

### Extensions
Gnome allows users to customize and enhance the desktop environment by installing extensions. They offer flexibility to adapt the interface to individual preferences, such as adding applets, modifying window management, or integrating productivity tools.

I have selected a series of extensions that improve my workflow and user experience. Some extensions I use include:

- [Dash To Dock](https://extensions.gnome.org/extension/307/dash-to-dock/)
- [User Themes](https://extensions.gnome.org/extension/19/user-themes/)
- [Just Perfection](https://extensions.gnome.org/extension/3843/just-perfection/)
- [Forge](https://extensions.gnome.org/extension/4481/forge/)
- [RunCat](https://extensions.gnome.org/extension/2986/runcat/)
- [Arch Linux Updates Indicator](https://extensions.gnome.org/extension/1010/archlinux-updates-indicator/)

## Technologies
This project is simply a set of Bash scripts that install programs, download themes, import settings with *gsettings*, and install extensions.

## Notes
These dotfiles are designed to be compatible only with a **fresh installation** of EndeavourOS with Gnome. They must be modified to work on other systems.
