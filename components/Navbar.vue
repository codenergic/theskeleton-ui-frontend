<template>
  <nav class="navbar navbar-inverse navbar-static-top">
    <div class="container">
      <div class="navbar-header">
        <router-link :to="{ name: 'index' }" class="navbar-brand">Night Owl</router-link>
      </div>
      <ul class="nav navbar-nav">
        <li><router-link :to="{ name: 'compose' }">Write a Story</router-link></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </nav>
</template>
