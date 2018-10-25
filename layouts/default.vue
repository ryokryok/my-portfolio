<template>
  <div>
    <Navbar/>
    <nuxt/>
  </div>
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
.page-enter-active, .page-leave-active {
  transition: opacity .2s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

</style>

