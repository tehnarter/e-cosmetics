<script setup lang="ts">
const props = defineProps<{
  items: Array<{
    label: string
    to?: string
    active?: boolean
  }>
}>()
</script>

<template>
  <UiBreadcrumb class="breadcrumb-dynamic">
    <UiBreadcrumbList>
      <template v-for="(item, index) in props.items" :key="index">
        <UiBreadcrumbItem>
          <!-- Активний елемент -->
          <UiBreadcrumbPage v-if="item.active">
            {{ item.label }}
          </UiBreadcrumbPage>

          <!-- Неактивна лінка -->
          <UiBreadcrumbLink v-else>
            <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
          </UiBreadcrumbLink>
        </UiBreadcrumbItem>

        <UiBreadcrumbSeparator v-if="index < props.items.length - 1" />
      </template>
    </UiBreadcrumbList>
  </UiBreadcrumb>
</template>

<style scoped lang="scss">
.breadcrumb-dynamic {
  margin-bottom: 1.25rem;

  @media (min-width: 640px) {
    margin-bottom: 2.25rem;
  }
}
</style>
