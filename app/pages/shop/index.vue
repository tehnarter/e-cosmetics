<script setup lang="ts">
import { useProductsStore } from "~~/stores/products"
const store = useProductsStore()

// Це масив який ти раніше збирав вручну
const products = computed(() => [
  ...store.relatedProducts.slice(1, 4),
  ...store.newArrivals.slice(1, 4),
  ...store.topSelling.slice(1, 4),
])
</script>

<template>
  <main class="shop-page">
    <div class="shop-container">
      <hr class="shop-divider" />
      <AppBreadcrumb
        :items="[
          { label: 'Головна', to: '/' },
          { label: 'Магазин', active: true },
        ]"
      />
      <div class="shop-layout">
        <!-- SIDEBAR -->
        <aside class="shop-sidebar">
          <div class="sidebar-header">
            <span class="sidebar-title">Фільтри</span>
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="sidebar-icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
          </div>
          <Filters />
        </aside>

        <!-- CONTENT -->
        <section class="shop-content">
          <!-- HEADER -->
          <div class="content-header">
            <div class="content-title-row">
              <h1 class="content-title">Популярні</h1>
            </div>

            <div class="content-sort-row">
              <span class="sort-info"> Показано 1-10 зі 100 товарів</span>

              <div class="sort-row">Сортувати за:</div>
            </div>
          </div>

          <!-- PRODUCTS -->
          <div class="products-grid">
            <ProductCard
              v-for="product in products"
              :key="product.id"
              :data="product"
            />
          </div>

          <hr class="shop-divider" />
        </section>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.shop-page {
  padding-bottom: 80px;
}

/* container */
.shop-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
}

/* divider */
.shop-divider {
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin: 24px 0;
}

/* layout */
.shop-layout {
  display: flex;
  align-items: flex-start;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

/* sidebar */
.shop-sidebar {
  display: none;

  @media (min-width: 768px) {
    display: block;
    min-width: 295px;
    max-width: 295px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 24px;
  }
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar-title {
  font-size: 20px;
  font-weight: 700;
}

.sidebar-icon {
  width: 24px;
  height: 24px;
  opacity: 0.4;
}

/* content */
.shop-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* header */
.content-header {
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
}

.content-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content-title {
  font-size: 32px;
  font-weight: 700;
}

/* sort */
.content-sort-row {
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
}

.sort-info {
  margin-right: 12px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);

  @media (min-width: 768px) {
    font-size: 16px;
  }
}

.sort-row {
  display: flex;
  align-items: center;
  gap: 4px;
}

.sort-select {
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 6px;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (min-width: 640px) {
    font-size: 16px;
  }
}

.sort-icon {
  margin-left: 8px;
  width: 16px;
  height: 16px;
}

/* products grid */
.products-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* pagination */
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
