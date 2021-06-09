<template>
  <div>
    <div class="w-full my-auto flex justify-center items-center">
        <div class="mx-4 my-32 text-center dark:text-white ">
            <h1 class="font-bold text-6xl mb-4">Consult a Doctor</h1>
            <h2 class="font-bold text-3xl mb-12">From Your Home</h2>
            <div>
                <router-link to="/login" class="bg-blue-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-2">
                    Sign In
                </router-link>
                <router-link to="/register" class="bg-blue-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 ml-2">
                    Sign Up
                </router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>
