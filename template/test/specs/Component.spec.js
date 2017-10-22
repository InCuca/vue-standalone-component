import Vue from 'vue';
import Component from '@/src/{{ name }}/{{ name }}';

describe('{{ name }}.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Component);
    const propsData = {text: 'Test text'};
    const vm = new Constructor({propsData}).$mount();
    expect(vm.$el.querySelector('strong').textContent)
      .to.equal(propsData.text);
  });
});
