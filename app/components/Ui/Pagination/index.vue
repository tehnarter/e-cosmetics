<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <nav class="pagination" :class="$props.class">
    <slot />
  </nav>
</template>

<style scoped lang="scss">
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
</style>
