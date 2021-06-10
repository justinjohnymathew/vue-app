<template>
    <div class="flex flex-col mt-4 max-w-4xl">
    <div class="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 ">
        <div class="shadow overflow-hidden border-2 border-blue-900 dark:border-gray-900 sm:rounded-lg">
          <table class="min-w-full divide-y  divide-gray-200 table-fixed">
            <thead class="bg-gray-500 text-white bg-gray-800 ">
              <tr>
                <th scope="col" class=" w-1/3 dark:text-white px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  First Name
                </th>
                <th scope="col" class="w-1/3 dark:text-white px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Last Name
                </th>
                <th scope="col" class="w-1/3 dark:text-white px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Username
                </th>
                 </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="user in tableDisplay" :key="user.username">
                <td class="px-6 py-4 dark:bg-gray-700 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="font-medium text-gray-900 dark:text-white">
                        {{ user.firstname }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 dark:bg-gray-700 whitespace-nowrap">
                  <div class="text-gray-900 dark:text-white">{{ user.lastname }}</div>
                </td>
                <td class="px-6 py-4 dark:bg-gray-700 whitespace-nowrap">
                  <div class="text-gray-900 dark:text-white">{{ user.username }}</div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="flex items-center justify-between px-8 py-4 text-center bg-gray-800 ">
            <div>
              <span class="text-white"> Total Users: {{users.length }}</span>
            </div>
            <div class="flex flex-row">
              <button @click="prevPage" :disabled="currentPage==1" class="flex items-center px-4 py-2 mx-1 text-white transition-colors duration-200 transform  rounded-md bg-gray-700 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200">
            previous
        </button>

         <button @click="nextPage" class="flex items-center px-4 py-2 mx-1 text-white transition-colors duration-200 transform  rounded-md bg-gray-700 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200">
            Next
        </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AdminDashBoard',
  data: function () {
    return {
      pageSize: 5,
      currentPage: 1
    }
  },
  computed: {
    ...mapGetters({ users: 'getUser' }),
    tableDisplay: function () {
      return this.users.filter((row, index) => {
        const start = (this.currentPage - 1) * this.pageSize
        const end = this.currentPage * this.pageSize
        if (index >= start && index < end) return true
      })
    }
  },
  methods: {
    nextPage: function () {
      if ((this.currentPage * this.pageSize) < this.users.length) this.currentPage++
    },
    prevPage: function () {
      if (this.currentPage > 1) this.currentPage--
    }

  }
}
</script>
