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
    title="NEW ARRIVALS"
    :data="newArrivalsData"
    view-all-link="/shop#new-arrivals"
  />
  <ProductList
    title="NEW ARRIVALS"
    :data="topSellingData"
    view-all-link="/shop#new-arrivals"
  />
</template>

<style lang="scss" scoped></style>
