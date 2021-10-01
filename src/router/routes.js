
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/business', component: () => import('pages/Business.vue') },
      { path: '/divertissement', component: () => import('pages/Entertainment.vue') },
      { path: '/sante', component: () => import('pages/Health.vue') },
      { path: '/science', component: () => import('pages/Science.vue') },
      { path: '/sports', component: () => import('pages/Sports.vue') },
      { path: '/technologie', component: () => import('pages/Technologie.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
