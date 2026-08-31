---
title: "文章专栏"
---

<script setup>
import { data as posts } from './posts.data.ts'
</script>

# 📖 文章列表

<div style="margin-top: 24px;">
  <p v-if="posts.length === 0" style="color: #888;">暂无已发布的文章</p>
  <ul v-else style="padding-left: 20px; line-height: 2;">
    <li v-for="post of posts" :key="post.url" style="margin: 10px 0; font-size: 17px;">
      <a :href="post.url" style="font-weight: 500; color: var(--vp-c-brand-1);">📄 {{ post.title }}</a>
    </li>
  </ul>
</div>
