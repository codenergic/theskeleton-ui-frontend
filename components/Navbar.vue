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
        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item :to="{ name: 'index' }">
            <i class="fa fa-user"></i>
          </b-nav-item>
        </b-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>
