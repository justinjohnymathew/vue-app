<template>
    <nav class="bg-white shadow border-b-2 border-fuchsia-600 dark:border-grey-700 dark:bg-gray-800">
        <div class="container px-6 py-4 mx-auto">
            <div class="md:flex md:items-center md:justify-between">
                <div class="flex items-center justify-between">
                    <div class="text-xl font-semibold text-gray-700">
                        <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Book.Doc</a>
                    </div>

                    <!-- Mobile menu button -->
                    <div class="flex md:hidden">
                        <button @click="toggleNavbar()" type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu" >
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <div :class="{ hidden: !navOpened }" class="flex-1 md:flex md:items-center md:justify-end ">
                    <AuthNav v-if="isLoggedIn" />
                    <NonAuthNav v-else />

                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import NonAuthNav from './NonAuthenticatedNavLinks.vue'
import AuthNav from './AuthenticatedNavLinks.vue'
export default {
  name: 'Navbar', // component name
  components: {
    NonAuthNav,
    AuthNav
  },
  computed: {
    isLoggedIn: function () { return this.$store.getters.isLoggedIn }
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
