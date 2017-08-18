<template>
</template>

<script>
export default {
  mounted () {
    this.$router.push({ name: 'compose-id', params: { id: '+' } })
  }
}
</script>
