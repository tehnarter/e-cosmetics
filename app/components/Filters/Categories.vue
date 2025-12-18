<script setup lang="ts">
type Category = {
  title: string
  slug: string
}

const categoriesData: Category[] = [
  { title: "T-shirts", slug: "/shop?category=t-shirts" },
  { title: "Shorts", slug: "/shop?category=shorts" },
  { title: "Shirts", slug: "/shop?category=shirts" },
  { title: "Hoodie", slug: "/shop?category=hoodie" },
  { title: "Jeans", slug: "/shop?category=jeans" },
]
</script>

<template>
  <div class="categories">
    <NuxtLink
      v-for="(category, idx) in categoriesData"
      :key="idx"
      :to="category.slug"
      class="categories__item"
    >
      <span>{{ category.title }}</span>

      <svg class="categories__icon" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M9.29 6.71a1 1 0 0 0 0 1.41L13.17 12l-3.88 3.88a1 1 0 1 0 1.41 1.41l4.59-4.59a1 1 0 0 0 0-1.41L10.7 6.7a1 1 0 0 0-1.41 0"
        />
      </svg>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.categories {
  display: flex;
  flex-direction: column;
  gap: 2px;

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    color: rgba(0, 0, 0, 0.6);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #000;
    }
  }

  &__icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
}
</style>
