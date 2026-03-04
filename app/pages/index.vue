<script setup lang="ts">
import { useProductsStore } from "~~/stores/products"
import { useReviewsStore } from "~~/stores/reviews"
const { t } = useI18n()
const products = useProductsStore()
const reviewsStore = useReviewsStore()

const newArrivalsData = computed(() => products.newArrivals)
const topSellingData = computed(() => products.topSelling)
const reviews = computed(() => reviewsStore.reviews)
</script>

<template>
  <main class="page-home">
    <HomeTop />
    <HomeBrands />
    <ProductList
      :title="t('productList.titleOne')"
      :data="newArrivalsData"
      view-all-link="/shop#new-arrivals"
    />
    <ProductList
      :title="t('productList.titleTwo')"
      :data="topSellingData"
      view-all-link="/shop#new-arrivals"
    />
    <HomeDressStyle />

    <HomeReviews :data="reviews" />
  </main>
</template>

<style lang="scss" scoped></style>
