<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <div class="container">
      <b-nav-toggle target="nav-collapse"></b-nav-toggle>

      <b-navbar-brand :to="{ name: 'index' }">
        The<strong>Skeleton</strong>
      </b-navbar-brand>

      <b-collapse is-nav id="nav-collapse">
        <b-nav is-nav-bar>
          <b-nav-item :to="{ name: 'compose' }">
            <i class="fa fa-pencil"></i>
            Write a Story
          </b-nav-item>
        </b-nav>
        <no-ssr>
          <b-nav is-nav-bar class="ml-auto">
            <b-nav-item :to="{ name: 'index' }" v-if="currentUser.username">
              <i class="fa fa-user"></i>
              {{ currentUser.username }}
            </b-nav-item>
            <b-nav-item :to="{ name: 'app-login' }" v-else>
              Login
            </b-nav-item>
          </b-nav>
        </no-ssr>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  props: {
    currentUser: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
