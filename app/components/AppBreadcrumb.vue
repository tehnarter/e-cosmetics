<script setup lang="ts">
export type BreadcrumbItem = {
  label: string
  to?: string
  active?: boolean
}

const props = defineProps<{
  items?: BreadcrumbItem[]
  title?: string
}>()

const breadcrumbItems = computed<BreadcrumbItem[]>(() => {
  if (props.items?.length) return props.items
  if (props.title) return [{ label: props.title, active: true }]
  return []
})
</script>

<template>
  <UiBreadcrumb class="app-breadcrumb">
    <UiBreadcrumbList>
      <template v-for="(item, index) in breadcrumbItems" :key="index">
        <UiBreadcrumbItem>
          <UiBreadcrumbPage v-if="item.active || !item.to">
            {{ item.label }}
          </UiBreadcrumbPage>

          <UiBreadcrumbLink v-else :to="item.to">
            {{ item.label }}
          </UiBreadcrumbLink>
        </UiBreadcrumbItem>

        <UiBreadcrumbSeparator v-if="index < breadcrumbItems.length - 1" />
      </template>
    </UiBreadcrumbList>
  </UiBreadcrumb>
</template>

<style scoped lang="scss">
.app-breadcrumb {
  margin-bottom: 1.25rem;

  @media (min-width: 640px) {
    margin-bottom: 2.25rem;
  }
}
</style>
