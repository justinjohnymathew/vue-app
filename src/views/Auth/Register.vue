<template>

    <div class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 border-2 border-grey-800 dark:border-white">
        <div class="px-6 py-4">
            <h2 class="text-3xl font-bold text-center text-gray-700 dark:text-white">Hey</h2>

            <p class="mt-1 text-center text-gray-500 dark:text-gray-400">Create an account</p>
            <p   v-show = "error" class= " text-red-400 mt-1 text-center  dark:text-red-400">{{ error }}</p>

            <form @submit.prevent="register">
              <div class="w-full mt-4">
                    <input class="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-white  placeholder-gray-500 dark:placeholder-white dark:placeholder-white bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" v-model = "firstname" type="text" placeholder="First Name" aria-label="firstname" required>
                </div>
                <div class="w-full mt-4">
                    <input class="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-white  placeholder-gray-500 dark:placeholder-white dark:placeholder-white bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" v-model = "lastname" type="text" placeholder="Last Name" aria-label="lastname">
                </div>
                <div class="w-full mt-4">
                    <input class="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-white dark:placeholder-white bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" v-model = "username" type="text" placeholder="Username" aria-label="Username" required>
                </div>

                <div class="w-full mt-4">
                    <input class="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-white dark:placeholder-white bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" v-model="password" type="password" placeholder="Password" aria-label="Password" required>
                </div>

                <div class="flex items-center justify-end mt-4">

                    <button class="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none" type="submit">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>

        <div class="flex items-center justify-center py-4 text-center bg-gray-100 dark:bg-gray-700">
            <span class="text-sm text-gray-600 dark:text-gray-200">Already Have an account? </span>

            <router-link to="/login" class="mx-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500">Login</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    register () {
      const data = {
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.username,
        password: this.password
      }
      console.log(data.username, data.password)
      this.$store.dispatch('register', data)
        .then(() => this.$router.push('/dashboard'))
        .catch(err => { this.error = err.message })
    }
  }
}
</script>
