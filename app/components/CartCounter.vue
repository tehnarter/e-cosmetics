<script setup lang="ts">
interface Props {
  modelValue: number
  isZeroDelete?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isZeroDelete: false,
})

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void
}>()

const add = () => {
  emit("update:modelValue", props.modelValue + 1)
}

const remove = () => {
  if ((props.modelValue === 1 && !props.isZeroDelete) || props.modelValue <= 0)
    return

  emit("update:modelValue", props.modelValue - 1)
}
</script>

<template>
  <div class="cart-counter">
    <button type="button" class="cart-counter__btn" @click="remove">
      <SvgoRemove />
    </button>

    <span class="cart-counter__value">
      {{ modelValue }}
    </span>

    <button type="button" class="cart-counter__btn" @click="add">
      <SvgoAdd />
    </button>
  </div>
</template>
<style lang="scss" scoped>
.cart-counter {
  width: 100%;
  min-width: 110px;
  max-width: 110px;
  padding: 0.75rem 1rem;
  border-radius: 999px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 640px) {
    max-width: 170px;
    padding: 0.75rem 1.25rem;
  }

  @media (min-width: 768px) {
    padding-top: 0.875rem;
    padding-bottom: 0.875rem;
  }

  &__btn {
    width: 1.25rem;
    height: 1.25rem;
    font-size: 1.25rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    &:hover {
      background: transparent;
    }

    @media (min-width: 640px) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  &__value {
    font-weight: 500;
    font-size: 0.875rem;

    @media (min-width: 640px) {
      font-size: 1rem;
    }
  }
}
</style>
