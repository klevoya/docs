const repoName = `docs`

module.exports = {
  title: 'Hydra',
  tagline: 'EOSIO testing framework',
  url: 'https://docs.klevoya.com',
  baseUrl: process.env.NODE_ENV === `production` ? `/${repoName}/` : '/',
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
          to: 'docs/about/getting-started',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
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
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
