<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <AboutIntro />
      <AboutStory />
      <Stats />
      <Team />
      <Process />     

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import AboutIntro from './../partials/AboutIntro.vue'
import AboutStory from './../partials/AboutStory.vue'
import Stats from './../partials/Stats.vue'
import Team from './../partials/Team.vue'
import Process from './../partials/Process.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'About',
  components: {
    Header,
    AboutIntro,
    AboutStory,
    Stats,
    Team,
    Process,
    Footer
  },
}
</script>
