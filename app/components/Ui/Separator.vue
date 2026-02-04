<script setup>
const props = defineProps({
  orientation: {
    type: String,
    default: "horizontal", // horizontal | vertical
  },
  decorative: {
    type: Boolean,
    default: true,
  },
  className: {
    type: String,
    default: "",
  },
})
</script>

<template>
  <div
    :aria-hidden="props.decorative"
    :class="[
      'separator',
      props.orientation === 'horizontal'
        ? 'separator--horizontal'
        : 'separator--vertical',
      props.className,
    ]"
  />
</template>

<style scoped lang="scss">
.separator {
  flex-shrink: 0;
  background-color: #dcdcdc; // заміна bg-border
}

.separator--horizontal {
  height: 1px;
  width: 100%;
}

.separator--vertical {
  width: 1px;
  height: 100%;
}
</style>
