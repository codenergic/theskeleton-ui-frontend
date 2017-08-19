<template>
  <div>
    <div class="input-group fluid">
      <input type="text" v-model="post.title" class="text-editor-title" placeholder="Title">
    </div>
    <div v-text="textMarkdown"></div>
    <medium-editor :text="post.body || ''" :options="editorOptions"></medium-editor>
  </div>
</template>

<script>
import EditorMarkdown from 'medium-editor-markdown'
import { mapState } from 'vuex'

export default {
  data: () => ({
    textMarkdown: ''
  }),
  methods: {
    textChanged (text) {
      this.textMarkdown = text
    }
  },
  computed: {
    ...mapState({
      post: 'post'
    }),
    editorOptions () {
      return {
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
          buttons: ['bold', 'italic', 'quote', 'anchor', 'h3', 'li'],
          diffLeft: 25,
          diffTop: 10
        },
        extensions: {
          markdown: new EditorMarkdown(this.textChanged)
        }
      }
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
