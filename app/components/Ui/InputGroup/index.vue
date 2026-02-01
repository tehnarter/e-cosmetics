<script setup lang="ts">
defineProps<{
  className?: string
}>()
</script>

<template>
  <div
    class="input-group focus-within-shadow transition-all relative flex items-center w-full rounded-full overflow-hidden pl-4"
    :class="className"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
/* === input-group === */
.input-group {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 16px; // pl-4
  border-radius: 9999px; // rounded-full
  overflow: hidden;
}

/* === transition-all === */
.transition-all {
  transition: all 0.15s ease;
}

/* === focus-within:shadow-lg === */
.focus-within-shadow:focus-within {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

/* === flex utils === */
.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.relative {
  position: relative;
}

.w-full {
  width: 100%;
}
</style>
