---
sidebar_position: 3
---

# Levo CLI for Linux

### Prerequisites

*   Use of Levo CLI requires Docker (min version: 18.03.0)
*   Linux version that supports Docker
*   Ensure that you are able to launch and use Docker containers, and network connectivity works
*   Bash or Bash compatible shell
*   `ip` command installed (if missing see notes below)

### Instructions to Setup Levo CLI

*   Open a terminal (bash) window and type the following commands to setup an alias:

```bash
mkdir -p $HOME/.config/configstore
 
alias levo='docker run --rm \
    --add-host=host.docker.internal:`ip route|awk '\''/docker0/ { print $9 }'\''` \
    --mount type=bind,source=$HOME/.config/configstore,target=/home/levo/.config/configstore \
    -v $HOME/.aws:/home/levo/.aws \
    -v $PWD:/home/levo/work:rw \
    -e LOCAL_USER_ID=$(id -u) \
    -e LOCAL_GROUP_ID=$(id -g) \
    -e TERM=xterm-256color \
    -ti levoai/levo:stable'
```

:::info

Depending on the region your apps are in, you may need to set a different Levo base URL for the satellite.

For example, if the CLI will be used with `app.india-1.levo.ai`, use the following alias:

```bash
alias levo='docker run --rm \
    --add-host=host.docker.internal:`ip route|awk '\''/docker0/ { print $9 }'\''` \
    --mount type=bind,source=$HOME/.config/configstore,target=/home/levo/.config/configstore \
    -v $HOME/.aws:/home/levo/.aws \
    -v $PWD:/home/levo/work:rw \
    -e LOCAL_USER_ID=$(id -u) \
    -e LOCAL_GROUP_ID=$(id -g) \
    -e LEVO_BASE_URL=https://api.india-1.levo.ai \
    -e TERM=xterm-256color \
    -ti levoai/levo:stable'
```

:::

*   Now signup and create an account on [Levo.ai](https://Levo.ai) via the CLI:

```bash
levo login
```

### Notes

> Use of sudo with Docker may be required for your installation. Please refer to: [Run *docker* as non-root user](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)

> The CLI container mounts your current working directory as R/W. This directory is used to read schema files, and export test plans etc.

> Please note that the alias is only available in the current terminal session. If you want to persist this across sessions, you need to persist this in the shell's profile (.bashrc, etc.). Please refer to the shell documentation.

> **ip** command can be installed as shown below:  
    - Debian: `sudo apt install iproute2`  
    - Fedora/CentOS: `sudo yum -y install iproute`  
    - Arch: `sudo pacman -S iproute2`

### [Upgrade Instructions][cli-upgrade]

[cli-upgrade]: ./levo-cli-upgrade-instructions.md#linux
