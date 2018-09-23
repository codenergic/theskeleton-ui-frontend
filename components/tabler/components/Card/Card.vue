<template>
  <div class="card">
    <slot>
      <card-header v-if="title">{{ title }}</card-header>
      <card-body>{{ body }}</card-body>
      <card-footer v-if="footer">{{ footer }}</card-footer>
    </slot>
  </div>
</template>

<script>
import CardHeader from './CardHeader'
import CardFooter from './CardFooter'
import CardBody from './CardBody'

export default {
  name: 'card',
  props: {
    title: { default: '', type: String },
    footer: { default: '', type: String },
    body: { default: '', type: String }
  },
  components: {
    CardBody,
    CardFooter,
    CardHeader
  }
}
</script>

<style scoped>

</style>
