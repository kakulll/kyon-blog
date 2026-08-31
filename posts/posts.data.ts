import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  includeSrc: false,
  render: false,
  excerpt: false,
  transform(raw) {
    return raw
      .filter(({ url }) => url !== '/posts/' && url !== '/posts/index.html')
      .map(post => {
        const slug = post.url.replace('/posts/', '').replace('.html', '')
        return {
          title: decodeURIComponent(slug),
          url: post.url
        }
      })
      .sort((a, b) => a.title.localeCompare(b.title))
  }
})
