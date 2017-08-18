<template>
  <div>
    <div class="row cols-sm-12" v-for="post in posts" :key="post.id">
      <div class="card">
        <div class="section">
          <router-link :to="{ name: 'posts-id', params: { id: post.id } }">
            <h3 v-text="post.title"></h3>
          </router-link>
        </div>
        <img :src="`https://unsplash.it/1200?image=0`" class="section media">
        <div class="section">
          <p v-text="post.body"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Logo
  },
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
