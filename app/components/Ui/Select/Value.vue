<script setup lang="ts">
import { inject, computed } from "vue"

const select = inject<any>("ui-select")

const value = computed(() => select.selectedValue.value)
</script>

<template>
  <span>{{ value }}</span>
</template>

<style scoped lang="scss"></style>
