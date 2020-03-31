const repoName = `docs`

const url = `https://docs.klevoya.com`
// if we use a custom domain for GitHub pages use root path `/`
const baseUrl = /github.io/.test(url) ? `/${repoName}/` : `/`

module.exports = {
  title: 'Hydra',
  tagline: 'EOSIO testing framework',
  url: url,
  // use `/` for local development
  baseUrl: process.env.NODE_ENV === `production` ? baseUrl : '/',
  favicon: 'img/favicon.ico',
  organizationName: 'klevoya', // Usually your GitHub org/user name.
  projectName: 'hydra',
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: 'Hydra',
      logo: {
        alt: 'Hydra Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'hydra',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/klevoya/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Social',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Klevoya.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/klevoya/docs/edit/master/',
          routeBasePath: '/hydra'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
