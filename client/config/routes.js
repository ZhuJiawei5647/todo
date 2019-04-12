// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app/123'
  },
  {
    path: '/app/:id',
    props: true,
    // props: {
    //   id: 456
    // },
    // props: (route) => ({ id: route.query.b })
    component: () => import('../views/todo/todo.vue'),
    name: 'app',
    meta: {
      title: 'this is a app'
    },
    beforeEnter (to, from, next) {
      console.log('app before route enter')
      next()
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  }
]
