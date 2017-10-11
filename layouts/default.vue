<template>
  <div>
    <navbar :current-user="currentUser" />
    <br />
    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  },
  computed: {
    ...mapState({
      currentUser: state => state.auth.loggedInUser
    })
  },
  methods: {
    ...mapActions({
      checkSession: 'auth/checkSession'
    })
  },
  mounted () {
    this.checkSession()
  }
}
</script>
