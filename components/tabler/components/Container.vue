export default {
  name: 'container',
  props: {
    maxWidth: 0
  },
  template: `<div class="container"><slot/></div>`,
  computed: {
    style () {
      const style = { maxWidth: this.maxWidth }
      return style
    }
  }
}
<template>
  <div class="container"><slot/></div>
</template>

<script>
export default {
  name: 'container',
  props: {
    maxWidth: 0
  },
  computed: {
    style () {
      const style = { maxWidth: this.maxWidth }
      return style
    }
  }
}
</script>
