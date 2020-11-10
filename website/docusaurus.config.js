module.exports = {
  title: 'European Persistent Identifier Consortium Documentation',
  tagline: '',
  url: 'https://grnet.github.io',
//  baseUrl: '/',
  baseUrl: '/doc.pidconsortium.eu/',
  onBrokenLinks: 'throw',
  favicon: 'img/grnetfavicon.ico',
  organizationName: 'GRNET', // Usually your GitHub org/user name.
  projectName: 'doc.pidconsortium.eu', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Persistent IDentifier Service',
      logo: {
        alt: '',
        src: 'img/ePIClogo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
//        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/grnet/doc.pidconsortium.eu',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: ' ',
          items: [
            {
              label: ' ',
              to: 'docs/',
            },
//            {
//              label: 'Second Doc',
//              to: 'docs/doc2/',
//            },
          ],
        },
        {
          title: ' ',
          items: [
            {
              label: ' ',
              href: 'https://github.com/grnet/doc.pidconsortium.eu',
            },
//            {
//              label: 'Stack Overflow',
//              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
//            },
//            {
//              label: 'Discord',
//              href: 'https://discordapp.com/invite/docusaurus',
//            },
//            {
//              label: 'Twitter',
//              href: 'https://twitter.com/docusaurus',
//            },
          ],
        },
        {
          title: ' ',
          items: [
//            {
//              label: 'Blog',
//              to: 'blog',
//            },
            {
              label: ' ',
              href: 'https://github.com/grnet/doc.pidconsortium.eu',
            },
          ],
        },
      ],
//      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
//      copyright: `Copyright © ${new Date().getFullYear()} GRNET`,
      copyright: `Copyright © ${new Date().getFullYear()} <a href="http://www.pidconsortium.net/">European Persistent Identifier Consortium</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/grnet/doc.pidconsortium.eu'
        },
//        blog: {
//          showReadingTime: true,
//          // Please change this to your repo.
//          editUrl:
//            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
//        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
