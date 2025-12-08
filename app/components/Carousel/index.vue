<script setup lang="ts">
import EmblaCarousel from "embla-carousel"

interface Props {
  options?: any
  orientation?: "horizontal" | "vertical"
}

const props = defineProps<Props>()
const carouselRef = ref<HTMLElement | null>(null)
const api = ref<any>(null)

const state = reactive({
  canScrollNext: false,
  canScrollPrev: false,
})

const scrollNext = () => api.value?.scrollNext()
const scrollPrev = () => api.value?.scrollPrev()

onMounted(() => {
  if (!carouselRef.value) return

  api.value = EmblaCarousel(carouselRef.value, {
    axis: props.orientation === "vertical" ? "y" : "x",
    loop: true,
    ...(props.options || {}),
  })

  const onSelect = () => {
    state.canScrollNext = api.value.canScrollNext()
    state.canScrollPrev = api.value.canScrollPrev()
  }

  api.value.on("select", onSelect)
  api.value.on("reInit", onSelect)
  onSelect()
})

provideCarousel({
  carouselRef,
  api,
  scrollNext,
  scrollPrev,
  ...state,
} as CarouselContext)
</script>

<template>
  <div ref="carouselRef" class="relative w-full overflow-hidden">
    <slot />
  </div>
</template>
