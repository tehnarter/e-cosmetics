<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>

<template>
  <NuxtLink :to="href" class="nav-link">
    <slot />
  </NuxtLink>
</template>

<style scoped>
.nav-link {
  display: block;
  padding: 12px;
  border-radius: 6px;
  text-decoration: none;
  color: #000;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background: #f5f5f5;
}
</style>
