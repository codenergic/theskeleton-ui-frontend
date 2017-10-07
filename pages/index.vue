<template>
  <div>
    <div class="blog-post" v-for="post in posts.content" :key="post.id">
      <header>
        <h2 v-text="post.title"></h2>
        <p class="blog-post-meta">
          <time datetime="2014-09-28T00:00:00Z">Sun Sep 28, 2014</time> by Michael Henderson
        </p>
      </header>
      <p v-html="post.content"/>
      <router-link :to="{ name: 'posts-id', params: { id: post.id } }">Read more →</router-link>
      <hr/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      posts: 'posts'
    })
  },
  methods: {
    ...mapActions({
      find: 'findPosts'
    })
  },
  fetch ({ store }) {
    return store.dispatch('findPosts')
  }
}
</script>
