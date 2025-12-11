<script setup lang="ts">
const props = defineProps<{ options?: any }>()

const { viewport, current, total, next, prev } = useEmblaCarousel(props.options)
</script>

<template>
  <div class="embla">
    <slot name="controls" :next="next" :prev="prev" />
    <div class="embla__viewport" ref="viewport">
      <slot />
    </div>

    <slot name="pagination" :current="current" :total="total" />
  </div>
</template>

<style scoped>
.embla {
  overflow: hidden;
}

.embla__viewport {
  overflow: hidden;
  width: 100%;
}
</style>
