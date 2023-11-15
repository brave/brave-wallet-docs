// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Brave Wallet",
  tagline: "",
  url: "https://wallet-docs.brave.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "brave", // Usually your GitHub org/user name.
  projectName: "brave-wallet-docs", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/brave/brave-wallet-docs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Brave Wallet",
        logo: {
          alt: "Brave Wallet Logo",
          src: "img/brave128.png",
        },
        items: [
          /*
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Intro',
          },
          */
          {
            to: "https://brave.com/download",
            label: "Download",
            position: "left",
          },
          {
            to: "https://twitter.com/brave",
            label: "Twitter",
            position: "left",
          },
          {
            to: "https://github.com/brave/brave-browser",
            label: "Github",
            position: "left",
          },
          {
            href: "https://github.com/brave/brave-wallet-docs",
            label: "Docs GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/brave",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/brave",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/brave/brave-browser",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Brave Software, Inc.`,
      },
    }),
};

module.exports = config;
