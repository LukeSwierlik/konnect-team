import { mount } from '@vue/test-utils'
import Hero from '@/components/Hero.vue'
import { ServicesStateView } from '@/shared/interfaces/catalog.interfaces';
import { expect } from 'chai'

describe('Hero.vue', () => {
  it('check component is truthly', () => {
    const wrapper = mount(Hero, {
      propsData: {
        services: ServicesStateView.SERVICES,
        searchServices: () => {}
      }
    })

    console.log(wrapper.html())

    expect(wrapper.find("h1").text()).to.include("Services")
    expect(wrapper.find("button").text()).to.include("Add new service")
  });
})
