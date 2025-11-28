<script setup lang="ts">
import { ref, provide } from "vue"

const props = defineProps<{
  type?: "single" | "multiple"
  collapsible?: boolean
}>()

const openItems = ref<string[]>([])

function toggleItem(id: string) {
  if (props.type === "single") {
    if (openItems.value[0] === id && props.collapsible) {
      openItems.value = []
    } else {
      openItems.value = [id]
    }
  } else {
    // multiple
    if (openItems.value.includes(id)) {
      openItems.value = openItems.value.filter((v) => v !== id)
    } else {
      openItems.value.push(id)
    }
  }
}

provide("accordion", {
  openItems,
  toggleItem,
})
</script>

<template>
  <div class="accordion">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.accordion {
  width: 100%;
}
</style>
