# Levo.ai Docs

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The deployment for our docs is handled by a GitHub Action. The website is built and pushed to the `gh-pages` branch whenever the `main` branch is updated.

The following command can be used to manually deploy the website, but it should not be needed normally.

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Making Changes
The docs are split into `docs` and `vulnerabilities`. `docs` is the main documentation which is not yet versioned. `vulnerabilities` is the vulnerability guide, and is versioned, as both the CLI and test plan generator repo's link back to this guide.

When editing the `vulnerabilities` care must be taken to keep the versioned section and current unpublished sections in sync (based on the context).
