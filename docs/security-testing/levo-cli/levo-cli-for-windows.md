---
sidebar_position: 3
---

# Levo CLI for Windows

### Prerequisites

*   Windows 10 OS that supports Docker
*   Use of Levo CLI requires Docker for Windows (min version: 3.0.0)
*   Ensure that you are able to launch and use Docker containers, and network connectivity works
 
### Instructions to Setup Levo CLI

*   Open a powershell window and type the following commands to setup an alias:

```powershell
Function Launch_Levo {docker run --rm -v ${HOME}/.config/configstore:/home/levo/.config/configstore:rw -v ${pwd}:/home/levo/work:rw -e TERM=xterm-256color -ti levoai/levo:stable $args} 

Set-Alias -Name levo -Value Launch_Levo
```

:::info

Depending on the region your apps are in, you may need to set a different Levo base URL for the satellite.

For example, if the CLI will be used with `app.india-1.levo.ai`, use the following alias:

```powershell
Function Launch_Levo {docker run --rm -v ${HOME}/.config/configstore:/home/levo/.config/configstore:rw -v ${pwd}:/home/levo/work:rw -e TERM=xterm-256color -e LEVO_BASE_URL=https://api.india-1.levo.ai -ti levoai/levo:stable $args} 

Set-Alias -Name levo -Value Launch_Levo
```

:::

*   Now signup and create an account on [Levo.ai](http://Levo.ai) via the CLI:

```bash
levo login
```

### Notes

> The CLI container mounts your current working directory as R/W. This directory is used to read schema files, and export test plans etc.

> Please note that the alias is only available in the current powershell session. If you want to persist this across sessions, you need to persist this in the powershell profile. Please refer to the powershell documentation.


### [Upgrade Instructions][cli-upgrade]

[cli-upgrade]: levo-cli-upgrade-instructions.mdindows
