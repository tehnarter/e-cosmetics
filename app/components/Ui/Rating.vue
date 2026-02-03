<script setup lang="ts">
interface RatingProps {
  value?: number
  maxStars?: number
  readonly?: boolean
}

const props = defineProps<RatingProps>()
const emit = defineEmits<{ (e: "update:value", value: number): void }>()

const value = ref(props.value ?? 0)
const maxStars = props.maxStars ?? 5

const onClick = (n: number) => {
  if (props.readonly) return
  value.value = n
  emit("update:value", n)
}
</script>

<template>
  <div class="rating">
    <span
      v-for="n in maxStars"
      :key="n"
      class="star"
      :class="{ filled: n <= Math.round(value) }"
      @click="onClick(n)"
    >
      ★
    </span>
  </div>
</template>

<style scoped lang="scss">
.rating {
  display: inline-flex;

  .star {
    font-size: 24px;
    color: #d1d5db; // сірий колір неактивної зірки
    cursor: pointer;
    transition: color 0.2s ease;

    &.filled {
      color: #facc15; // жовта зірка
    }

    &:not(:last-child) {
      margin-right: 4px;
    }
  }
}
</style>
