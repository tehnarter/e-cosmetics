<!-- components/ui/breadcrumb/BreadcrumbItem.vue -->
<script setup lang="ts"></script>

<template>
  <li class="breadcrumb__item">
    <slot />
  </li>
</template>

<style scoped lang="scss">
.breadcrumb__item {
  display: flex;
  align-items: center;
}
</style>
