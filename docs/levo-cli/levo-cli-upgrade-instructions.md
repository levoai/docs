---
sidebar_position: 7
---

# Upgrading Levo CLI

Levo CLI is shipped as a Docker image. There are versioned Levo CLI images, and also tagged images with tags `latest` & `stable`. While you can pick the specific version of the image you want, it is recommend that you use the `stable` image.

Follow instructions below for your platform. 

> Note: if you update the `levo` alias, please remember to persist it in the shell's profile.

### Mac OS

*   To get the latest stable image type the following in a terminal:

```bash
docker pull levoai/levo:stable
```

*   To select a specific version of the image and update the alias (where x.x.x is the version):

```bash
docker pull levoai/levo:<x.x.x>

alias levo="docker run --rm -v $HOME/.config/configstore:/home/levo/.config/configstore:rw -v $PWD:/home/levo/work:rw -e TERM=xterm-256color -ti levoai/levo:<x.x.x>"
```

### Linux

*   To get the latest stable image type the following in a terminal:

```bash
docker pull levoai/levo:stable
```

*   To select a specific version of the image and update the alias (where x.x.x is the version):

```bash
docker pull levoai/levo:<x.x.x>

alias levo="sudo docker run --rm --add-host=host.docker.internal:`ip route|awk '/docker0/ { print $9 }'` -v $HOME/.config/configstore:/home/levo/.config/configstore:rw -v $PWD:/home/levo/work:rw -e TERM=xterm-256color -ti levoai/levo:<x.x.x>" 
```

### Windows

*   To get the latest stable image type the following in a terminal:

```plain
docker pull levoai/levo:stable
```

*   To select a specific version of the image and update the alias (where x.x.x is the version):

```plain
docker pull levoai/levo:<x.x.x>

Function Launch_Levo {docker run --rm -v ${HOME}/.config/configstore:/home/levo/.config/configstore:rw -v ${pwd}:/home/levo/work:rw -e TERM=xterm-256color -ti levoai/levo:<x.x.x> $args}
```