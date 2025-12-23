<script setup lang="ts">
defineProps<{ class?: string }>()
</script>

<template>
  <li class="pagination-item" :class="$props.class">
    <slot />
  </li>
</template>

<style scoped lang="scss">
.pagination-item {
  display: flex;
}
</style>
