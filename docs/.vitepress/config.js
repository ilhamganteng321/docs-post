import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "POS",
  description: "POS Desktop App",
  head: [
    ['link', { rel: 'icon', href: '/pos.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Mulai', link: '/guide/installation' },
      { text: 'Fitur', link: '/feature/' },
      { text: 'Download', link: '/download' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Panduan',
          items: [
            { text: 'Instalasi', link: '/guide/installation' },
          ],
        },
      ],

      '/feature/': [
        {
          text: 'Fitur',
          items: [
            { text: 'Overview', link: '/feature/' },
            {
              text: 'Dashboard',
              link: '/feature/dashboard',
            },
            {
              text: 'Product',
              link: '/feature/product',
            },
            {
              text: 'transaction',
              link: '/feature/transaction',
            },
            {
              text: 'Report',
              link: '/feature/report',
            },
            {
              text: 'Settings',
              link: '/feature/settings',
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'whatsapp', link: 'https://wa.me/628818250907' },
      { icon: 'github', link: 'https://github.com/ilhamganteng321' },
    ],
  },
})