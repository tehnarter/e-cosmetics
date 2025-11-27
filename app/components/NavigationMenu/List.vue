<script setup lang="ts">
const props = defineProps<{ class?: string }>()
</script>

<template>
  <div :class="props.class">
    <slot />
  </div>
</template>

<style scoped lang="scss">
/* minimal wrapper styles (optional) */
</style>
