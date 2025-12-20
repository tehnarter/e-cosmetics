<script setup lang="ts">
import { inject } from "vue"

const drawer = inject<any>("drawer")
</script>

<template>
  <Teleport to="body">
    <div v-if="drawer?.isOpen" class="drawer-overlay" @click="drawer.close()" />
  </Teleport>
</template>

<style scoped>
.drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 40;
}
</style>
