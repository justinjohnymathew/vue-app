<template>
    <div class="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                        <router-link  to="/login" class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Sign In</router-link>
                        <router-link to="/register" class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Sign Up</router-link>
                    </div>

</template>
<script>
export default {
  name: 'NonAuthNav'
}
</script>
