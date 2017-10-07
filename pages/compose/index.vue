<template>
  <div></div>
</template>

<script>
export default {
  mounted () {
    this.$router.replace({ name: 'compose-id', params: { id: '+' } })
  }
}
</script>
