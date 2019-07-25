import Vue from 'vue';
import VueRouter from 'vue-router';
import { shallowMount } from '@vue/test-utils';

import App from '@/App.vue';

Vue.use(VueRouter);

describe('App.vue', () => {
  it('its a Vue Instance', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
