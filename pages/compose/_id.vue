<template>
  <markdown-editor></markdown-editor>
</template>

<script>
import MarkdownEditor from '~/components/MarkdownEditor'
import { mapState } from 'vuex'

export default {
  components: {
    MarkdownEditor
  },
  data: () => ({
    editorOptions: {
      paste: {
        forcePlainText: true,
        cleanPastedHTML: true,
        cleanReplacements: [],
        cleanAttrs: ['class', 'style', 'dir'],
        cleanTags: ['meta']
      },
      placeholder: {
        text: 'Write your story'
      },
      toolbar: {
        buttons: ['bold', 'italic', 'quote', 'anchor', 'h2', 'h3'],
        diffLeft: 25,
        diffTop: 10
      }
    }
  }),
  computed: {
    ...mapState({
      post: 'post'
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
