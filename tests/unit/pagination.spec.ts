import { mount } from '@vue/test-utils'
import Pagination from '@/components/Pagination.vue'

describe('Pagination.vue', () => {
  it('check render component', () => {
    const wrapper = mount(Pagination, {
      propsData: {
        isFirstPage: false,
        isLastPage: true,
        pagingDirections: '1 of 12',
        page: 1,
        servicesLength: 62
      }
    })

    expect(wrapper.find('div.directions').text()).toBe('1 of 12')
  })

  it('check click next', async () => {
    const wrapper = mount(Pagination, {
      propsData: {
        isFirstPage: true,
        isLastPage: false,
        pagingDirections: '1 of 12',
        page: 1,
        servicesLength: 62
      }
    });

    await wrapper.find('button.arrow.next').trigger('click')

    expect(wrapper.emitted()?.nextPage).toBeTruthy();
  })

  it('check click previous', async () => {
    const wrapper = mount(Pagination, {
      propsData: {
        isFirstPage: true,
        isLastPage: true,
        pagingDirections: '1 of 12',
        page: 1,
        servicesLength: 62
      }
    });

    await wrapper.find('button.arrow.previous').trigger('click')

    expect(wrapper.emitted()?.previousPage).toBeFalsy();
  })
})
