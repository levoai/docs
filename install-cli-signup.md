Table of Contents
=================

   * [Levo CLI for Mac OS](#levo-cli-for-mac-os)
   * [Levo CLI for Linux](#levo-cli-for-linux)
   * [Levo CLI for Windows](#levo-cli-for-windows)

## Levo CLI for Mac OS
**Prerequisites**

*   Use of Levo CLI requires Docker (min version: 18.03.0)
*   OSX version that supports Docker
*   Ensure that you are able to launch and use Docker containers, and network connectivity works

**Instructions to Setup Levo CLI**

*   Open a terminal (zsh) window and type the following commands to setup an alias:

```bash
 alias levo="docker run --rm -v $HOME/.config/configstore:/home/levo/.config/configstore:rw -v $HOME:/home/levo/schemas:ro -e HOST_SCHEMA_DIR=$HOME -e TERM=xterm-256color -ti levoai/levo:stable"
```

Please note that the alias is only available in the current terminal session. If you want to persist this across sessions, you need to persist this in the shell's profile (.bashrc, .zshrc, etc.). Please refer to the shell documentation.


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

alias levo="docker run --rm -v $HOME/.config/configstore:/home/levo/.config/configstore:rw -v $HOME/:/home/levo/schemas:ro -e HOST_SCHEMA_DIR=$HOME -e TERM=xterm-256color -ti levoai/levo:<x.x.x>"
```

If you update the alias, please remember to persist it in the shell's profile


## Levo CLI for Linux

**Prerequisites**

*   Use of Levo CLI requires Docker (min version: 18.03.0)
*   Linux version that supports Docker
*   Ensure that you are able to launch and use Docker containers, and network connectivity works

**Instructions to Setup Levo CLI**

*   Open a terminal (bash) window and type the following commands to setup an alias:

```bash
mkdir -p $HOME/.config/configstore

export DOCKERHOST=$(ifconfig | awk '/docker0/{getline; print}' | awk '{ print $2 }')
 
alias levo="sudo docker run --rm --add-host=host.docker.internal:$DOCKERHOST --mount type=bind,source=$HOME/.config/configstore,target=/home/levo/.config/configstore -v $HOME:/home/levo/schemas:ro -e HOST_SCHEMA_DIR=$HOME -e LOCAL_USER_ID=$(id -u) -e LOCAL_GROUP_ID=$(id -g) -e TERM=xterm-256color -ti levoai/levo:stable" 
```

Use of sudo with Docker may be optional for your installation.

Please note that the alias is only available in the current terminal session. If you want to persist this across sessions, you need to persist this in the shell's profile (.bashrc, etc.). Please refer to the shell documentation.


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

alias levo="sudo docker run --rm --add-host=host.docker.internal:$DOCKERHOST -v $HOME/.config/configstore:/home/levo/.config/configstore:rw -v $HOME/:/home/levo/schemas:ro -e HOST_SCHEMA_DIR=$HOME -e TERM=xterm-256color -ti levoai/levo:<x.x.x>" 
```

If you update the alias, please remember to persist it in the shell's profile.



## Levo CLI for Windows

**Prerequisites**

*   Windows 10 OS that supports Docker
*   Use of Levo CLI requires Docker for Windows (min version: 3.0.0)
*   Ensure that you are able to launch and use Docker containers, and network connectivity works
 

**Instructions to Setup Levo CLI**

*   Open a powershell window and type the following commands to setup an alias:

```bash
Function Launch_Levo {docker run --rm -v ${HOME}/.config/configstore:/home/levo/.config/configstore:rw -v ${HOME}:/home/levo/schemas:ro -e HOST_SCHEMA_DIR=$HOME -e TERM=xterm-256color -ti levoai/levo:stable $args} 

Set-Alias -Name levo -Value Launch_Levo
```

Please note that the alias is only available in the current powershell session. If you want to persist this across sessions, you need to persist this in the powershell profile. Please refer to the powershell documentation.


*   Now signup and create an account on [Levo.ai](http://Levo.ai) via the CLI:

```bash
levo login
```

**Upgrade Instructions**

Levo CLI is shipped as a Docker image. There are versioned Levo CLI images, and also tagged images with tags `latest` & `stable`. While you can pick the specific version of the image you want, it is recommend that you use the `stable` image.

*   To get the latest stable image type the following in a terminal:

```plain
docker pull levoai/levo:stable
```

*   To select a specific version of the image and update the alias (where x.x.x is the version):

```plain
docker pull levoai/levo:<x.x.x>

Function Launch_Levo {docker run --rm -v ${HOME}/.config/configstore:/home/levo/.config/configstore:rw -v ${HOME}/:/home/levo/schemas:ro -e HOST_SCHEMA_DIR=$HOME -e TERM=xterm-256color -ti levoai/levo:<x.x.x> $args}
```
If you update the alias, please remember to persist it in the shell's profile.

