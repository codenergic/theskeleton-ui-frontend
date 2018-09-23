<template>
  <div>
    <no-ssr>
      <navbar></navbar>
    </no-ssr>
    <div class="container my-5">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Navbar from '~/components/Navbar'

export default {
  data () {
    return {
      menuCollapsed: true
    }
  },
  components: {
    Navbar
  },
  computed: {
    ...mapState({
      currentUser: state => state.auth.loggedInUser
    })
  },
  methods: {
    toggleMenu () {
      this.menuCollapsed = !this.menuCollapsed
    },
    ...mapActions({
      checkSession: 'auth/checkSession'
    })
  },
  mounted () {
    this.checkSession()
  }
}
</script>
