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
    <div class="shop__container">
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
              <FiltersMobile />
            </div>

            <div class="content-sort-row">
              <span class="sort-info"> Показано 1-10 зі 100 товарів </span>

              <div class="sort-row">
                Сортувати за:
                <UiSelect defaultValue="Найпопулярніші">
                  <UiSelectTrigger class="sort-select">
                    <UiSelectValue />
                    <svg
                      class="sort-icon"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                        fill="currentColor"
                      />
                    </svg>
                  </UiSelectTrigger>
                  <UiSelectContent class="sort-content">
                    <UiSelectItem value="Найпопулярніші"
                      >Найпопулярніші</UiSelectItem
                    >
                    <UiSelectItem value="Найнижча ціна"
                      >Найнижча ціна</UiSelectItem
                    >
                    <UiSelectItem value="Найвища ціна"
                      >Найвища ціна</UiSelectItem
                    >
                  </UiSelectContent>
                </UiSelect>
              </div>
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
          <!-- PAGINATION -->
          <UiPagination class="pagination">
            <UiPaginationPrevious>← Назад</UiPaginationPrevious>

            <UiPaginationContent>
              <UiPaginationItem>
                <UiPaginationLink isActive>1</UiPaginationLink>
              </UiPaginationItem>

              <UiPaginationItem>
                <UiPaginationLink>2</UiPaginationLink>
              </UiPaginationItem>

              <UiPaginationItem class="hidden lg">
                <UiPaginationLink>3</UiPaginationLink>
              </UiPaginationItem>

              <UiPaginationItem>
                <UiPaginationEllipsis />
              </UiPaginationItem>

              <UiPaginationItem>
                <UiPaginationLink>10</UiPaginationLink>
              </UiPaginationItem>
            </UiPaginationContent>

            <UiPaginationNext> Вперед → </UiPaginationNext>
          </UiPagination>
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
.sort-content {
  background: var(--sort-background);
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
