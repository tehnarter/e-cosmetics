<script setup lang="ts">
import { provide, ref } from "vue"

const props = defineProps<{
  type?: "single" | "multiple"
  collapsible?: boolean
}>()

const openItems = ref<string[]>([])

function toggleItem(value: string) {
  const index = openItems.value.indexOf(value)

  if (props.type === "single") {
    if (index !== -1 && props.collapsible) openItems.value = []
    else openItems.value = [value]
    return
  }

  if (index === -1) openItems.value.push(value)
  else openItems.value.splice(index, 1)
}

provide("accordion", { openItems, toggleItem })
</script>

<template>
  <div class="accordion">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.accordion {
  display: block;
  width: 100%;

  border-radius: 8px;
}
</style>
