<script setup lang="ts">
defineProps<{ href?: string }>()
</script>

<template>
  <NuxtLink :to="href || '#'" class="pagination-nav"> <slot /> </NuxtLink>
</template>

<style scoped lang="scss">
.pagination-nav {
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 12px;

  font-size: 0.875rem;
  font-weight: 500;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-decoration: none;
  color: #000;

  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }
}
</style>
