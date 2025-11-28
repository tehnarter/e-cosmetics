<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
}>()
</script>

<template>
  <div v-if="props.isOpen" class="nav-content">
    <slot />
  </div>
</template>

<style scoped>
.nav-content {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 30;
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
}
</style>
