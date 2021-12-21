---
sidebar_position: 2
---

# Levo CLI for Mac OS

### Prerequisites

*   Use of Levo CLI requires Docker (min version: 18.03.0)
*   OSX version that supports Docker
*   Ensure that you are able to launch and use Docker containers, and network connectivity works

### Instructions to Setup Levo CLI

* Open a terminal (zsh) window and type the following commands to setup an alias:

```bash
 alias levo="docker run --rm -v $HOME/.config/configstore:/home/levo/.config/configstore:rw -v $PWD:/home/levo/work:rw -e TERM=xterm-256color -ti levoai/levo:stable"
```

* Now signup and create an account on [Levo.ai](https://Levo.ai) via the CLI:

```bash
levo login
```

### Notes

> The CLI container mounts your current working directory as R/W. This directory is used to read schema files, and export test plans etc.

> Please note that the alias is only available in the current terminal session. If you want to persist this across sessions, you need to persist this in the shell's profile (.bashrc, .zshrc, etc.). Please refer to the shell documentation.

### [Upgrade Instructions][cli-upgrade]

[cli-upgrade]: ./levo-cli-upgrade-instructions.md#mac-os


