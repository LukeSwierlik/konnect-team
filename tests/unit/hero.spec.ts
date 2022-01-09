import { mount } from '@vue/test-utils'
import Hero from '@/components/Hero.vue'
import { ServicesStateView } from '@/shared/interfaces/catalog.interfaces'

jest.mock('lodash.debounce', () => jest.fn((fn) => fn));

describe('Hero.vue', () => {
  it('check component is truthly', () => {
    const wrapper = mount(Hero, {
      propsData: {
        services: ServicesStateView.SERVICES
      }
    })

    expect(wrapper.find('h1').text()).toBe('Services')
    expect(wrapper.find('button').text()).toBe('Add new service')
  })

  it('search pharse', async () => {
    const wrapper  = mount(Hero, {
      propsData: {
        services: ServicesStateView.SERVICES
      }
    });

    wrapper.vm.$emit('searchServices', 'lolek');

    expect(wrapper.emitted().searchServices).toBeTruthy()
    expect(wrapper.emitted().searchServices?.[0]).toEqual(['lolek'])
  })
})
