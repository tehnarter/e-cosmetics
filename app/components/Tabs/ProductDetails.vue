<script setup lang="ts">
export type SpecItem = {
  label: string
  value: string
}

const specsData: SpecItem[] = [
  {
    label: "Склад",
    value: "Вода, гліцерин, ніацинамід, пантенол",
  },
  {
    label: "Тип шкіри",
    value: "Підходить для всіх типів шкіри",
  },
  {
    label: "Спосіб застосування",
    value: "Наносити на очищену шкіру 1–2 рази на день",
  },
  {
    label: "Обʼєм",
    value: "50 мл",
  },
]
</script>

<template>
  <div v-for="(item, i) in specsData" :key="i" class="spec-row">
    <div>
      <p class="spec-label">
        {{ item.label }}
      </p>
    </div>

    <div class="spec-value-wrap">
      <p class="spec-value">
        {{ item.value }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.spec-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  .spec-label {
    width: 100%;
    padding: 0.75rem 0.5rem 0.75rem 0;
    font-size: 0.875rem;
    line-height: 1.75rem;
    color: #737373;
  }

  .spec-value-wrap {
    grid-column: span 2;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    .spec-value {
      width: 100%;
      font-size: 0.875rem;
      line-height: 1.75rem;
      color: #262626;
      font-weight: 500;
    }
  }
}

@media (min-width: 1024px) {
  .spec-row {
    .spec-label {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }

    .spec-value-wrap {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
}
</style>
