<template>
  <b-navbar toggleable="md" type="dark" variant="dark" sticky>
    <div class="container">
      <b-nav-toggle target="nav-collapse"></b-nav-toggle>

      <b-navbar-brand :to="{ name: 'index' }">
        The<strong>Skeleton</strong>
      </b-navbar-brand>

      <b-collapse is-nav id="nav-collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit.prevent>
            <b-input-group size="sm">
              <b-form-input type="text" placeholder="Search" />
              <b-input-group-button slot="right">
                <b-button variant="light">
                  <i class="fa fa-search"></i>
                </b-button>
              </b-input-group-button>
            </b-input-group>
          </b-nav-form>
        </b-navbar-nav>
        <no-ssr>
          <b-navbar-nav class="ml-auto">
            <b-nav-item :to="{ name: 'compose' }" v-if="currentUser.username" class="mr-1">
              <i class="fa fa-pencil"></i>
              Write a Story
            </b-nav-item>
            <b-nav-item-dropdown text="Lang" right v-if="currentUser.username">
              <template slot="button-content">
                <i class="fa fa-user"></i>
              </template>
              <b-dropdown-item href="#">
                <i class="fa fa-user"></i>
                Profile
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item :to="{ name: 'app-login' }" v-else>
              <i class="fa fa-sign-in"></i>
              Login
            </b-nav-item>
          </b-navbar-nav>
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
