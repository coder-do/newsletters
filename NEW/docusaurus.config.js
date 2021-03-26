/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Thematics Newsletter Archive by Hackernoon',
    tagline: 'The tagline of my site',
    url: 'https://docusaurus-newsletter.netlify.app/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Hackernoon', // Usually your GitHub org/user name.
    projectName: 'newsletters', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'My Site',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    to: 'docs/index',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'right',
                }
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Archive',
                    items: [
                        {
                            label: 'Thematics',
                            to: 'docs/',
                        },
                        {
                            label: 'Noonification',
                            to: 'docs/',
                        },
                        {
                            label: 'TechBrief',
                            to: 'docs/',
                        },
                        {
                            label: 'Podcasts',
                            to: 'docs/',
                        },
                        {
                            label: 'Gaming',
                            to: 'docs/',
                        }
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Hackernoon',
                            href: 'http://hackernoon.com/',
                        },
                        {
                            label: 'Slogging',
                            href: 'https://www.slogging.com/',
                        },
                        {
                            label: 'Discord',
                            href: 'xxx',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/hackernoon',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/hackernoon',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Hackernoon. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.       
                    // todo: if we need editUrl, we can return it              
                    //editUrl:
                    //'https://github.com/facebook/docusaurus/edit/master/website/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
