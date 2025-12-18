<script setup lang="ts">
import { inject } from "vue"

const props = defineProps<{ value: string }>()

const accordion = inject<any>("accordion")

function toggle() {
  accordion?.toggleItem(props.value)
}
</script>

<template>
  <button class="accordion-trigger" @click="toggle">
    <slot />

    <!-- SVG стрілка -->
    <svg
      class="accordion-trigger__icon"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  </button>
</template>

<style scoped lang="scss">
.accordion-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  border: none;
  background: transparent;
  padding: 12px 16px;
  font-size: 16px;
  color: #111;
  font-weight: 600;

  &:hover {
    background: #f5f5f5;
  }

  &__icon {
    width: 1rem; // Tailwind w-4
    height: 1rem; // Tailwind h-4
    flex-shrink: 0; // Tailwind shrink-0
    color: var(--muted-foreground);
    transition: transform 200ms ease;
  }
}

/* Обертання стрілки при відкритому акордеоні */
.accordion-item[data-open="true"] .accordion-trigger__icon {
  transform: rotate(180deg);
}
</style>
