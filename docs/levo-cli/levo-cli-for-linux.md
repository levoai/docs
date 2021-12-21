---
sidebar_position: 3
---

# Levo CLI for Linux

### Prerequisites

*   Use of Levo CLI requires Docker (min version: 18.03.0)
*   Linux version that supports Docker
*   Ensure that you are able to launch and use Docker containers, and network connectivity works

### Instructions to Setup Levo CLI

*   Open a terminal (bash) window and type the following commands to setup an alias:

```bash
mkdir -p $HOME/.config/configstore

export DOCKERHOST=$(ifconfig | awk '/docker0/{getline; print}' | awk '{ print $2 }')
 
alias levo="sudo docker run --rm --add-host=host.docker.internal:$DOCKERHOST --mount type=bind,source=$HOME/.config/configstore,target=/home/levo/.config/configstore -v $PWD:/home/levo/work:rw -e LOCAL_USER_ID=$(id -u) -e LOCAL_GROUP_ID=$(id -g) -e TERM=xterm-256color -ti levoai/levo:stable" 
```

*   Now signup and create an account on [Levo.ai](https://Levo.ai) via the CLI:

```bash
levo login
```

### Notes

> Use of sudo with Docker may be optional for your installation.

> The CLI container mounts your current working directory as R/W. This directory is used to read schema files, and export test plans etc.

> Please note that the alias is only available in the current terminal session. If you want to persist this across sessions, you need to persist this in the shell's profile (.bashrc, etc.). Please refer to the shell documentation.

### [Upgrade Instructions][cli-upgrade]

[cli-upgrade]: ./levo-cli-upgrade-instructions.md#linux
