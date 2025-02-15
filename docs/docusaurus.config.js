// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Tegral",
  tagline: "A web back-end framework, the libraries that make it tick, and beyond! 100% Kotlin.",
  url: "https://tegral.zoroark.guru",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/tegral_logo.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "utybo", // Usually your GitHub org/user name.
  projectName: "tegral", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/utybo/Tegral/tree/main/docs/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
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
        title: "Tegral",
        logo: {
          alt: "Tegral Logo",
          src: "img/tegral_logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "get-started/index",
            position: "left",
            label: "Get Started",
          },
          {
            type: "doc",
            docId: "recipes/index",
            position: "left",
            label: "Recipes",
          },
          {
            type: "doc",
            docId: "modules/index",
            position: "left",
            label: "Modules",
          },
          {
            type: "doc",
            docId: "about/contributing",
            position: "left",
            label: "About",
          },
          {
            href: "pathname:///dokka",
            label: "API",
            position: "right",
          },
          {
            href: "https://github.com/utybo/tegral/tree/main/CHANGELOG.md",
            label: "Changelog",
            position: "right",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/utybo/tegral",
            label: "GitHub",
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
                label: "Get Started & Tutorials",
                to: "/docs/get-started",
              },
              {
                label: "Modules",
                to: "/docs/modules",
              },
              {
                label: "API documentation (Dokka)",
                to: "pathname:///dokka",
              },
            ],
          },
          // TODO add links
          /*{
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },*/
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/utybo/Tegral",
              },
              {
                label: "Changelog",
                href: "https://github.com/utybo/Tegral/tree/main/CHANGELOG.md",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tegral maintainers & contributors. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["kotlin", "groovy", "toml", "yaml"],
      },
      algolia: {
        appId: "XKS5FWH0DJ",
        apiKey: "6f8c788df7af2f39272bb5497cc19a8b",
        indexName: "tegral-zoroark",
      },
    }),
  clientModules: [require.resolve("./src/routeobserver.js")],
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
};

module.exports = config;
