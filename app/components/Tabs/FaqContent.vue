<script setup lang="ts">
type FaqItem = {
  question: string
  answer: string
}

const faqsData: FaqItem[] = [
  {
    question: "Який склад косметичного засобу?",
    answer:
      "Надайте інформацію про основні інгредієнти, активні компоненти, їхню дію та концентрацію (наприклад, гіалуронова кислота, вітамін C, ніацинамід).",
  },
  {
    question: "Як правильно використовувати цей засіб?",
    answer:
      "Опишіть спосіб застосування, рекомендовану частоту використання та поєднання з іншими косметичними продуктами.",
  },
  {
    question: "Для якого типу шкіри підходить продукт?",
    answer:
      "Вкажіть, чи підходить засіб для сухої, жирної, комбінованої, чутливої або проблемної шкіри.",
  },
  {
    question: "Чи підходить продукт для щоденного використання?",
    answer:
      "Поясніть, чи можна використовувати засіб щодня та чи є обмеження залежно від типу шкіри або сезону.",
  },
  {
    question: "Які умови доставки та її вартість?",
    answer:
      "Надайте інформацію про способи доставки, орієнтовні терміни та вартість залежно від регіону.",
  },
  {
    question: "Яка політика повернення косметики?",
    answer:
      "Опишіть умови повернення або обміну товару, терміни та випадки, у яких повернення можливе.",
  },
]
</script>

<template>
  <section>
    <h3 class="faq-title">Часті запитання</h3>

    <UiAccordion type="single" collapsible>
      <UiAccordionItem
        v-for="(faq, idx) in faqsData"
        :key="idx"
        :value="`item-${idx + 1}`"
      >
        <UiAccordionTrigger class="text-left">
          {{ faq.question }}
        </UiAccordionTrigger>

        <UiAccordionContent>
          {{ faq.answer }}
        </UiAccordionContent>
      </UiAccordionItem>
    </UiAccordion>
  </section>
</template>

<style scoped>
.faq-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 1.25rem;
}

@media (min-width: 640px) {
  .faq-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
}

/* equivalent of "text-left" */
.text-left {
  text-align: left;
}
</style>
