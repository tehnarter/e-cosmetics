<script setup>
import { animate } from "motion" // твоя анімація

const props = defineProps({
  from: { type: Number, required: true },
  to: { type: Number, required: true },
  animationOptions: { type: Object, default: () => ({}) },
})

// DOM element
const el = ref(null)
const isVisible = ref(false)

let observer = null
let controls = null

// Run only on client
onMounted(() => {
  if (!el.value) return

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        isVisible.value = true
        observer.disconnect() // one-time trigger
      }
    },
    { threshold: 0.1 }
  )

  observer.observe(el.value)
})

// Animation watcher
watch(isVisible, (v) => {
  if (!v) return

  const element = el.value
  if (!element) return

  // Initial value
  element.textContent = String(props.from)

  // Respect system "reduce motion"
  if (window.matchMedia("(prefers-reduced-motion)").matches) {
    element.textContent = String(props.to)
    return
  }

  // Start animation
  controls = animate(props.from, props.to, {
    duration: 6,
    easing: "ease-out",
    ...props.animationOptions,
    onUpdate(value) {
      element.textContent = Number(value.toFixed(0)).toLocaleString()
    },
  })
})

// Cleanup
onBeforeUnmount(() => {
  if (observer) observer.disconnect()
  if (controls) controls.cancel()
})
</script>

<template>
  <span ref="el"></span>
</template>
