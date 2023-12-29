import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "The Simplest Bitcoin Book Ever Written",
  description: "to orange-pill (verb): the act of explaining bitcoin in such a way that a pre-coiner gets it, and becomes a bitcoiner!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'The Book', link: '/chapters/01-why-we-need/' }
    ],

    sidebar: [
      {
        text: 'Chapters',
        items: [
          { text: '01 - Why We Need Bitcoin', link: '/chapters/01-why-we-need/' },
          { text: '02 - Bitcoin Fixes This', link: '/chapters/02-bitcoin-fixes-this' },
          { text: '03 - What Is Bitcoin', link: '/chapters/03-what-is-bitcoin' },
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/b-n-space' },
      { icon: 'twitter', link: 'https://twitter.com/SimplestBTCBook' }
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    ar: {
      label: 'عربي',
      lang: 'ar', // optional, will be added  as `lang` attribute on `html` tag
      dir: 'rtl'
    }
  }
})
