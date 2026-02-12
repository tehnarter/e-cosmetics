<script setup lang="ts">
const selected = ref("green")

const colors = [
  { key: "green", value: "#16a34a" },
  { key: "red", value: "#dc2626" },
  { key: "yellow", value: "#facc15" },
  { key: "orange", value: "#ea580c" },
  { key: "cyan", value: "#22d3ee" },
  { key: "blue", value: "#2563eb" },
  { key: "purple", value: "#7c3aed" },
  { key: "pink", value: "#db2777" },
  { key: "white", value: "#ffffff", border: true },
  { key: "black", value: "#000000" },
]
</script>

<template>
  <UiAccordion type="single" collapsible default-value="filter-colors">
    <UiAccordionItem value="filter-colors" class="colors">
      <UiAccordionTrigger value="filter-colors" class="colors__title">
        Colors
      </UiAccordionTrigger>

      <UiAccordionContent value="filter-colors" class="colors__content">
        <div class="colors__grid">
          <button
            v-for="color in colors"
            :key="color.key"
            type="button"
            class="colors__circle"
            :style="{
              backgroundColor: color.value,
              border: color.border
                ? '1px solid rgba(0,0,0,0.25)'
                : '1px solid rgba(0,0,0,0.2)',
            }"
            @click="selected = color.key"
          >
            <!-- Checkmark -->
            <svg
              v-if="selected === color.key"
              class="colors__check"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M20.285 6.709l-11.31 11.31l-5.657-5.657l1.414-1.415l4.243 4.243l9.897-9.897z"
              />
            </svg>
          </button>
        </div>
      </UiAccordionContent>
    </UiAccordionItem>
  </UiAccordion>
</template>

<style scoped lang="scss">
.colors {
  border: none;

  &__title {
    font-weight: 700;
    font-size: 20px;
    padding: 2px 0;
    &:hover {
      text-decoration: none;
      color: #7c7c7c;
    }
  }

  &__content {
    padding-top: 16px;
    padding-bottom: 0;
  }

  &__grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
    }
  }

  &__circle {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: transform 0.15s ease;

    @media (min-width: 640px) {
      width: 40px;
      height: 40px;
    }

    &:active {
      transform: scale(0.9);
    }
  }

  &__check {
    pointer-events: none;
  }
}
</style>
