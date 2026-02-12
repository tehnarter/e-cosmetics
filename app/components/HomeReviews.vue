<script setup lang="ts">
defineProps<{
  data: any[]
}>()
</script>

<template>
  <section class="reviews">
    <div class="reviews__container">
      <UiCarousel :options="{ loop: true }">
        <template #controls="{ next, prev }">
          <div class="reviews__header">
            <h2 class="reviews__title">Відгуки наших покупців</h2>
            <div class="reviews__controls">
              <button class="reviews__btn" @click="prev">‹</button>
              <button class="reviews__btn" @click="next">›</button>
            </div>
          </div>
        </template>
        <UiCarouselContainer>
          <UiCarouselSlide v-for="item in data" :key="item.id">
            <ReviewCard :data="item" />
          </UiCarouselSlide>
        </UiCarouselContainer>

        <template #pagination="{ current, total }">
          <div class="reviews__pagination">{{ current }} / {{ total }}</div>
        </template>
      </UiCarousel>
    </div>
  </section>
</template>

<style scoped lang="scss">
.reviews {
  width: 100%;
  overflow: hidden;
  padding: 24px 0;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    @media (min-width: 768px) {
      margin-bottom: 32px;
    }
  }

  &__title {
    font-size: 28px;
    font-weight: 600;

    @media (min-width: 768px) {
      font-size: 38px;
    }
  }

  &__controls {
    display: flex;
    gap: 8px;
  }

  &__btn {
    cursor: pointer;
    padding: 6px 14px;
    border: 1px solid #d2d2d2;
    border-radius: 6px;
    font-size: 22px;

    &:hover {
      background: var(--hover-color);
    }

    &:active {
      transform: scale(0.94);
    }
  }

  &__pagination {
    margin-top: 16px;
    text-align: center;
    font-size: 14px;
    opacity: 0.6;
  }
}
</style>
