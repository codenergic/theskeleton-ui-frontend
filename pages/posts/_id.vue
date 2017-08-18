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
    <figure>
      <img src="https://unsplash.it/1200/400?image=0">
      <figcaption v-text="post.title"></figcaption>
    </figure>
    <p v-html="post.body">
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      post: 'post'
    })
  },
  fetch ({ store, params }) {
    return store.dispatch('findPostById', params.id)
  }
}
</script>
