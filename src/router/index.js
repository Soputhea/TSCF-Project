import { createMemoryHistory, createRouter } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'

const routes = [
  { 

      path: '/',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: '/form',
        component: () => import('@/views/Form.vue'),
      },
      {
        path: '/student',
        component: () => import('@/components/partials/Forms/Student.vue'),
      },
      {
        path: '/technical-staff',
        component: () => import('@/components/partials/Forms/TechnicalStaff.vue'),
      },
      {
        path: '/national_staff',
        component: () => import('@/components/partials/Forms/NationalStaff.vue'),
      },

    //path: '/', component: DefaultLayout ,
    // children: [
    //   {
    //     path: '/',
    //     component: () => import('@/views/Dashboard.vue'),
    //   },
    //   {
    //     path: '/form',
    //     component: () => import('@/views/Form.vue'),
    //   },
    //   {
    //     path: '/student',
    //     component: () => import('@/components/partials/Forms/Student.vue'),
    //   },
    //   {
    //     path: '/technical-staff',
    //     component: () => import('@/components/partials/Forms/TechnicalStaff.vue'),
    //   },
    //   {
    //     path: '/national_staff',
    //     component: () => import('@/components/partials/Forms/NationalStaff.vue'),
    //   },


    // ],
  //},

]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router