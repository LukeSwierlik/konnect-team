import { servicesActions } from '@/store/Services/services.actions';
import { servicesGetters } from '@/store/Services/services.getters';
import { catalogMutations } from '@/store/Services/services.mutations';
import { servicesState } from '@/store/Services/services.state';

export const ServicesModule = {
  namespaced: true,
  state: servicesState,
  getters: servicesGetters,
  mutations: catalogMutations,
  actions: servicesActions
};
