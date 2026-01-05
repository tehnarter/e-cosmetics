<script setup lang="ts">
import { ref } from "vue"

type TabBtn = {
  id: number
  label: string
}

const tabBtnData: TabBtn[] = [
  { id: 1, label: "Опис продукту" },
  { id: 2, label: "Рейтинг  &  Відгуки" },
  { id: 3, label: "Поширені запитання" },
]

const active = ref<number>(1)
</script>

<template>
  <div class="tabs">
    <div class="tabs__header">
      <button
        v-for="tab in tabBtnData"
        :key="tab.id"
        type="button"
        class="tabs__btn"
        :class="{ 'tabs__btn--active': active === tab.id }"
        @click="active = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="tabs__content">
      <TabsProductDetailsContent v-if="active === 1" />
      <TabsReviewsContent v-else-if="active === 2" />
      <TabsFaqContent v-else />
    </div>
  </div>
</template>

<style scoped>
.tabs {
  width: 100%;
}

/* HEADER */
.tabs__header {
  display: flex;
  align-items: center;
  overflow-x: auto;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

/* BUTTON */
.tabs__btn {
  flex: 1;
  padding: 1.25rem 1.5rem;
  background: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  font-size: 0.95rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;
  white-space: nowrap;
}

.tabs__btn:hover {
  color: #000;
}

.tabs__btn--active {
  color: #000;
  font-weight: 500;
  border-bottom: 2px solid #000;
}

/* CONTENT */
.tabs__content {
  margin-bottom: 3rem;
}

/* RESPONSIVE */
@media (max-width: 640px) {
  .tabs__btn {
    padding: 1rem;
    font-size: 0.9rem;
  }
}
</style>
