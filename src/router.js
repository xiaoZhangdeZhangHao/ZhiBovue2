import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import LiveRoom from './views/LiveRoom.vue';
import Profile from './views/Profile.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/live/:liveId',
      name: 'LiveRoom',
      component: LiveRoom,
      props: route => ({ liveName: route.query.liveName }) // 使用 query 参数传递 liveName
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    { path: '/profile', component: Profile },
  ],
});