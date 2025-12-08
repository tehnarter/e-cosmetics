<script setup lang="ts">
const { scrollNext, canScrollNext } = useCarousel()
</script>

<template>
  <button :disabled="!canScrollNext" @click="scrollNext">
    <slot>Next</slot>
  </button>
</template>
