<script setup lang="ts">
const props = defineProps<{ class?: string }>()
</script>

<template>
  <nav :class="props.class">
    <slot />
  </nav>
</template>

<style scoped lang="scss">
/* minimal wrapper styles (optional) */
</style>
