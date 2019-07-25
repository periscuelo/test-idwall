import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@/App.vue';

Vue.use(VueRouter);

describe('App.vue', () => {
  it('its a Vue Instance', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
