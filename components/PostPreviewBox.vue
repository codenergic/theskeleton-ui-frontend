<template>
  <b-card img-src="http://placehold.it/750x300" :alt="title" :title="title" title-tag="h2" img-top>
    <p class="card-text" v-html="content"></p>
    <a href="#" class="btn btn-primary">Read More &rarr;</a>
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
    }
  }
}
</script>
