<template>
  <section class="pagination">
    <button
      name="previous"
      class="arrow"
      data-cy="btnPreviousPage"
      :disabled="isFirstPage"
      @click="previousPage"
    >
      <img
        class="reversed"
        height="44px"
        width="44px"
        :src="
          isFirstPage
            ? images.greyArrow
            : images.activeArrow
        "
      >
    </button>

    <div class="directions" data-cy="directions">
      {{ pagingDirections }}
    </div>

    <button
      class="arrow"
      name="next"
      data-cy="btnNextPage"
      :disabled="isLastPage"
      @click="nextPage"
    >
      <img
        height="44px"
        width="44px"
        :src="
          isLastPage
            ? images.greyArrow
            : images.activeArrow
        "
      >
    </button>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Pagination',
  props: {
    page: {
      type: Number,
      required: true,
      default: 1
    },
    servicesLength: {
      type: Number,
      required: true,
      default: 1
    },
    isFirstPage: {
      type: Boolean
    },
    pagingDirections: {
      type: String
    },
    isLastPage: {
      type: Boolean
    }
  },
  data () {
    return {
      images: {
        greyArrow: require('../assets/Grey-Arrow.svg'),
        activeArrow: require('../assets/Active-Arrow.svg')
      }
    };
  },
  methods: {
    nextPage () {
      this.$emit('nextPage');
    },
    previousPage () {
      this.$emit('previousPage');
    }
  }
});
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 3rem;

  .arrow {
    display: block;
    background: none;
    border: none;

    &:active {
      transform: translateY(1px);
      filter: saturate(150%);
      cursor: pointer;
    }

    &:hover {
      cursor: pointer;
    }

    &:disabled {
      cursor: default;
      pointer-events: none;
    }

    .reversed {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }
  }

  .directions {
    padding: 0 2rem;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.45);
    opacity: 0.7;
  }
}
</style>
