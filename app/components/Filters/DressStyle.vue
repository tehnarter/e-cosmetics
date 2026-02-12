<script setup lang="ts">
const open = ref(["filter-style"]) // масив — для multiple режиму

const dressStylesData = [
  { title: "Casual", slug: "/shop?style=casual" },
  { title: "Formal", slug: "/shop?style=formal" },
  { title: "Party", slug: "/shop?style=party" },
  { title: "Gym", slug: "/shop?style=gym" },
]
</script>

<template>
  <UiAccordion v-model="open" type="multiple" collapsible>
    <UiAccordionItem value="filter-style" class="dress">
      <UiAccordionTrigger value="filter-style" class="dress__title">
        Dress Style
      </UiAccordionTrigger>

      <UiAccordionContent value="filter-style" class="dress__content">
        <div class="dress__list">
          <NuxtLink
            v-for="(dStyle, idx) in dressStylesData"
            :key="idx"
            :to="dStyle.slug"
            class="dress__item"
          >
            <span>{{ dStyle.title }}</span>

            <svg
              class="dress__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9.29 6.71a1 1 0 0 0 0 1.41L13.17 12l-3.88 3.88a1 1 0 1 0 1.41 1.41l4.59-4.59a1 1 0 0 0 0-1.41L10.7 6.7a1 1 0 0 0-1.41 0"
              />
            </svg>
          </NuxtLink>
        </div>
      </UiAccordionContent>
    </UiAccordionItem>
  </UiAccordion>
</template>

<style scoped lang="scss">
.dress {
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

  &__list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: rgba(0, 0, 0, 0.6);
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    transition: color 0.2s ease;

    &:hover {
      color: #000;
    }
  }

  &__icon {
    width: 20px;
    height: 20px;
  }
}
</style>
