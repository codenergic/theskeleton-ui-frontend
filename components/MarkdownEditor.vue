<template>
  <div>
    <div ref="dataTitle" data-name="title">
      <h2 v-text="title" class="mb-3"></h2>
    </div>
    <div ref="dataContent" data-name="content">
      <p v-html="content"></p>
    </div>
  </div>
</template>

<script>
import 'ContentTools/build/content-tools.min.css'
import ContentTools from 'ContentTools'

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      editor: null
    }
  },
  computed: {
    defaultTools () {
      return [
        [ 'bold', 'italic', 'link' ],
        [ 'heading', 'subheading', 'line-break' ],
        [ 'undo', 'redo' ]
      ]
    }
  },
  methods: {
    editorSave (ev) {
      const regions = ev.detail().regions
      this.$emit('post', {
        title: regions.title || this.title,
        content: regions.content || this.content
      })
    },
    editorCancel () {
      this.$emit('cancel')
    },
    initializeEditor () {
      ContentTools.DEFAULT_TOOLS = this.defaultTools
      const editor = this.editor = ContentTools.EditorApp.get()
      editor.init([ this.$refs.dataTitle, this.$refs.dataContent ], 'data-name')
      editor.addEventListener('saved', this.editorSave)
      editor.addEventListener('revert', this.editorCancel)
      editor.start()
      editor.ignition().state('editing')
    }
  },
  mounted () {
    this.initializeEditor()
  },
  destroyed () {
    this.editor.destroy()
  }
}
</script>
