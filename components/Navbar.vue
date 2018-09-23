<!-- <template>
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
</template> -->

<template>
  <tb-site-wrapper>
    <tb-site-header @toggle-menu="toggleMenu">
      <tb-notifications/>
      <tb-account-dropdown imageUrl="/static/demo/faces/female/25.jpg"/>
    </tb-site-header>
    <tb-site-nav :collapsed="menuCollapsed">
      <tb-nav-item :to="{ name: 'index' }" icon="home" label="Home"/>
      <tb-nav-item to="/interface" icon="box" label="Interface">
        <tb-dropdown-menu-item label="Cards design"/>
        <tb-dropdown-menu-item label="Charts"/>
        <tb-dropdown-menu-item label="Pricing cards"/>
      </tb-nav-item>
      <tb-nav-item to="/pages" icon="calendar" label="Components">
        <tb-dropdown-menu-item label="Maps"/>
        <tb-dropdown-menu-item label="Icons"/>
        <tb-dropdown-menu-item label="Blog"/>
        <tb-dropdown-menu-item label="Carousel"/>
      </tb-nav-item>
      <tb-nav-item to="/pages" icon="file" label="Pages">
        <tb-dropdown-menu-item label="Profile"/>
        <tb-dropdown-menu-item label="Login"/>
        <tb-dropdown-menu-item label="Register"/>
        <tb-dropdown-menu-item label="Forgot password"/>
        <tb-dropdown-menu-item label="400 error"/>
        <tb-dropdown-menu-item label="401 error"/>
        <tb-dropdown-menu-item label="403 error"/>
        <tb-dropdown-menu-item label="404 error"/>
        <tb-dropdown-menu-item label="500 error"/>
        <tb-dropdown-menu-item label="503 error"/>
        <tb-dropdown-menu-item label="Email"/>
        <tb-dropdown-menu-item label="Empty page"/>
        <tb-dropdown-menu-item label="RTL mode"/>
      </tb-nav-item>
      <tb-nav-item to="/" icon="check-square" label="Forms"/>
      <tb-nav-item to="/" icon="image" label="Gallery"/>
      <tb-nav-item to="/" icon="file-text" label="Documentation"/>
    </tb-site-nav>
  </tb-site-wrapper>
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
