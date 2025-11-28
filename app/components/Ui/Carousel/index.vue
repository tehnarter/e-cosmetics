<script setup lang="ts">
import { onMounted, ref } from "vue"
import EmblaCarousel from "embla-carousel"

const props = defineProps({
  items: { type: Array, required: true },
  opts: { type: Object, default: () => ({}) },
  apiRef: { type: Object, required: true },
})

const viewport = ref(null)
let embla = null

onMounted(() => {
  if (!viewport.value) return

  embla = EmblaCarousel(viewport.value, props.opts)

  // Передаємо API назад
  props.apiRef.value = {
    next: () => embla.scrollNext(),
    prev: () => embla.scrollPrev(),
  }
})
</script>

<template>
  <div class="embla">
    <div class="embla__viewport" ref="viewport">
      <div class="embla__container">
        <div v-for="item in items" :key="item.id" class="embla__slide">
          <slot name="item" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>
