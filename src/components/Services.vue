<template>
  <section class="services">
    <div
      v-if="servicesStateView === viewState.SERVICES"
      class="catalog"
    >
      <KCard
        v-for="service in services"
        :key="service.id"
        class="card"
      >
        <template slot="title">
          <div class="card-title">
            {{ service.name }}
          </div>
        </template>

        <template slot="body">
          <p class="card-body">
            {{ service.description }}
          </p>

          <div class="card-footer">
            <div class="card-footer-badge">
              {{ service.versions.length }}
            </div>

            <b class="bold">Versions</b>
          </div>
        </template>
      </KCard>
    </div>

    <template
      v-else-if="servicesStateView === viewState.LOADING"
    >
      <KSkeleton
        type="card"
        :card-count="6"
      />
    </template>

    <template
      v-else-if="servicesStateView === viewState.EMPTY"
    >
      <KEmptyState
        cta-is-hidden
        data-cy="EmptyState">
        <template #title>
          No results
        </template>

        <template #message>
          There is no server list, please enter a different phrase or add a new server 😉️
        </template>
      </KEmptyState>
    </template>

    <template
      v-else-if="servicesStateView === viewState.ERROR"
    >
      <KEmptyState
        cta-is-hidden
        data-cy="ErrorState"
      >
        <template #title>
          Something went wrong
        </template>
        <template #message>
          Please try again later 😢
        </template>
      </KEmptyState>
    </template>
  </section>
</template>

<script lang="ts">
import { ServicesStateView, Service } from '@/shared/interfaces/catalog.interfaces';
import KCard from '@kongponents/kcard';
import KEmptyState from '@kongponents/kemptystate';
import { KSkeleton } from '@kongponents/kskeleton';
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'Services',
  components: {
    KCard,
    KEmptyState,
    KSkeleton
  },
  props: {
    services: {
      type: Array as PropType<Service[]>,
      default: []
    },
    servicesStateView: {
      type: String as PropType<ServicesStateView>,
      default: ServicesStateView.EMPTY
    }
  },
  data () {
    return {
      viewState: ServicesStateView
    };
  }
});
</script>

<style lang="scss">
@import '../assets/skeleton';

.services {
  margin-top: 2rem;
}

.catalog {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: left;
  column-gap: 2rem;
  row-gap: 2rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .k-card-title {
    width: 100%;
  }

  .card {
    padding: 2rem 1rem;
    min-width: 0;
    min-height: 0;
    border-radius: var(--border-radius-type-4);

    &:hover {
      border: 1px solid var(--primary-color-hover);
      cursor: pointer;
    }

    &-title {
      font-size: var(--font-heading-4);
      font-weight: bold;
      color: var(--primary-color);
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    &-body {
      font-size: var(--font-paragraph);
      color: rgba(0, 0, 0, 0.45);
      line-height: 1.2rem;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      word-wrap: break-word;
      text-overflow: ellipsis;
      height: 80px;
    }

    &-footer {
      margin-top: 1rem;
      font-size: var(--font-span);

      &-badge {
        font-weight: bold;
        line-height: 1;
        color: var(--primary-color);
        display: inline-block;
        border-radius: 40px;
        border: 1px solid var(--secondary-color);
        padding: 0.2rem 0.7rem;
        margin-right: 0.5rem;
      }
    }

    .bold {
      font-weight: 500;
    }
  }
}
</style>
