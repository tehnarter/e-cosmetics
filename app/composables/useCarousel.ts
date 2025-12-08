import { inject, provide } from "vue"

export interface CarouselContext {
  carouselRef: Ref<HTMLElement | null>
  api: any
  scrollNext: () => void
  scrollPrev: () => void
  canScrollNext: boolean
  canScrollPrev: boolean
}

export const CarouselSymbol = Symbol("Carousel")

export function provideCarousel(context: CarouselContext) {
  provide(CarouselSymbol, context)
}

export function useCarousel(): CarouselContext {
  const context = inject<CarouselContext>(CarouselSymbol)
  if (!context) throw new Error("useCarousel must be used within <Carousel>")
  return context
}
