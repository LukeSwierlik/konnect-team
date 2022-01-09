import { servicesGetters } from '@/store/Services/services.getters'
import { ServicesState, ServicesStateView } from '@/shared/interfaces/catalog.interfaces'
import { listServicesMock } from '@/store/Services/__mocks__/listServices.mock'

describe('servicesGetters', () => {
  it('filteredProducts', () => {
    const state: ServicesState = {
      services: listServicesMock,
      servicesStateView: ServicesStateView.SERVICES,
      pagination: {
        currentPage: 1,
        from: 0,
        to: 12,
        itemCount: 12
      }
    }

    const result = servicesGetters.getServices(state)

    expect(result).toEqual(state.services)
  })

  it('getServicesStateView', () => {
    const state: ServicesState = {
      services: listServicesMock,
      servicesStateView: ServicesStateView.SERVICES,
      pagination: {
        currentPage: 1,
        from: 0,
        to: 12,
        itemCount: 12
      }
    }

    const result = servicesGetters.getServicesStateView(state)

    expect(result).toEqual(state.servicesStateView)
  })

  it('getFilterServices -> when user bad phrase, should return 0 services', () => {
    const state: ServicesState = {
      services: listServicesMock,
      servicesStateView: ServicesStateView.SERVICES,
      pagination: {
        currentPage: 1,
        from: 0,
        to: 12,
        itemCount: 12
      }
    }

    const result = servicesGetters.getFilterServices(state)('hal')

    expect(result.length).toBe(0);
  })

  it('getFilterServices -> when user good phrase, should return 6 services', () => {
    const state: ServicesState = {
      services: listServicesMock,
      servicesStateView: ServicesStateView.SERVICES,
      pagination: {
        currentPage: 1,
        from: 0,
        to: 12,
        itemCount: 12
      }
    }

    const result = servicesGetters.getFilterServices(state)('ergonomic')
    expect(result.length).toBe(6);
  })

  it('getPaginationDirections', () => {
    const state: ServicesState = {
      services: listServicesMock,
      servicesStateView: ServicesStateView.SERVICES,
      pagination: {
        currentPage: 1,
        from: 0,
        to: 12,
        itemCount: 12
      }
    }

    const result = servicesGetters.getPaginationDirections(state)(62)
    expect(result).toBe('1 - 12 of 62');
  })

  it('getCurrentPage', () => {
    const state: ServicesState = {
      services: listServicesMock,
      servicesStateView: ServicesStateView.SERVICES,
      pagination: {
        currentPage: 1,
        from: 0,
        to: 12,
        itemCount: 12
      }
    }

    const result = servicesGetters.getCurrentPage(state)
    expect(result).toBe(1);
  })

  it('getIsFirstPage', () => {
    const state: ServicesState = {
      services: listServicesMock,
      servicesStateView: ServicesStateView.SERVICES,
      pagination: {
        currentPage: 1,
        from: 0,
        to: 12,
        itemCount: 12
      }
    }

    const result = servicesGetters.getIsFirstPage(state)
    expect(result).toBe(true);
  })

  it('getIsLastPage', () => {
    const state: ServicesState = {
      services: listServicesMock,
      servicesStateView: ServicesStateView.SERVICES,
      pagination: {
        currentPage: 1,
        from: 0,
        to: 12,
        itemCount: 12
      }
    }

    const result = servicesGetters.getIsLastPage(state)(listServicesMock)
    expect(result).toBe(false);
  })

  it('getListServices', () => {
    const state: ServicesState = {
      services: listServicesMock,
      servicesStateView: ServicesStateView.SERVICES,
      pagination: {
        currentPage: 1,
        from: 0,
        to: 12,
        itemCount: 12
      }
    }

    const result = servicesGetters.getListServices(state)(listServicesMock)
    expect(result.length).toBe(12);
  })
})
