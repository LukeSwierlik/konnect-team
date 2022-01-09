import { MutationTypes } from '@/store/Services/services.mutations'
import { servicesActions } from '@/store/Services/services.actions'
import axios from 'axios'
import { listServicesMock } from '@/store/Services/__mocks__/listServices.mock'
import { ServicesStateView } from '@/shared/interfaces/catalog.interfaces'

describe('servicesActions', () => {
  it('fetchServicesActions', async () => {
    const commit = jest.fn()

    jest
      .spyOn(axios, 'get')
      .mockImplementation(() =>
        Promise.resolve({
          data: listServicesMock
        })
      )

    await servicesActions.fetchServicesActions({ commit })

    expect(commit).toHaveBeenCalledWith(
      MutationTypes.LOADED_SERVICES)
    expect(commit).toHaveBeenCalledWith(
      MutationTypes.LOADED_SERVICES_SUCCESS, listServicesMock)
  });

  it('setStatus', async () => {
    const commit = jest.fn()
    const status = ServicesStateView.EMPTY;

    await servicesActions.setStatus({ commit }, status)

    expect(commit).toHaveBeenCalledWith(
      MutationTypes.SET_STATUS, status)
  });

  it('nextPageAction', async () => {
    const commit = jest.fn()
    const servicesLength = 62;

    await servicesActions.nextPageAction({ commit }, servicesLength)

    expect(commit).toHaveBeenCalledWith(
      MutationTypes.NEXT_PAGE, servicesLength)
  });

  it('previousPageAction', async () => {
    const commit = jest.fn()

    await servicesActions.previousPageAction({ commit })

    expect(commit).toHaveBeenCalledWith(
      MutationTypes.PREVIOUS_PAGE)
  });

  it('resetPaginationAction', async () => {
    const commit = jest.fn()

    await servicesActions.resetPaginationAction({ commit })

    expect(commit).toHaveBeenCalledWith(
      MutationTypes.RESET_PAGINATION)
  });
})
