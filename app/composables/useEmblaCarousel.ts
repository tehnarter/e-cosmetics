import { ref, onMounted, onBeforeUnmount } from "vue"
import EmblaCarousel from "embla-carousel"

export function useEmblaCarousel(options = {}) {
  const viewport = ref<HTMLElement | null>(null)
  const api = ref<any>(null)

  const current = ref(1)
  const total = ref(0)

  onMounted(() => {
    if (!viewport.value) return

    api.value = EmblaCarousel(viewport.value, options)

    total.value = api.value.slideNodes().length
    current.value = api.value.selectedScrollSnap() + 1

    api.value.on("select", () => {
      current.value = api.value.selectedScrollSnap() + 1
    })
  })

  onBeforeUnmount(() => {
    api.value?.destroy()
  })

  const next = () => api.value?.scrollNext()
  const prev = () => api.value?.scrollPrev()

  return { viewport, api, current, total, next, prev }
}
