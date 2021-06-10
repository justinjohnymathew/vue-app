<template>
    <nav class=" bg-white dark:bg-gray-800 shadow border-b-2 border-fuchsia-600 dark:border-grey-700 dark:bg-gray-800 sticky top-0 z-50">
        <div class="container px-6 py-4 mx-auto">
            <div class="md:flex md:items-center md:justify-between">
                <div class="flex items-center justify-between">
                    <div class="text-xl font-semibold ">
                        <router-link class="text-2xl font-bold  dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" to="/">Book.Doc</router-link>
                    </div>

                    <!-- Mobile menu button -->
                    <div class="flex md:hidden">
                      <!-- hamburger button for toggling navbar -->
                        <button @click="toggleNavbar()" type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu" >
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <div :class="{ hidden: !navOpened }" class="flex-1 md:flex md:items-center md:justify-end ">
                    <NonAuthNav v-if="!isLoggedIn" />
                    <AuthNav v-else />

                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import NonAuthNav from './NonAuthenticatedNavLinks.vue'// navbar for non authenticated users
import AuthNav from './AuthenticatedNavLinks.vue'// navbar for  authenticated users
export default {
  name: 'Navbar', // component name
  components: {
    NonAuthNav,
    AuthNav
  },
  computed: {
    ...mapGetters([
      'isLoggedIn'// access loggedin status
    ])
  },
  data () {
    return {
      navOpened: false // cureent status of navbar
    }
  },
  methods: {
    toggleNavbar () {
      // function to toggle navabar
      this.navOpened = !this.navOpened
    }
  }
}
</script>
