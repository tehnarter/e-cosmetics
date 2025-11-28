<script setup lang="ts">
const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}

defineExpose({ isOpen, toggle })
</script>

<template>
  <li class="nav-item">
    <slot :isOpen="isOpen" :toggle="toggle" />
  </li>
</template>

<style scoped>
.nav-item {
  position: relative;
  list-style: none;
}
</style>
