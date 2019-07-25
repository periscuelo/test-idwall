import Vue from 'vue';
import Vuesax from 'vuesax';
import { shallowMount } from '@vue/test-utils';

import Signup from '@/views/Signup.vue';

Vue.use(Vuesax);

let wrapper;
beforeAll(() => {
  wrapper = shallowMount(Signup);
});

describe('Signup.vue', () => {
  it('Initial State of Component is OK', () => {
    const expected = ['email', 'msg'];
    const received = Object.keys(wrapper.vm.$data);
    expect(received).toEqual(expected);
  });

  it('its a Vue Instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
