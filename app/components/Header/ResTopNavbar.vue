<script setup lang="ts">
import { ref, provide, onMounted, onUnmounted } from "vue"

defineProps<{
  data: any[]
}>()

/* -----------------------------
  SHADCN SHEET API
------------------------------ */
const open = ref(false)

const sheet = {
  open,
  show: () => (open.value = true),
  hide: () => (open.value = false),
  setOpen: (v: boolean) => (open.value = v),
}

provide("sheet", sheet)

/* -----------------------------
  Акордеон
------------------------------ */
const opened = ref<string | null>(null)

const toggle = (label: string) => {
  opened.value = opened.value === label ? null : label
}

/* -----------------------------
  ДЛЯ КЛІКУ ПОЗА МЕНЮ
------------------------------ */
const sheetContentRef = ref<HTMLElement | null>(null)
const sheetTriggerRef = ref<HTMLElement | null>(null)

/* КЛІК ПОЗА МЕНЮ */
const handleClickOutside = (e: Event) => {
  if (!open.value) return

  const target = e.target as HTMLElement

  // Не закривати, якщо клік по бургеру
  if (sheetTriggerRef.value?.contains(target)) return

  // Якщо клік по самому меню — не закривати
  if (sheetContentRef.value?.contains(target)) return

  sheet.hide()
}

/* -----------------------------
  СВАЙПИ (аналог твоєї логіки)
------------------------------ */
let startX = 0
let endX = 0

const handleTouchStart = (e: TouchEvent) => {
  startX = e.touches[0].clientX
}

const handleTouchEnd = (e: TouchEvent) => {
  endX = e.changedTouches[0].clientX
  const diff = endX - startX

  // свайп вправо → показати меню
  if (diff > 80 && !open.value) {
    sheet.show()
  }

  // свайп вліво → сховати меню
  if (diff < -80 && open.value) {
    sheet.hide()
  }
}

/* -----------------------------
  ІНІЦІАЛІЗАЦІЯ LISTENERS
------------------------------ */
onMounted(() => {
  document.addEventListener("mousedown", handleClickOutside)
  document.addEventListener("touchstart", handleTouchStart)
  document.addEventListener("touchend", handleTouchEnd)
})

onUnmounted(() => {
  document.removeEventListener("mousedown", handleClickOutside)
  document.removeEventListener("touchstart", handleTouchStart)
  document.removeEventListener("touchend", handleTouchEnd)
})
</script>

<template>
  <UiSheet>
    <UiSheetTrigger class="menu-btn" ref="sheetTriggerRef">
      <img src="/icons/menu.svg" class="menu-icon" />
    </UiSheetTrigger>

    <UiSheetContent side="left" class="sheet" ref="sheetContentRef">
      <UiSheetHeader class="sheet-header">
        <UiSheetTitle>
          <UiSheetClose>
            <NuxtLink to="/" class="logo">COSMETICS</NuxtLink>
          </UiSheetClose>
        </UiSheetTitle>
      </UiSheetHeader>

      <div class="menu">
        <template v-for="item in data" :key="item.id">
          <UiSheetClose v-if="item.type === 'MenuItem'">
            <NuxtLink :to="item.url" class="menu-item">{{
              item.label
            }}</NuxtLink>
          </UiSheetClose>

          <div v-else class="menu-list">
            <button class="menu-list-btn" @click="toggle(item.label)">
              <span>{{ item.label }}</span>
              <img
                src="/icons/keyboardArrowDown.svg"
                class="arrow"
                :class="{ open: opened === item.label }"
              />
            </button>

            <div v-show="opened === item.label" class="submenu">
              <UiSheetClose v-for="child in item.children" :key="child.id">
                <NuxtLink :to="child.url" class="submenu-item">
                  <div class="submenu-title">{{ child.label }}</div>
                  <div class="submenu-desc">{{ child.description }}</div>
                </NuxtLink>
              </UiSheetClose>
            </div>
          </div>
        </template>
      </div>
    </UiSheetContent>
  </UiSheet>
</template>

<style lang="scss" scoped>
.menu-btn {
  display: block;
  cursor: pointer;
}
.menu-icon {
  width: 22px;
  height: 22px;
}

/* Sheet styles */
.sheet {
  width: 310px;
  padding: 24px;
}

.logo {
  font-size: 24px;
  font-weight: 700;
}

/* Menu block */
.menu {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
}

/* Simple item */
.menu-item {
  display: block;
  padding: 12px 0;
  font-size: 18px;
  color: #000;
  border-bottom: 1px solid #f0f0f0;
}

/* Parent menu */
.menu-list {
  border-bottom: 1px solid #f0f0f0;
}

.menu-list-btn {
  width: 100%;
  padding: 12px 0;
  font-size: 18px;
  background: none;
  border: none;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.arrow {
  width: 18px;
  height: 18px;
  transition: transform 0.25s ease;
}

.arrow.open {
  transform: rotate(180deg);
}

/* Submenu */
.submenu {
  padding-left: 10px;
  margin-bottom: 8px;
  animation: fadeIn 0.2s ease;
}

.submenu-item {
  display: block;
  padding: 8px 0;
}

.submenu-title {
  font-size: 16px;
  font-weight: 600;
  color: #000;
}

.submenu-desc {
  font-size: 13px;
  color: #777;
  line-height: 1.3;
}

/* Fade animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
