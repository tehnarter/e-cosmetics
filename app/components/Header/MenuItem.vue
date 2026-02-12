<script setup lang="ts">
defineProps<{
  label: string
  url?: string
}>()
</script>

<template>
  <li class="menu-item">
    <NuxtLink :to="url || '/'" class="menu-item__link">
      {{ label }}
    </NuxtLink>
  </li>
</template>

<style scoped lang="scss">
.menu-item {
  list-style: none;

  &__link {
    display: block;
    padding: 8px 12px;
    font-weight: 400;
    text-decoration: none;
    // color: #000;
    transition: 0.2s ease;

    &:hover {
      color: #555;
    }
  }
}
</style>
