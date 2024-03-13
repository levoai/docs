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
    ],
    [
      // TODO: Remove this redirects after few days post new release. these client redirects are added temporarily
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/install-satellite',
            from: ['/api-observability/install-guide/install-satellite'],
          },
          {
            to: '/install-traffic-capture-sensors/common-tasks/sensor-configuration',
            from: ['/api-observability/common-tasks/sensor/sensor-configuration'],
          },
          {
            to: '/integrations',
            from: '/integrations/ticketing-notifications',
          },
          {
            to: '/faqs/satellite-sensor-faqs',
            from: '/api-observability/faqs',
          },
          {
            to: '/security-testing/test-laptop',
            from: ['/security-contract-testing/levo-cli/levo-cli-intro'],
          },
          {
            to: '/security-testing/test-laptop/test-mac-os',
            from: '/security-contract-testing/levo-cli/levo-cli-for-mac-os',
          },
          {
            to: '/security-testing/test-laptop/test-windows',
            from: '/security-contract-testing/levo-cli/levo-cli-for-windows',
          },
          {
            to: '/guides/general/os-compat-check',
            from: '/api-observability/install-guide/os-compat-check',
          },
          {
            to: '/guides/security-testing/levocli-cicd',
            from: '/integrations/cicd-plugins',
          },
          {
            to: '/install-satellite/satellite-kubernetes',
            from: '/api-observability/common-tasks/satellite/troubleshoot',
          },
          {
            to: '/guides/miscellaneous/api-integrations',
            from: '/integrations/api-integrations',
          },
          {
            to: '/guides/security-testing/common-tasks/authn-authz',
            from: '/security-contract-testing/tasks/authentication/authn-authz',
          },
          {
            to: '/install-traffic-capture-sensors/common-tasks/filter-traffic',
            from: '/api-observability/common-tasks/sensor/filter-traffic',
          },
          {
            to: '/install-satellite/satellite-kubernetes',
            from: '/api-observability/common-tasks/satellite/satellite-mgmt',
          },
          {
            to: '/guides/security-testing/test-sample-app',
            from: '/security-contract-testing/test-sample-app/levo-sample-applications',
          },
          {
            to: '/guides/miscellaneous/junit-format-results',
            from: '/integrations/junit-format-results',
          },
          {
            to: '/install-log-parsing-sensors',
            from: '/api-observability/install-guide/install-sensor/log-parser',
          },
          {
            to: '/guides/install-guide',
            from: '/api-observability/install-guide',
          },
          {
            to: '/guides/demo-application',
            from: '/api-observability/quickstart/sample-app',
          },
          {
            to: '/guides/general/private-registry',
            from: '/api-observability/common-tasks/general/private-registry',
          },
          {
            to: '/guides/key-concepts',
            from: '/api-observability/concepts',
          },
          {
            to: '/guides/api-observability',
            from: '/api-observability',
          },
          {
            to: '/guides/general/supported-platforms',
            from: '/api-observability/supported-platforms',
          },
          {
            to: '/install-api-portal',
            from: '/api-observability/api-portal',
          },
          {
            to: '/guides/general',
            from: '/api-observability/common-tasks',
          },
          {
            to: '/install-traffic-capture-sensors/ebpf-sensor/sensor-kubernetes',
            from: '/api-observability/common-tasks/sensor/sensor-mgmt',
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/quickstart')) {
            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
            return [
              existingPath.replace('/quickstart', '/api-observability/quickstart'),
            ];
          }
          if (existingPath.includes('/guides')) {
            return [
              existingPath.replace('/guides/security-testing/concepts/', '/security-contract-testing/concepts/'),
              existingPath.replace('/guides/security-testing/common-tasks', '/security-contract-testing/tasks'),
              existingPath.replace('/guides/security-testing/test-your-app', '/security-contract-testing/test-your-app'),
              existingPath.replace('/guides/security-testing/test-sample-app', '/security-contract-testing/test-sample-app'),
              existingPath.replace('/guides/security-testing/common-tasks/authn-authz', '/security-contract-testing/tasks/authentication'),
            ];
          }
          if (existingPath.includes('/security-testing')) {
            return [
              existingPath.replace('/security-testing/test-laptop', '/security-contract-testing/levo-cli/'),
            ];
          }
          if (existingPath.includes('/install-traffic-capture-sensors')) {
            return [
              existingPath.replace('/install-traffic-capture-sensors', '/api-observability/install-guide/install-sensor'),
              existingPath.replace('/install-traffic-capture-sensors/common-tasks', '/api-observability/common-tasks/sensor'),
            ];
          }
          if (existingPath.includes('/quickstart')) {
            return [
              existingPath.replace('/quickstart', '/api-observability/quickstart'),
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
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
        copyright: `Copyright © ${new Date().getFullYear()} Levo, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: 'postman_announcement',
        content:
          '<a target="_blank" rel="noopener noreferrer" href="https://www.loom.com/share/a924767075ad41cc88b910fe99310b9c?sid=41e6f47c-b6f4-4cf5-b536-56f2ee6b8f1f">Democratize API Documentation with Levo.ai\'s Portal</a>',
        backgroundColor: '#ffc784'
      },
    }),
};

module.exports = config;
