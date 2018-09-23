<template>
  <!-- <div class="row">
    <div class="col-md-8">
      <h1 class="my-3">
        You might like
      </h1>
      <post-preview-box v-for="post in posts.content" :key="post.id" :title="post.title" :content="post.content" :to="{ name: 'posts-id', params: { id: post.id } }" class="mb-4">
      </post-preview-box>
    </div>
    <no-ssr>
      <div class="col-md-4">
        <search-box class="my-3"></search-box>
        <categories-box class="my-3"></categories-box>
        <b-card class="my-3" header="Did you know" header-tag="h5">
          There are only 4 words in the English language which end in 'dous' (they are: hazardous, horrendous, stupendous and tremendous)
        </b-card>
      </div>
    </no-ssr>
  </div> -->
  <div>
    <b-card>

    </b-card>
  </div>
</template>

<script>
// import CategoriesBox from '~/components/CategoriesBox'
// import PostPreviewBox from '~/components/PostPreviewBox'
// import SearchBox from '~/components/SearchBox'
// import { mapActions, mapState } from 'vuex'

export default {
  // components: {
  //   CategoriesBox,
  //   PostPreviewBox,
  //   SearchBox
  // },
  // computed: {
  //   ...mapState({
  //     posts: 'posts'
  //   })
  // },
  // methods: {
  //   ...mapActions({
  //     find: 'findPosts'
  //   })
  // },
  // fetch ({ store }) {
  //   return store.dispatch('findPosts')
  // }
}
</script>
