import { Service } from '@/shared/interfaces/catalog.interfaces';
import { API } from '@/shared/resources/services.resources';
import axios, { AxiosPromise } from 'axios';

export const fetchServices = (): AxiosPromise<Service[]> => axios.get(API.servicesPackages());
export const fetchServicesError = (): any => axios.get(API.servicesPackages() + '/2').then(() => new Error('error'));
