<!-- components/ui/breadcrumb/BreadcrumbList.vue -->
<script setup lang="ts"></script>

<template>
  <ul class="breadcrumb__list">
    <slot />
  </ul>
</template>

<style scoped lang="scss">
.breadcrumb__list {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 8px;
}
</style>
