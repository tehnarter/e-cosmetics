<script setup lang="ts">
import { ref, provide, reactive } from "vue"

const isOpen = ref(false)

const drawer = reactive({
  isOpen,
  open: () => (isOpen.value = true),
  close: () => (isOpen.value = false),
  toggle: () => (isOpen.value = !isOpen.value),
})

provide("drawer", drawer)
</script>

<template>
  <slot />
</template>
