<script setup lang="ts">
interface Props {
  class?: string
}
const props = defineProps<Props>()
</script>

<template>
  <div
    role="group"
    class="min-w-0 shrink-0 grow-0 basis-full"
    :class="props.class"
  >
    <slot />
  </div>
</template>
