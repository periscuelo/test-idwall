import Vue from 'vue';
import Router from 'vue-router';
import Signup from '@/views/Signup.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/feed',
      name: 'feed',
      component: () => import(/* webpackChunkName: "feed" */ './views/Feed.vue'),
      beforeEnter: (to, from, next) => {
        if (sessionStorage.getItem('token') !== null) {
          next();
        } else {
          next('/');
        }
      },
    },
  ],
});
