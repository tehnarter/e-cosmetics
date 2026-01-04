<script setup lang="ts">
import { useProductsStore } from "~~/stores/products"

const route = useRoute()
const productsStore = useProductsStore()

const productId = computed(() => Number(route.params.slug?.[0]))

const relatedProductData = computed(() => productsStore.relatedProducts)

const allProducts = computed(() => [
  ...productsStore.newArrivals,
  ...productsStore.topSelling,
  ...productsStore.relatedProducts,
])

const productData = computed(() =>
  allProducts.value.find((p) => p.id === productId.value)
)

watchEffect(() => {
  if (allProducts.value.length > 0 && !productData.value) {
    throw createError({
      statusCode: 404,
      statusMessage: "Product not found",
    })
  }
})
</script>

<template>
  <main class="product-page">
    <div class="product-page__container">
      <hr class="product-page__divider" />

      <AppBreadcrumb
        :items="[
          { label: 'Головна', to: '/' },
          { label: 'Магазин', to: '/shop' },
          { label: productData?.title ?? 'product', active: true },
        ]"
      />

      <section class="product-page__header">
        <!-- <Header :data="productData" /> -->
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
