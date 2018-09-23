<template>
  <div>
    <markdown-editor @post="postContent" :title="post.title" :content="post.content"></markdown-editor>
  </div>
</template>

<script>
// import MarkdownEditor from '~/components/MarkdownEditor'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    // MarkdownEditor
  },
  computed: {
    ...mapState({
      post: 'post'
    })
  },
  methods: {
    postContent ({ title, content }) {
      this.savePost({ title, content })
    },
    ...mapActions({
      savePost: 'savePost'
    })
  },
  fetch ({ store, params }) {
    if (params.id !== '+') {
      return store.dispatch('findPostById', params.id)
    }
  }
}
</script>
