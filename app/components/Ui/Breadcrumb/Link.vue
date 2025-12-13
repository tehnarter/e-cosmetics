<!-- components/ui/breadcrumb/BreadcrumbLink.vue -->
<script setup lang="ts">
const props = defineProps<{
  to: string
}>()
</script>

<template>
  <NuxtLink :to="props.to" class="breadcrumb__link">
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss">
.breadcrumb__link {
  color: #444;
  text-decoration: none;
  font-size: 15px;

  &:hover {
    color: #000;
  }
}
</style>
