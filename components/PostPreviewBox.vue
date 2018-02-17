<template>
  <b-card img-src="http://placehold.it/750x300" :alt="title" :title="title" title-tag="h2" img-top>
    <div class="card-text" v-html="content"></div>
    <b-button :to="to" variant="primary">
      Read more
      <i class="fa fa-external-link"></i>
    </b-button>
    <div class="text-muted" slot="footer">
      Posted on January 1, 2017
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    to: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
