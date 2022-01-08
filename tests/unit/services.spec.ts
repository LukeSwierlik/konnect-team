import { mount } from '@vue/test-utils'
import { ServicesStateView } from '@/shared/interfaces/catalog.interfaces';
import { expect } from 'chai'
import Services from '@/components/Services.vue'
import { listServicesMock } from '@/store/Services/__mocks__/listServices.mock'

describe('Services.vue', () => {
  it('check render list', () => {
    const wrapper = mount(Services, {
      propsData: {
        services: listServicesMock,
        servicesStateView: ServicesStateView.SERVICES,
      }
    })

    console.log(wrapper.html())

    expect(wrapper.find("div.card-title").text()).to.include("Handmade Granite Bacon")
    expect(wrapper.find("div.card-body").text()).to.include("We need to connect the digital SMS matrix!Assimilated radical policy")
  });

  it('check render empty state', () => {
    const wrapper = mount(Services, {
      propsData: {
        services: [],
        servicesStateView: ServicesStateView.EMPTY,
      }
    })

    console.log(wrapper.html())

    expect(wrapper.find("div.k-empty-state-title-header").text()).to.include("No results")
  });

  it('check render error state', () => {
    const wrapper = mount(Services, {
      propsData: {
        services: [],
        servicesStateView: ServicesStateView.ERROR,
      }
    })

    console.log(wrapper.html())

    expect(wrapper.find("div.k-empty-state-title-header").text()).to.include("Something went wrong")
  });
})
