<template>
  <header class="navbar">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <p class="title is-3">mrozin.ga</p>
      </nuxt-link>
  
      <div class="navbar-burger has-text-white has-background-grey-darker" data-target="navMenu"
        @click="toggleMenu"  :class="{'is-active':isMenuActive}">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  
    <div id="navMenu" class="navbar-menu"
    :class="{'is-active':isMenuActive}">  
      <div class="navbar-end">
        <div class="navbar-item">
        </div>
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/profile">Profile</nuxt-link>
          <nuxt-link class="navbar-item" to="/product">Product</nuxt-link>
        </div>
    </div>
  </header>
</template>
<script>
export default {
  data: () => {
    return {isMenuActive: false}
  },
  methods: {
    toggleMenu () {
      this.isMenuActive = !this.isMenuActive
    }
  },
  watch: {
    '$route' () {
      this.isMenuActive = false
    }
  }
}

</script>

