<script setup lang="ts">
const sheet = inject<any>("sheet")
const panel = ref<HTMLElement | null>(null)
</script>

<template>
  <transition name="slide">
    <div v-if="sheet?.open.value" class="sheet-wrapper">
      <aside ref="panel" class="sheet-content" role="dialog" aria-modal="true">
        <div class="sheet-close-wrapper">
          <button class="close-btn" @click="sheet?.hide()" aria-label="Close">
            ✕
          </button>
        </div>

        <slot />
      </aside>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.sheet-wrapper {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: block;
}

.sheet-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.36);
}

.sheet-content {
  position: absolute;
  left: 0;
  top: 0;
  width: 320px;
  height: 100%;
  background: var(--mobile-aside);
  box-shadow: 2px 0 18px rgba(0, 0, 0, 0.12);
  padding: 20px;
  overflow-y: auto;
}

.sheet-close-wrapper {
  position: absolute;
  top: 12px;
  right: 12px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  opacity: 0.7;
}

/* анімації */
.slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
  transition:
    transform 0.18s ease,
    opacity 0.18s;
}
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
  transition:
    transform 0.18s ease,
    opacity 0.18s;
}
</style>
