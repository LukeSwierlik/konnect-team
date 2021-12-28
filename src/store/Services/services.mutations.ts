import { ServicesState, ServicesStateView, Service } from '@/shared/interfaces/catalog.interfaces';
import Vue from 'vue';
import { MutationTree } from 'vuex';

export enum MutationTypes {
  LOADED_SERVICES = '[Services] Loaded Services',
  LOADED_SERVICES_SUCCESS = '[Services] Loaded Services Success',
  LOADED_SERVICES_FAILURE = '[Services] Loaded Services Failure',
  SET_STATUS = '[Services] Set Status',
  NEXT_PAGE = '[Services] Next Page',
  PREVIOUS_PAGE = '[Services] Previous Page',
  RESET_PAGINATION = '[Services] Reset Pagination'
}

export type ServicesMutations<S = ServicesState> = {
  [MutationTypes.LOADED_SERVICES] (state: S): void,
  [MutationTypes.LOADED_SERVICES_SUCCESS](state: S, payload: Service[]): void,
  [MutationTypes.LOADED_SERVICES_FAILURE](state: S, error: Error): void,
  [MutationTypes.SET_STATUS](state: S, status: ServicesStateView): void,
  [MutationTypes.NEXT_PAGE](state: ServicesState, servicesLength: number): void,
  [MutationTypes.PREVIOUS_PAGE](state: ServicesState): void,
  [MutationTypes.RESET_PAGINATION](state: ServicesState): void,
}

export const catalogMutations: MutationTree<ServicesState> & ServicesMutations = {
  [MutationTypes.LOADED_SERVICES] (state: ServicesState): void {
    state.servicesStateView = ServicesStateView.LOADING;
  },
  [MutationTypes.LOADED_SERVICES_SUCCESS] (state: ServicesState, services: Service[]): void {
    if (services.length) {
      state.servicesStateView = ServicesStateView.SERVICES;
    } else {
      state.servicesStateView = ServicesStateView.EMPTY;
    }

    Vue.set(state, 'services', services);
  },
  [MutationTypes.LOADED_SERVICES_FAILURE] (state: ServicesState, error: Error): void {
    state.error = error;

    state.servicesStateView = ServicesStateView.ERROR;
  },
  [MutationTypes.SET_STATUS] (state: ServicesState, status: ServicesStateView): void {
    state.servicesStateView = status;
  },
  [MutationTypes.NEXT_PAGE] (state: ServicesState, servicesLength: number): void {
    const { itemCount, currentPage } = state.pagination;
    const isLastPage = itemCount * currentPage >= servicesLength;
    const incrementCurrentPage = state.pagination.currentPage += 1;

    if (!isLastPage) {
      state.pagination.currentPage = incrementCurrentPage;
      state.pagination.from = itemCount * (incrementCurrentPage - 1);
      state.pagination.to = itemCount * incrementCurrentPage;
    }
  },
  [MutationTypes.PREVIOUS_PAGE] (state: ServicesState): void {
    const { itemCount, currentPage} = state.pagination;
    const isFirstPage = currentPage === 1;
    const decrementCurrentPage = state.pagination.currentPage -= 1;

    if (!isFirstPage) {
      state.pagination.currentPage = decrementCurrentPage;
      state.pagination.from = itemCount * (decrementCurrentPage - 1);
      state.pagination.to = itemCount * decrementCurrentPage;
    }
  },
  [MutationTypes.RESET_PAGINATION] (state: ServicesState): void {
    state.pagination = {
      currentPage: 1,
      from: 0,
      to: 12,
      itemCount: 12
    };
  }
};
