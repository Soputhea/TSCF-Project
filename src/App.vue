<template>
  <div class="with-welcome-text">
      <div class="container-scroller">
          <!-- partial:partials/navbar.vue -->
          <navbar />
          <!-- partial -->
          <div class="container-fluid page-body-wrapper">
              <!-- partial:partials/_sidebar.html -->
              <sidebar />
              
              <!-- partial -->
              <router-view></router-view>
              
              
              <!-- main-panel ends -->
          </div>
          <!-- page-body-wrapper ends -->
      </div>
      <!-- container-scroller -->

  </div>
</template>

<script>
import navbar from '@/components/partials/navbar.vue'
import sidebar from '@/components/partials/sidebar.vue'
import mainContent from '@/components/partials/mainContent.vue'
import footerbar from '@/components/partials/footer.vue'

export default {
  components: {
      navbar,
      mainContent,
      sidebar, 
      footerbar,
      
  }
}
</script>

<style></style>