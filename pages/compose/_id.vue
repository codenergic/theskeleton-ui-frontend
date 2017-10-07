<template>
  <div>
    <markdown-editor @post="postContent"></markdown-editor>
  </div>
</template>

<script>
import MarkdownEditor from '~/components/MarkdownEditor'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    MarkdownEditor
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

<style>
.medium-editor-element {
  min-height: 500px;
}

.medium-editor-element:focus, .text-editor-title:focus {
  outline: none;
}

.text-editor-title {
  margin: 0;
  padding: 0;
  border: none;
  font-size: 2em;
}
</style>
