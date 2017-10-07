<template>
  <div>
    <div class="input-group fluid">
      <input type="text" v-model="dataTitle" class="text-editor-title" placeholder="Title">
    </div>
    <medium-editor :text="content" :options="editorOptions" @edit="textChanged"></medium-editor>
    <div class="row">
      <div class="col-12">
        <b-button size="lg" variant="dark" class="col-xs-12 col-md-3 py-3" @click="$emit('post', { title: dataTitle, content: dataContent })">
          <i class="fa fa-send"></i>
          Post
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
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
      dataTitle: this.title,
      dataContent: ''
    }
  },
  methods: {
    textChanged (operation) {
      this.dataContent = operation.event.srcElement.innerHTML
      this.$emit('edit', operation)
    }
  },
  computed: {
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
        }
      }
    }
  }
}
</script>

<style>
.medium-editor-element {
  min-height: 100px;
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
