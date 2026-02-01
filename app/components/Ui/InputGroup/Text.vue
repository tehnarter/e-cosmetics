<script setup lang="ts">
defineProps<{
  className?: string
}>()
</script>

<template>
  <div class="input-group-text mr-3" :class="className">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.input-group-text {
  display: flex;
  align-items: center;
}

.mr-3 {
  margin-right: 12px;
}
</style>
