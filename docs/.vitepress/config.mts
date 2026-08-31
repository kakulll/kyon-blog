import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

function getSidebar() {
  try {
    const sidebarFile = path.resolve(__dirname, 'sidebar.json')
    if (fs.existsSync(sidebarFile)) {
      return JSON.parse(fs.readFileSync(sidebarFile, 'utf-8'))
    }
  } catch (e) {}
  return { '/blog/': [] }
}

export default defineConfig({
  title: "kyon.me",
  description: "个人主页 & 博客",
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],

  themeConfig: {
    logo: '/favicon.png',
    siteTitle: "kyon.me",
    
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: getSidebar(),

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
