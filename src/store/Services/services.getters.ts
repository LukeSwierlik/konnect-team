import { ServicesState, ServicesStateView, Service } from '@/shared/interfaces/catalog.interfaces';

export const servicesGetters = {
  getServices ({ services }: ServicesState): Service[] {
    return services;
  },
  getServicesStateView ({ servicesStateView }: ServicesState): ServicesStateView {
    return servicesStateView;
  },
  getFilterServices: ({ services }: ServicesState) => (searchTerm?: string): Service[] => {
    if (!searchTerm) {
      return services;
    }

    return services.filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
  getPaginationDirections: (state: ServicesState) => (listServicesLength: number): string => {
    const { from, to } = state.pagination;

    return `${from + 1} - ${Math.min(
      to,
      listServicesLength
    )} of ${listServicesLength}`;
  },
  getCurrentPage ({ pagination }: ServicesState): number {
    return pagination.currentPage;
  },
  getIsFirstPage ({ pagination }: ServicesState): boolean {
    return pagination.currentPage === 1;
  },
  getIsLastPage: ({ pagination } : ServicesState) => (listServices: Service[]): boolean => {
    const { currentPage, itemCount } = pagination;

    return itemCount * currentPage >= listServices.length;
  },
  getListServices: (state: ServicesState) => (listServices: Service[]): Service[] => {
    const { from, to } = state.pagination;

    return listServices.slice(from, to);
  }
};
