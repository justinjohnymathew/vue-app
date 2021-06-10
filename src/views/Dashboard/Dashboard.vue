<template>
    <div  class="container mx-auto">
      <h2 class="text-5xl font-bold text-align-left text-gray-700 dark:text-white">👋 Welcome {{getCurrentUser.username}}</h2>

        <AdminDashBoard v-if='isAdmin'/>
        <DefaultDashBoard v-else/>

    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import AdminDashBoard from './AdminDashBoard.vue'
import DefaultDashBoard from './DefaultDashBoard.vue'

export default {
  name: 'Dashboard',
  data () {
    return {
      componentLoaded: false
    }
  },
  components: {
    AdminDashBoard,
    DefaultDashBoard
  },
  computed: {

    ...mapGetters(['isAdmin', 'getCurrentUser'])
  }
}
</script>
