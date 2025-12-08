<script setup lang="ts">
const { scrollPrev, canScrollPrev } = useCarousel()
</script>

<template>
  <button :disabled="!canScrollPrev" @click="scrollPrev">
    <slot>Prev</slot>
  </button>
</template>
