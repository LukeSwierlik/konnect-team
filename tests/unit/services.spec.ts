import { mount } from '@vue/test-utils'
import { ServicesStateView } from '@/shared/interfaces/catalog.interfaces'
import Services from '@/components/Services.vue'
import { listServicesMock } from '@/store/Services/__mocks__/listServices.mock'

describe('Services.vue', () => {
  it('check render list', () => {
    const wrapper = mount(Services, {
      propsData: {
        services: listServicesMock,
        servicesStateView: ServicesStateView.SERVICES
      }
    })

    expect(wrapper.find('div.card-title').text()).toBe('Handmade Granite Bacon')
    expect(wrapper.find('div.card-body').text()).toBe('We need to connect the digital SMS matrix!Assimilated radical policy')
  })

  it('check render empty state', () => {
    const wrapper = mount(Services, {
      propsData: {
        services: [],
        servicesStateView: ServicesStateView.EMPTY
      }
    })

    expect(wrapper.find('div.k-empty-state-title-header').text()).toBe('No results')
  })

  it('check render error state', () => {
    const wrapper = mount(Services, {
      propsData: {
        services: [],
        servicesStateView: ServicesStateView.ERROR
      }
    })

    expect(wrapper.find('div.k-empty-state-title-header').text()).toBe('Something went wrong')
  })
})
