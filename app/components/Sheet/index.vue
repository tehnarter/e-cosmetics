<script setup lang="ts">
import { ref, provide, onMounted } from "vue"

const open = ref(false)

const sheet = {
  open,
  show: () => (open.value = true),
  hide: () => (open.value = false),
  setOpen: (v: boolean) => (open.value = v),
}

provide("sheet", sheet)
</script>

<template>
  <div>
    <slot />
  </div>
</template>
