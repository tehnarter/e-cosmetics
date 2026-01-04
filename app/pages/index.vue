<script setup lang="ts">
import { useProductsStore } from "~~/stores/products"
import { useReviewsStore } from "~~/stores/reviews"

const products = useProductsStore()
const reviewsStore = useReviewsStore()

const newArrivalsData = computed(() => products.newArrivals)
const topSellingData = computed(() => products.topSelling)
const reviews = computed(() => reviewsStore.reviews)
</script>

<template>
  <HomeTop />
  <HomeBrands />
  <ProductList
    title="НОВІ НАДХОДЖЕННЯ"
    :data="newArrivalsData"
    view-all-link="/shop#new-arrivals"
  />
  <ProductList
    title="ХІТ ПРОДАЖІВ"
    :data="topSellingData"
    view-all-link="/shop#new-arrivals"
  />
  <HomeDressStyle />

  <HomeReviews :data="reviews" />
</template>

<style lang="scss" scoped></style>
