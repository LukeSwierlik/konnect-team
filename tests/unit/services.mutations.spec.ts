import { catalogMutations, MutationTypes } from '@/store/Services/services.mutations'
import { ServicesState, ServicesStateView } from '@/shared/interfaces/catalog.interfaces'

describe('mutations', () => {
  let servicesState: ServicesState

  beforeEach(() => {
    servicesState = {
      servicesStateView: ServicesStateView.EMPTY,
      services: [],
      pagination: {
        currentPage: 1,
        from: 0,
        to: 12,
        itemCount: 12
      }
    }
  })

  it('should set servicesStateView on LOADING', () => {
    catalogMutations[MutationTypes.LOADED_SERVICES](servicesState)

    expect(servicesState.servicesStateView).toEqual(ServicesStateView.LOADING)
  })

  it('should set servicesStateView on SERVICES and set services', () => {
    catalogMutations[MutationTypes.LOADED_SERVICES_SUCCESS](servicesState, [{
      id: 'bdfb82d0-f082-40c6-bcfb-f0ab704969a5',
      name: 'Handmade Granite Bacon',
      description: 'We need to connect the digital SMS matrix!Assimilated radical policy',
      versions: [
        {
          id: '5bc8b151-c4d9-4c4e-91d4-b230a54a2c22',
          name: 'Electronics',
          description: 'violet archive'
        }
      ]
    },
    {
      id: '148c8f84-94bc-4129-accf-25bfe0324ca9',
      name: 'Handmade Concrete Cheese',
      description: 'Try to reboot the ADP hard drive, maybe it will quantify the redundant microchip!Synergistic 5th generation moratorium',
      versions: [
        {
          id: 'd61e358e-a88c-461f-b989-3b8257f98754',
          name: 'Tools',
          description: 'connecting SQL'
        }
      ]
    }])

    expect(servicesState.servicesStateView).toEqual(ServicesStateView.SERVICES)
    expect(servicesState.services.length).toEqual(2)
  })

  it('should set servicesStateView on EMPTY and set services', () => {
    catalogMutations[MutationTypes.LOADED_SERVICES_SUCCESS](servicesState, [])

    expect(servicesState.servicesStateView).toEqual(ServicesStateView.EMPTY)
    expect(servicesState.services.length).toEqual(0)
  })

  it('should set servicesStateView on LOADING', () => {
    catalogMutations[MutationTypes.SET_STATUS](servicesState, ServicesStateView.ERROR)

    expect(servicesState.servicesStateView).toEqual(ServicesStateView.ERROR)
  })

  it('[MutationTypes.NEXT_PAGE]', () => {
    catalogMutations[MutationTypes.NEXT_PAGE](servicesState, 62)

    expect(servicesState.pagination.currentPage).toEqual(2)
    expect(servicesState.pagination.from).toEqual(12)
    expect(servicesState.pagination.to).toEqual(24)
  })

  it('[MutationTypes.PREVIOUS_PAGE]', () => {
    const newServicesState = {
      ...servicesState,
      pagination: {
        ...servicesState.pagination,
        currentPage: 2,
        from: 12,
        to: 24
      }
    }

    catalogMutations[MutationTypes.PREVIOUS_PAGE](newServicesState)

    expect(servicesState.pagination.currentPage).toEqual(1)
    expect(servicesState.pagination.from).toEqual(0)
    expect(servicesState.pagination.to).toEqual(12)
  })

  it('RESET_PAGINATION', () => {
    const newServicesState = {
      ...servicesState,
      pagination: {
        ...servicesState.pagination,
        currentPage: 4,
        from: 36,
        to: 48
      }
    }

    catalogMutations[MutationTypes.PREVIOUS_PAGE](newServicesState)

    expect(servicesState.pagination.currentPage).toEqual(1)
    expect(servicesState.pagination.from).toEqual(0)
    expect(servicesState.pagination.to).toEqual(12)
  })
})
