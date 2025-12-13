<!-- components/ui/breadcrumb/BreadcrumbPage.vue -->
<script setup lang="ts"></script>

<template>
  <span class="breadcrumb__page">
    <slot />
  </span>
</template>

<style scoped lang="scss">
.breadcrumb__page {
  text-decoration: none;
  font-size: 15px;

  color: #000;
}
</style>
