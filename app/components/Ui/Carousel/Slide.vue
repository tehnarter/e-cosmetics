<template>
  <div class="embla__slide">
    <slot />
  </div>
</template>

<style scoped>
.embla__slide {
  position: relative;
  min-width: 100%;
  box-sizing: border-box;

  @media (min-width: 600px) {
    min-width: 50%;
  }

  @media (min-width: 1024px) {
    min-width: 33.33%;
  }
}
</style>
