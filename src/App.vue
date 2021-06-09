<template>
<div class="h-screen dark:bg-gray-800">
  <Navbar/>
   <div class="  pl-1 pr-1 pt-8 dark:bg-gray-800 ">
     <!-- All Pages are nested inside this division ? -->
  <router-view/>
  </div>
  <!-- togggle button for switching theme -->
  <button @click="toggleTheme"
     class=" p-1 dark:text-red-400 text-cyan-200 fixed bottom-3 right-3 border-2 border-gray-800 dark:border-2 dark:border-white">
      <span class=" text-xl text-gray-800 " v-if="theme=='light'">🌣</span>
      <span class=" text-xl text-white" v-else>☾</span>
    </button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex' // to access geetrs for store
import Navbar from '@/components/Nav/Navbar.vue' // for navbar component

export default {
  beforeMount () { // function to be executed before mounting page
    this.$store.dispatch('initTheme')// initializes theme
  },
  name: 'App',
  components: {
    Navbar
  },
  computed: {
    ...mapGetters({ theme: 'getTheme' })// returns current theme
  },
  watch: { // gets executed on change of a state
    theme (newTheme) {
      newTheme === 'light'
        ? document.querySelector('html').classList.remove('dark')
        : document.querySelector('html').classList.add('dark')
    }
  },

  methods: {
    toggleTheme () { // method executed on theme toggle button click
      this.$store.dispatch('toggleTheme')
    }
  }
}
</script>
