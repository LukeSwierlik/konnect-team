import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/views/Home.vue'
import { listServicesMock } from '@/store/Services/__mocks__/listServices.mock'
import { ServicesStateView } from '@/shared/interfaces/catalog.interfaces'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Home.vue', () => {
  let actions
  let store
  let getters
  let ServicesModule

  beforeEach(() => {
    actions = {
      fetchServicesActions: jest.fn(),
      nextPageAction: jest.fn(),
      previousPageAction: jest.fn(),
      resetPaginationAction: jest.fn(),
      setStatus: jest.fn(),
    }

    getters = {
      getServices: () => listServicesMock,
      getServicesStateView: () => ServicesStateView.SERVICES,
      getFilterServices: () => (value: string) => !value ? listServicesMock : [],
      getPaginationDirections: () => () => '1 - 12 of 62',
      getCurrentPage: () => 1,
      getIsFirstPage: () => true,
      getIsLastPage: () => () => false,
      getListServices: () => (listServices: any) => listServicesMock,
    }

    ServicesModule = {
      namespaced: true,
      state: {},
      actions,
      getters,
    }

    store = new Vuex.Store({
      modules: {
        ServicesModule
      },
    })
  })

  it('dispatches fetchServicesActions', () => {
    shallowMount(Home, { store, localVue });
    expect(actions.fetchServicesActions).toHaveBeenCalled()
  })

  it('dispatches nextPageAction', async () => {
    const wrapper = shallowMount(Home, { store, localVue });

    (wrapper.vm as any).nextPage();
    expect(actions.nextPageAction).toHaveBeenCalled()
  })

  it('dispatches previousPageAction', () => {
    const wrapper = shallowMount(Home, { store, localVue });
    (wrapper.vm as any).previousPageAction();
    expect(actions.previousPageAction).toHaveBeenCalled()
  })

  it('dispatches searchServices -> when listServices is full', () => {
    const wrapper = shallowMount(Home, { store, localVue });
    (wrapper.vm as any).searchServices();
    expect(actions.setStatus).toHaveBeenCalledWith(expect.any(Object), ServicesStateView.SERVICES);
    expect(actions.resetPaginationAction).toHaveBeenCalled();
  })

  it('dispatches searchServices -> when listServices is empty', () => {
    const wrapper = shallowMount(Home, { store, localVue });
    (wrapper.vm as any).searchServices('asdasdasd');
    expect(actions.setStatus).toHaveBeenCalledWith(expect.any(Object), ServicesStateView.EMPTY);
    expect(actions.resetPaginationAction).toHaveBeenCalled();
  })
})
