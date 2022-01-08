import { expect } from 'chai'
import { servicesGetters } from '@/store/Services/services.getters'
import { ServicesState, ServicesStateView } from '@/shared/interfaces/catalog.interfaces'
import { listServicesMock } from '@/store/Services/__mocks__/listServices.mock'

describe('servicesGetters', () => {
  it('filteredProducts', () => {

    const state: ServicesState = {
      services: listServicesMock,
      servicesStateView: ServicesStateView.SERVICES,
      pagination: {
        from: 0,
        to: 1,
        currentPage: 1,
        itemCount: 12
      }
    }

    const result = servicesGetters.getServices(state)

    expect(result).to.deep.equal(state.services)
  })
})
