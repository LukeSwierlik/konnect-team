import { ServicesState, ServicesStateView } from '@/shared/interfaces/catalog.interfaces'

export const servicesState: ServicesState = {
  servicesStateView: ServicesStateView.EMPTY,
  services: [],
  pagination: {
    currentPage: 1,
    from: 0,
    to: 12,
    itemCount: 12
  }
}
