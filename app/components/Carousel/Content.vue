<script setup lang="ts">
const { carouselRef } = useCarousel()
</script>

<template>
  <div ref="carouselRef" class="flex">
    <slot />
  </div>
</template>
<style lang="scss"></style>
