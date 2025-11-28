<script setup lang="ts">
import { inject, onMounted, onBeforeUnmount, ref, watch } from "vue"

const sheet = inject<any>("sheet")
const panel = ref<HTMLElement | null>(null)

const ignoreClick = ref(false)

/* ===== Ігнор першого кліку ===== */
watch(
  () => sheet?.open.value,
  (val) => {
    if (val) {
      ignoreClick.value = true
      setTimeout(() => (ignoreClick.value = false), 50)
    }
  }
)

/* ===== КЛИК ПОЗА ПАНЕЛЛЮ ===== */
function onDocClick(e: MouseEvent) {
  if (ignoreClick.value) return
  if (!sheet?.open.value) return
  if (!panel.value) return

  if (!panel.value.contains(e.target as Node)) {
    sheet.hide()
  }
}

/* ===== ESC ===== */
function onKey(e: KeyboardEvent) {
  if (e.key === "Escape" && sheet?.open.value) {
    sheet.hide()
  }
}

/* ===== CLOSE BUTTON ===== */
function onClose() {
  sheet.hide()
}

onMounted(() => {
  document.addEventListener("click", onDocClick)
  document.addEventListener("keydown", onKey)
})

onBeforeUnmount(() => {
  document.removeEventListener("click", onDocClick)
  document.removeEventListener("keydown", onKey)
})
</script>

<template>
  <transition name="slide">
    <div v-if="sheet?.open.value" class="sheet-wrapper">
      <div class="sheet-overlay"></div>

      <aside ref="panel" class="sheet-content" role="dialog" aria-modal="true">
        <div class="sheet-close-wrapper">
          <button class="close-btn" @click="onClose" aria-label="Close">
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
  background: #fff;
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
