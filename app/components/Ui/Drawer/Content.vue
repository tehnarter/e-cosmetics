<script setup lang="ts">
import { inject, onMounted, onUnmounted } from "vue"

const drawer = inject<any>("drawer")

function onKey(e: KeyboardEvent) {
  if (e.key === "Escape") drawer.close()
}

onMounted(() => window.addEventListener("keydown", onKey))
onUnmounted(() => window.removeEventListener("keydown", onKey))
</script>

<template>
  <Teleport to="body">
    <transition name="drawer">
      <div v-if="drawer?.isOpen" class="drawer-content">
        <slot />
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.drawer-content {
  position: fixed;
  bottom: 0;
  inset-inline: 0;
  background: var(--mobile-background);
  border-radius: 16px 16px 0 0;
  z-index: 50;
  max-height: 90%;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.25s ease;
}
.drawer-enter-from,
.drawer-leave-to {
  transform: translateY(100%);
}
</style>
