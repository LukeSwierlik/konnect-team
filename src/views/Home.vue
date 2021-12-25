<template>
  <main class="container">
    <Hero
      :search-services="searchServices"
      :services-state-view="getServicesStateView"
    />
    <Services
      :services="displayedServices()"
      :services-state-view="getServicesStateView"
    />
    <Pagination
      :is-first-page="getIsFirstPage"
      :is-last-page="getIsLastPage(this.listServices)"
      :paging-directions="getPaginationDirections(listServices.length)"
      :page="getCurrentPage"
      :services-length="listServices.length"
      @nextPage="nextPage()"
      @previousPage="previousPage()"
    />
  </main>
</template>

<script lang="ts">

import Hero from '@/components/Hero.vue';
import Pagination from '@/components/Pagination.vue';
import {Service, ServicesStateView} from '@/shared/interfaces/catalog.interfaces';
import Vue from 'vue';
import {mapActions, mapGetters} from 'vuex';
import Services from '../components/Services.vue';

interface HomeData {
  listServices: Service[];
}

export default Vue.extend({
  name: 'Home',
  components: {
    Pagination,
    Hero,
    Services
  },
  data (): HomeData {
    return {
      listServices: []
    };
  },
  computed: {
    ...mapGetters('ServicesModule', [
      'getServices',
      'getServicesStateView',
      'getFilterServices',
      'getPaginationDirections',
      'getCurrentPage',
      'getIsFirstPage',
      'getIsLastPage',
      'getListServices'
    ])
  },
  watch: {
    getServices (services: Service[]) {
      this.listServices = services;
    }
  },
  mounted () {
    this.fetchServicesActions();
  },
  methods: {
    ...mapActions('ServicesModule', [
      'fetchServicesActions',
      'nextPageAction',
      'previousPageAction',
      'resetPaginationAction',
      'setStatus'
    ]),
    searchServices (value: string): void {
      this.listServices = this.getFilterServices(value);
      if (this.listServices.length) {
        this.setStatus(ServicesStateView.SERVICES);
      } else {
        this.setStatus(ServicesStateView.EMPTY);
      }

      this.resetPaginationAction();
    },
    displayedServices (): Service[] {
      return this.getListServices(this.listServices);
    },
    nextPage (): void {
      this.nextPageAction(this.listServices.length);
    },
    previousPage (): void {
      this.previousPageAction();
    }
  }
});
</script>

<style lang="scss">
.container {
    max-width: 1000px;
    margin: 0 auto;

    @media (max-width: 1000px) {
        padding: 2rem;
    }

    @media (max-width: 500px) {
        padding: 1rem;
    }
}
</style>
