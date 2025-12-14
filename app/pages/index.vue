<script setup lang="ts">
import { useProductsStore } from "~~/stores/products"

const products = useProductsStore()

const newArrivalsData = computed(() => products.newArrivals)
const topSellingData = computed(() => products.topSelling)
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
</template>

<style lang="scss" scoped></style>
