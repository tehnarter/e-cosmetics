<script setup lang="ts">
const open = ref(["filter-size"]) // multiple mode — масив
const selected = ref("Large")

const sizes = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
]
</script>

<template>
  <UiAccordion v-model="open" type="multiple" collapsible>
    <UiAccordionItem value="filter-size" class="sizes-item">
      <UiAccordionTrigger value="filter-size" class="sizes-trigger">
        Size
      </UiAccordionTrigger>

      <UiAccordionContent value="filter-size" class="sizes-content">
        <div class="sizes">
          <button
            v-for="s in sizes"
            :key="s"
            type="button"
            class="sizes__btn"
            :class="{ active: selected === s }"
            @click="selected = s"
          >
            {{ s }}
          </button>
        </div>
      </UiAccordionContent>
    </UiAccordionItem>
  </UiAccordion>
</template>

<style scoped lang="scss">
.sizes-item {
  border: none;
}

.sizes-trigger {
  font-weight: 700;
  font-size: 20px;
  padding: 2px 0;
  &:hover {
    text-decoration: none;
    color: #7c7c7c;
  }
}

.sizes-content {
  padding-top: 16px;
  padding-bottom: 0;
}

.sizes {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  &__btn {
    color: #000;
    background: #d4d5d5;
    margin: 4px;
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 9999px;
    max-height: 39px;
    transition: 0.25s ease;

    &.active {
      background: #000;
      color: #fff;
      font-weight: 500;
    }
  }
}
</style>
