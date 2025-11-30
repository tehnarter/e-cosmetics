<script setup lang="ts">
interface MenuListItem {
  id: number
  label: string
  url?: string
  description?: string
}

defineProps<{
  data: MenuListItem[]
  label: string
}>()
</script>

<template>
  <UiNavigationMenuItem v-slot="{ isOpen, toggle }">
    <UiNavigationMenuTrigger :onToggle="toggle">
      {{ label }}
    </UiNavigationMenuTrigger>

    <UiNavigationMenuContent :isOpen="isOpen">
      <ul class="menu-grid">
        <ListItem
          v-for="item in data"
          :key="item.id"
          :title="item.label"
          :href="item.url || '/'"
          :description="item.description || ''"
        />
      </ul>
    </UiNavigationMenuContent>
  </UiNavigationMenuItem>
</template>

<style scoped>
.menu-grid {
  display: grid;
  width: 400px;
  gap: 12px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    width: 500px;
  }

  @media (min-width: 1024px) {
    width: 600px;
  }
}
</style>
