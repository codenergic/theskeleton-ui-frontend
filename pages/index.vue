<template>
  <div>
    <article class="blog-post" v-for="post in posts" :key="post.id">
      <header>
        <h2 v-text="post.title"></h2>
        <p class="blog-post-meta"><time datetime="2014-09-28T00:00:00Z">Sun Sep 28, 2014</time> by Michael Henderson</p>
      </header>
      <p v-text="post.body"/>
      <router-link :to="{ name: 'posts-id', params: { id: post.id } }">Read more →</router-link>
      <hr/>
    </article>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      posts: 'posts'
    })
  },
  fetch ({ store }) {
    return store.dispatch('findAllPosts')
  }
}
</script>
