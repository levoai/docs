// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Levo.ai Documentation',
  tagline: 'Fully Automated API Security Testing in CI/CD',
  staticDirectories: ['static'],
  url: 'https://docs.levo.ai',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'levoai', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/levoai/docs/edit/main/',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'vulnerabilities',
        path: 'vulnerabilities',
        routeBasePath: 'vulnerabilities',
        sidebarPath: require.resolve('./sidebars.js'),
        versions: {
          
          "v1": {
            label: 'v1',
            path: 'v1',
            badge: true
          },
        },
      },
    ],
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocSidebarParentCategories: 0
      }
      ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: 'API Observability, API Security Testing, API Contract Testing, DAST for APIs'}],
      navbar: {
        // title: 'Levo.ai',
        logo: {
          alt: 'Levo.ai Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'welcome',
            position: 'left',
            label: 'Docs',
          },
          {
            to: 'vulnerabilities/v1/guide',
            position: 'left',
            label: 'Vulnerability Guide',
          },
          {
            href: 'https://github.com/levoai/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Levo.ai',
            items: [
              {
                label: 'Homepage',
                to: 'https://levo.ai',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/levoinchq',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/levo-inc/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/levoai/',
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} Levo, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: 'api_observability',
        content:
          'Frictionless API Observability - <a target="_blank" rel="noopener noreferrer" href="beta/beta-features">Available Now!</a>',
        backgroundColor: '#fafbfc',
        textColor: '#700be3',
        isCloseable: true,
      },
    }),
};

module.exports = config;
