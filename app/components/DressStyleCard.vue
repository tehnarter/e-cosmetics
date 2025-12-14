<script setup lang="ts">
defineProps<{
  title: string
  url: string
  className?: string
}>()
</script>

<template>
  <NuxtLink :to="url" :class="['dress-card', className]">
    {{ title }}
  </NuxtLink>
</template>

<style lang="scss" scoped>
.dress-card {
  width: 100%;
  border-radius: 20px;
  background-color: #fff;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  font-size: 1.5rem; // text-2xl
  font-weight: 700; // font-bold
  text-align: left;

  padding: 16px 24px; // py-4 px-6

  @media (min-width: 768px) {
    height: 100%;
    padding: 25px 36px; // md:py-[25px] md:px-9
    font-size: 2.25rem; // md:text-4xl
  }
}
</style>
