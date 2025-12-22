<script setup lang="ts">
import { ref, provide, watch, onMounted, onBeforeUnmount } from "vue"

const props = defineProps<{
  defaultValue?: string
}>()

const isOpen = ref(false)
const selectedValue = ref(props.defaultValue || "")

function toggle() {
  isOpen.value = !isOpen.value
}

function close() {
  isOpen.value = false
}

function select(value: string) {
  selectedValue.value = value
  close()
}

function onClickOutside(e: MouseEvent) {
  if (!(e.target as HTMLElement).closest("[data-ui-select]")) {
    close()
  }
}

onMounted(() => {
  document.addEventListener("click", onClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener("click", onClickOutside)
})

provide("ui-select", {
  isOpen,
  selectedValue,
  toggle,
  select,
})
</script>

<template>
  <div data-ui-select>
    <slot />
  </div>
</template>

<style scoped lang="scss"></style>
