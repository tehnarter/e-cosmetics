<script setup lang="ts">
const props = defineProps<{
  onToggle: () => void
}>()
</script>

<template>
  <button class="nav-trigger" @click="props.onToggle">
    <slot />
  </button>
</template>

<style scoped>
.nav-trigger {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  font-weight: 400;

  &:hover {
    color: #444;
  }
}
</style>
