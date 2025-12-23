<script setup lang="ts">
const props = defineProps<{
  href?: string
  isActive?: boolean
}>()
</script>

<template>
  <NuxtLink
    :to="props.href || '#'"
    class="pagination-link"
    :class="{ active: props.isActive }"
  >
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss">
.pagination-link {
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 36px;
  height: 36px;
  padding: 0 8px;

  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);

  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #000;
  }

  &.active {
    color: #000;
    pointer-events: none;
  }
}
</style>
