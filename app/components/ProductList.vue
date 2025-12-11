<script setup lang="ts">
interface Product {
  id: number
  title: string
  price: number
  rating: number
  srcUrl: string
  discount: {
    percentage: number
    amount: number
  }
}

const props = defineProps<{
  title: string
  data: Product[]
  viewAllLink?: string
}>()
</script>

<template>
  <section class="product-list">
    <h2 class="product-title">{{ title }}</h2>

    <UiCarousel :options="{ loop: true }">
      <UiCarouselContainer>
        <UiCarouselSlide v-for="item in data" :key="item.id">
          <ProductCard :data="item" />
        </UiCarouselSlide>
      </UiCarouselContainer>
    </UiCarousel>

    <NuxtLink v-if="viewAllLink" :to="viewAllLink" class="view-all-btn">
      Переглянути все
    </NuxtLink>
  </section>
</template>

<style scoped lang="scss">
.product-list {
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
  padding: 0 16px;

  .product-title {
    font-size: 32px;
    margin-bottom: 28px;

    @media (min-width: 768px) {
      font-size: 48px;
      margin-bottom: 48px;
    }
  }
}

/* EMBLA */
.embla {
  width: 100%;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 36px;
  }
}

.embla__viewport {
  overflow: hidden;
}

.embla__container {
  display: flex;
  gap: 16px;

  @media (min-width: 640px) {
    gap: 20px;
  }
}

.embla__slide {
  flex: 0 0 auto;
  width: 198px;

  @media (min-width: 640px) {
    width: 295px;
  }
}

/* VIEW ALL BUTTON */
.view-all-btn {
  display: inline-block;
  padding: 14px 42px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 9999px;
  font-size: 15px;
  font-weight: 500;
  transition: 0.25s ease;

  &:hover {
    background: black;
    color: white;
  }
}
</style>
