
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/Index.vue'),
        name : "Home",
        icon : "home",
        caption : "Go Home"
      },
      { 
        path: '/reports', 
        component: () => import('pages/Reportes.vue'),
        name : "Reports",
        icon : "article",
        meta : {
          requiresAuth : true
        }
      },
      { 
        path: '/products', 
        icon : "memory",
        component: () => import('pages/products.vue') ,
        name : "Products"
      },
      { 
        path: '/login', 
        icon : "fingerprint",
        component: () => import('pages/login.vue'),
        name : "Login"
      },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]


export default routes
