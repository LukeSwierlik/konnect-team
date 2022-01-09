import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import Pagination from '@/components/Pagination.vue'

describe('Pagination.vue', () => {
  it('check render component', () => {
    const wrapper = mount(Pagination, {
      propsData: {
        isFirstPage: false,
        isLastPage: true,
        pagingDirections: "1 of 12",
        page: 1,
        servicesLength: 62,
      }
    })

    console.log(wrapper.html())

    expect(wrapper.find("div.directions").text()).to.include("1 of 12")
  });

  it('check click next', () => {
    const wrapper = mount(Pagination, {
      propsData: {
        isFirstPage: false,
        isLastPage: true,
        pagingDirections: "1 of 12",
        page: 1,
        servicesLength: 62,
      }
    })

    console.log(wrapper.html())

    wrapper.find('button.arrow.next').trigger('click');

    console.log(wrapper.emitted())

    expect(wrapper.find("div.directions").text()).to.include("1 of 12")
  });
})
