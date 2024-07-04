<template>
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav" >
      <li class="nav-item">

        <router-link to="/" class="nav-link">
          <i class="mdi mdi-grid-large menu-icon"></i>
          <span class="menu-title" >ទំព័រដើម</span>
        </router-link>
      </li>
      <!-- <li class="nav-item nav-category">System Management</li> -->
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
          <i class="menu-icon mdi mdi-floor-plan"></i>
          <span class="menu-title">សាលារៀន</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="ui-basic">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item" > 
              <router-link to="/form" class="nav-link">
                  <span >១. អត្តសញ្ញាណ</span>
              </router-link>
              
              </li>
            <li class="nav-item">
              <router-link to="/student" class="nav-link">២. ចំនួនសិស្សថ្មី </router-link> 
            </li>
            <li class="nav-item">
              <router-link to="/technical-staff" class="nav-link">៣. ចំនួនផ្នែកអប់រំបច្ចេកទេស </router-link> 
            </li>
            <li class="nav-item">
              <router-link to="/national_staff" class="nav-link">៤. ចំនួនបុគ្គលិកក្របខណ្ឌ </router-link> 
            </li>
          </ul>
        </div>
      </li>
      
    </ul>
  </nav>

  
</template>

<script>
export default {

}
</script>

