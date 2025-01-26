<template>
  <router-view />
</template>

<script>
import AOS from 'aos'
import Sticky from 'sticky-js'

export default {
  mounted() {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
    if (this.$router) {
      this.$watch('$route', () => {
        this.$nextTick(() => {
          const sticky = new Sticky('[data-sticky]')
        })
      });
    }    
  }
}
</script>

