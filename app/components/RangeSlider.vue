<script setup lang="ts">
interface Props {
  min: number
  max: number
  step?: number
  modelValue?: [number, number]
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  step: 1,
})

const emit = defineEmits<{
  (e: "update:modelValue", value: [number, number]): void
}>()

/* ---------------- state ---------------- */
const values = ref<[number, number]>(props.modelValue ?? [props.min, props.max])

const slider = ref<HTMLElement | null>(null)
const activeThumb = ref<0 | 1 | null>(null)

/* ---------------- utils ---------------- */
const clamp = (v: number) => Math.min(props.max, Math.max(props.min, v))

const snap = (v: number) => Math.round(v / props.step) * props.step

const percent = (v: number) => ((v - props.min) / (props.max - props.min)) * 100

/* ---------------- logic ---------------- */
function valueFromClientX(clientX: number) {
  if (!slider.value) return 0

  const { left, width } = slider.value.getBoundingClientRect()
  const ratio = (clientX - left) / width
  const raw = props.min + ratio * (props.max - props.min)

  return clamp(snap(raw))
}

function startDrag(index: 0 | 1, e: MouseEvent | TouchEvent) {
  activeThumb.value = index
  move(e)
}

function move(e: MouseEvent | TouchEvent) {
  if (activeThumb.value === null) return

  const clientX = "touches" in e ? e.touches[0].clientX : e.clientX

  const next = valueFromClientX(clientX)
  const nextValues: [number, number] = [...values.value]

  nextValues[activeThumb.value] = next

  // не дозволяємо перетин
  if (nextValues[0] > nextValues[1]) {
    nextValues.reverse()
    activeThumb.value = activeThumb.value === 0 ? 1 : 0
  }

  values.value = nextValues
  emit("update:modelValue", nextValues)
}

function stop() {
  activeThumb.value = null
}

/* ---------------- events ---------------- */
onMounted(() => {
  window.addEventListener("mousemove", move)
  window.addEventListener("mouseup", stop)
  window.addEventListener("touchmove", move)
  window.addEventListener("touchend", stop)
})

onUnmounted(() => {
  window.removeEventListener("mousemove", move)
  window.removeEventListener("mouseup", stop)
  window.removeEventListener("touchmove", move)
  window.removeEventListener("touchend", stop)
})

/* ---------------- computed ---------------- */
const rangeStyle = computed(() => ({
  left: percent(values.value[0]) + "%",
  width: percent(values.value[1]) - percent(values.value[0]) + "%",
}))
</script>

<template>
  <ClientOnly>
    <div class="range-slider">
      <div ref="slider" class="track">
        <div class="range" :style="rangeStyle" />

        <div
          class="thumb"
          :style="{ left: percent(values[0]) + '%' }"
          @mousedown="startDrag(0, $event)"
          @touchstart.prevent="startDrag(0, $event)"
        >
          <span class="label"> {{ label }}{{ values[0] }} </span>
        </div>

        <div
          class="thumb"
          :style="{ left: percent(values[1]) + '%' }"
          @mousedown="startDrag(1, $event)"
          @touchstart.prevent="startDrag(1, $event)"
        >
          <span class="label"> {{ label }}{{ values[1] }} </span>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
.range-slider {
  width: 100%;
  padding-bottom: 28px;
}

.track {
  position: relative;
  height: 6px;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 999px;
}

.range {
  position: absolute;
  height: 100%;
  background: black;
  border-radius: inherit;
}

.thumb {
  position: absolute;
  top: 50%;
  width: 16px;
  height: 16px;
  background: black;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: grab;
}

.thumb:active {
  cursor: grabbing;
}

.label {
  position: absolute;
  bottom: -22px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  white-space: nowrap;
}
</style>
