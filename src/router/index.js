/*
 * Copyright © 2016-2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/mateiradu/personal-website/blob/master/LICENSE)
 */
import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '@/components/LandingPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
  ],
});
