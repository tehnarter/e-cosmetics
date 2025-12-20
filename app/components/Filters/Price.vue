<script setup lang="ts">
const price = ref<[number, number]>([50, 200])
</script>

<template>
  <UiAccordion type="single" collapsible>
    <UiAccordionItem value="filter-price" class="price-item">
      <UiAccordionTrigger value="filter-price" class="price-trigger">
        Ціна
      </UiAccordionTrigger>

      <UiAccordionContent value="filter-price" class="price-content">
        <div class="price-slider">
          <RangeSlider
            v-model="price"
            :min="0"
            :max="1000"
            :step="10"
            label="₴"
          />
        </div>

        <div class="price-spacer" />
      </UiAccordionContent>
    </UiAccordionItem>
  </UiAccordion>
</template>

<style scoped lang="scss">
.price-item {
  border: none;
}

.price-trigger {
  color: #000;
  font-weight: 700;
  font-size: 20px;
  padding: 2px 0;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
}

.price-content {
  padding-top: 16px;
  overflow: visible;
}

.price-slider {
  margin-bottom: 16px;
}

.price-spacer {
  margin-bottom: 12px;
}
</style>
