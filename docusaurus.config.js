// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Klaw: Apache Kafka governance toolkit',
  tagline: 'Streamline your Apache Kafka ecosystem, secure your data & simplify governance',
  favicon: 'images/favicon.ico',

  // Set the production url of your site here
  url: 'https://klaw-project.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aiven', // Usually your GitHub org/user name.
  projectName: 'klaw', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // The application ID provided by Algolia
        appId: 'AA4VAX6QBK',

        // Public API key: it is safe to commit it
        apiKey: '1819f8ba477f2be52049b20578a7e6cc',

        indexName: 'klaw-project',

        insights: true,

        contextualSearch: true,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      image: 'images/logo-dark.png',
      navbar: {
        title: '',
        logo: {
          alt: 'Logo',
          src: 'images/logo-dark.png',
          srcDark: 'images/logo-light.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/docs/category/Releases', label: 'Releases', position: 'left'},
          {
            href: 'https://github.com/aiven/klaw',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/',
              },
              {
                label: 'Faq',
                to: '/docs/faq',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://aiven.io/community/forum/tag/klaw',
              },
              {
                label: 'Contact Us',
                href: 'mailto:info@klaw-project.io',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/aiven/klaw',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Aiven. Apache Kafka® is either a registered trademark or a trademark of the Apache Software Foundation in the United States and/or other countries.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
