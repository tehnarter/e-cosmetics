<script setup lang="ts">
import { useProductsStore } from "~~/stores/products"
import type { Product } from "~~/types/product.types"

const route = useRoute()
const productsStore = useProductsStore()

const productId = computed<number | null>(() => {
  const slug = route.params.slug
  const id = Array.isArray(slug) ? slug[0] : slug
  return id ? Number(id) : null
})

const allProducts = computed<Product[]>(() => [
  ...productsStore.newArrivals,
  ...productsStore.topSelling,
  ...productsStore.relatedProducts,
])

const productData = computed<Product | null>(() => {
  if (!productId.value) return null
  return allProducts.value.find((p) => p.id === productId.value) ?? null
})

if (process.client) {
  watch(
    () => allProducts.value.length,
    (len) => {
      if (len && !productData.value) {
        throw createError({
          statusCode: 404,
          statusMessage: "Product not found",
        })
      }
    },
    { immediate: true }
  )
}

const relatedProductData = computed(() => productsStore.relatedProducts)
</script>

<template>
  <main class="product-page">
    <div class="product-page__container">
      <hr class="product-page__divider" />

      <AppBreadcrumb
        :items="[
          { label: 'Головна', to: '/' },
          { label: 'Магазин', to: '/shop' },
          { label: productData?.title ?? 'Product', active: true },
        ]"
      />

      <section v-if="productData" class="product-page__header">
        <Product :data="productData" />
      </section>

      <Tabs />
    </div>

    <div class="product-page__related">
      <ProductList
        title="Вам також може сподобатися"
        :data="relatedProductData"
      />
    </div>
  </main>
</template>

<style scoped lang="scss">
.product-page {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;

  &__divider {
    height: 1px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 24px;
  }

  &__header {
    margin-bottom: 44px;
  }

  &__related {
    margin-bottom: 50px;

    @media (min-width: 640px) {
      margin-bottom: 80px;
    }
  }
}
</style>
