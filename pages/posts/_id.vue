<template>
  <div>
    <h2>
      {{ post.title }}
      <small>
        <router-link :to="{ name: 'compose-id', params: { id: post.id } }">Edit</router-link>
      </small>
    </h2>
    <p>
    </p>
    <!-- <figure>
      <img src="https://unsplash.it/1200/400?image=0">
      <figcaption v-text="post.title"></figcaption>
    </figure> -->
    <div v-html="post.content">
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      post: 'post'
    })
  },
  methods: {
    ...mapActions({
      findPostById: 'post/findPostById'
    })
  },
  fetch ({ store, params }) {
    return store.dispatch('findPostById', params.id)
  }
}
</script>
