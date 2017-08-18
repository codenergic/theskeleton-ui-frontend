<template>
  <div>
    <header class="sticky row">
      <div class="col-sm col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
        <router-link :to="{ name: 'index' }" class="logo">
          <span>
            The<strong>Skeleton</strong>
          </span>
        </router-link>
        <router-link :to="{ name: 'compose' }" class="button">
          Compose
        </router-link>
      </div>
    </header>
    <br />
    <div class="container">
      <div class="row cols-sm-12 cols-md-10 cols-lg-8">
        <div class="col-md-offset-1 col-lg-offset-2">
          <nuxt/>
        </div>
      </div>
    </div>
    <br />
    <footer class="row">
      <div class="col-sm col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
        &copy; {{ new Date().getFullYear() }}
      </div>
    </footer>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 20px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
