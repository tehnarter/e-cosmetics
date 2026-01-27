<script setup lang="ts">
import { computed, ref, useAttrs } from "vue"

interface ButtonProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const props = defineProps<ButtonProps>()
const attrs = useAttrs()
const btn = ref<HTMLButtonElement | null>(null)

const buttonClasses = computed(() => {
  const base = ["btn"]

  // Variant
  switch (props.variant) {
    case "destructive":
      base.push("btn-destructive")
      break
    case "outline":
      base.push("btn-outline")
      break
    case "secondary":
      base.push("btn-secondary")
      break
    case "ghost":
      base.push("btn-ghost")
      break
    case "link":
      base.push("btn-link")
      break
    default:
      base.push("btn-default")
  }

  // Size
  switch (props.size) {
    case "sm":
      base.push("btn-sm")
      break
    case "lg":
      base.push("btn-lg")
      break
    case "icon":
      base.push("btn-icon")
      break
    default:
      base.push("btn-default-size")
  }

  return base.join(" ")
})

const asChild = props.asChild ?? false
</script>

<template>
  <component
    :is="asChild ? 'slot' : 'button'"
    :class="buttonClasses"
    v-bind="attrs"
    ref="btn"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
  text-decoration: none;

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
}

/* Variants */
.btn-default {
  background: #3b82f6;
  color: #fff;
}

.btn-destructive {
  background: #ef4444;
  color: #fff;
}

.btn-outline {
  background: #fff;
  border: 1px solid #d1d5db;
  color: #111827;
}

.btn-secondary {
  background: #e5e7eb;
  color: #111827;
}

.btn-ghost {
  background: transparent;
  color: #111827;
}

.btn-link {
  background: transparent;
  color: #3b82f6;
  text-decoration: underline;
}

/* Sizes */
.btn-default-size {
  height: 36px;
  padding: 0 16px;
  font-size: 14px;
}

.btn-sm {
  height: 32px;
  padding: 0 12px;
  font-size: 12px;
}

.btn-lg {
  height: 40px;
  padding: 0 24px;
  font-size: 16px;
}

.btn-icon {
  height: 36px;
  width: 36px;
  padding: 0;
}
</style>
