import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "kyon.me",
  description: "个人主页 & 博客",
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],

  themeConfig: {
    logo: '/favicon.png',
    siteTitle: "kyon.me",
    
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/posts/': [
        {
          text: '专栏文章',
          items: [
            { text: '文章首页', link: '/posts/' }
          ]
        }
      ]
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },

    footer: {
      copyright: 'Copyright © 2026 kyon.me'
    }
  }
})
