<script setup lang="ts">
defineProps<{
  title: string
  href: string
  description: string
}>()
</script>

<template>
  <li class="list-item">
    <NavigationMenuLink :href="href">
      <div class="title">{{ title }}</div>
      <p class="desc">{{ description }}</p>
    </NavigationMenuLink>
  </li>
</template>

<style scoped>
.list-item {
  list-style: none;
}

.title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
}

.desc {
  font-size: 13px;
  opacity: 0.7;
}
</style>
