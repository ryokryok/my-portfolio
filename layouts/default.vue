<template>
  <section class="hero is-dark is-fullheight is-bold">
    <!-- navbar, header class -->
    <div class="hero-head">
      <Navbar/>
    </div>
  
    <!-- main content -->
    <div class="hero-body">
      <div class="container">
        <nuxt/>
      </div>
    </div>
  
    <!-- Link -->
    <div class="hero-foot has-text-centered">
      <div class="container">
        <div class="columns">
          <div class="column">
            <i class="fab fa-twitter fa-"></i>
            <a href="https://twitter.com/Mr_ozin">Twitter</a>
          </div>
          <div class="column">
            <i class="fab fa-github fa-"></i>
            <a href="https://github.com/ryokryok">GitHub</a>
          </div>
          <div class="column">
            <i class="far fa-sticky-note fa-rotate-180"></i>
            <a href="https://note.mu/mr_ozin">note</a>
          </div>
          <div class="column">
            <a href="https://qiita.com/Mr_ozin">Qiita</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Navbar from '~/components/Navbar.vue'
  export default {
    components: {
      Navbar
    }
  }
</script>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: opacity .2s;
  }
  
  .page-enter,
  .page-leave-to {
    opacity: 0;
  }
</style>

