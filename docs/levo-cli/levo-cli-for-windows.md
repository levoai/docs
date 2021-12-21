---
sidebar_position: 4
---

# Levo CLI for Windows

**Prerequisites**

*   Windows 10 OS that supports Docker
*   Use of Levo CLI requires Docker for Windows (min version: 3.0.0)
*   Ensure that you are able to launch and use Docker containers, and network connectivity works
 

**Instructions to Setup Levo CLI**

*   Open a powershell window and type the following commands to setup an alias:

```bash
Function Launch_Levo {docker run --rm -v ${HOME}/.config/configstore:/home/levo/.config/configstore:rw -v ${pwd}:/home/levo/work:rw -e TERM=xterm-256color -ti levoai/levo:stable $args} 

Set-Alias -Name levo -Value Launch_Levo
```
The CLI container mounts your current working directory as R/W. This directory is used to read schema files, and export test plans etc.

> Please note that the alias is only available in the current powershell session. If you want to persist this across sessions, you need to persist this in the powershell profile. Please refer to the powershell documentation.


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

Function Launch_Levo {docker run --rm -v ${HOME}/.config/configstore:/home/levo/.config/configstore:rw -v ${pwd}:/home/levo/work:rw -e TERM=xterm-256color -ti levoai/levo:<x.x.x> $args}
```
If you update the alias, please remember to persist it in the shell's profile.
