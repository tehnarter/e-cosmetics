<script setup lang="ts">
defineProps<{
  modelValue?: string
  className?: string
}>()

defineEmits(["update:modelValue"])
</script>

<template>
  <input
    class="input-control w-full py-3 pr-4 outline-none"
    :class="className"
    autocomplete="off"
    autocorrect="off"
    spellcheck="false"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>

<style scoped lang="scss">
.input-control {
  border: none;
  background: transparent;
}

/* === utilities replicated === */
.w-full {
  width: 100%;
}

.py-3 {
  padding-top: 12px;
  padding-bottom: 12px;
}

.pr-4 {
  padding-right: 16px;
}

.outline-none {
  outline: none;
}

/* === placeholder styles === */
.input-control::placeholder {
  font-weight: 400;
  font-size: 14px;
}
</style>
