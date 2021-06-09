<template>
  <div>
    <div class="my-auto flex flex-col md:flex-row justify-center items-center ">
        <div class="w-full p-4">
        <img src="@/assets/doctor.svg" />
        </div>
        <div class="w-full mx-4 my-32 text-center dark:text-white  ">
            <h1 class="font-bold text-6xl mb-4">Consult a Doctor</h1>
            <h2 class="font-bold text-3xl mb-12">From Your Home</h2>
            <div v-show="!isLoggedIn">
                <router-link to="/login" class="bg-gray-700 hover:bg-gray-600 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-2">
                    Sign In
                </router-link>
                <router-link to="/register" class="bg-gray-700 hover:bg-gray-600 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 ml-2">
                    Sign Up
                </router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'isLoggedIn'// access loggedin status
    ])
  }
}
</script>
