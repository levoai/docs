---
sidebar_position: 2
---

# Levo CLI for Mac OS
**Prerequisites**

*   Use of Levo CLI requires Docker (min version: 18.03.0)
*   OSX version that supports Docker
*   Ensure that you are able to launch and use Docker containers, and network connectivity works

**Instructions to Setup Levo CLI**

*   Open a terminal (zsh) window and type the following commands to setup an alias:

```bash
 alias levo="docker run --rm -v $HOME/.config/configstore:/home/levo/.config/configstore:rw -v $PWD:/home/levo/work:rw -e TERM=xterm-256color -ti levoai/levo:stable"
```
The CLI container mounts your current working directory as R/W. This directory is used to read schema files, and export test plans etc.

> Please note that the alias is only available in the current terminal session. If you want to persist this across sessions, you need to persist this in the shell's profile (.bashrc, .zshrc, etc.). Please refer to the shell documentation.


*   Now signup and create an account on [Levo.ai](https://Levo.ai) via the CLI:

```bash
levo login
```

**Upgrade Instructions**

Levo CLI is shipped as a Docker image. There are versioned Levo CLI images, and also tagged images with tags `latest` & `stable`. While you can pick the specific version of the image you want, it is recommend that you use the `stable` image.

*   To get the latest stable image type the following in a terminal:

```bash
docker pull levoai/levo:stable
```

*   To select a specific version of the image and update the alias (where x.x.x is the version):

```bash
docker pull levoai/levo:<x.x.x>

alias levo="docker run --rm -v $HOME/.config/configstore:/home/levo/.config/configstore:rw -v $PWD:/home/levo/work:rw -e TERM=xterm-256color -ti levoai/levo:<x.x.x>"
```

If you update the alias, please remember to persist it in the shell's profile.
