<script setup lang="ts">
import { useI18n } from "#imports"

interface ReviewCard {
  user: string
  content: string
  rating: number
  date?: string
}

interface LocalizedReview {
  uk: ReviewCard
  en: ReviewCard
}

const props = defineProps<{
  data: LocalizedReview
  blurChild?: unknown
  isAction?: boolean
  isDate?: boolean
  className?: string
}>()

const { blurChild, isAction = false, isDate, data, className } = props
const { locale } = useI18n()

// Мапінг коду локалі на ключ LocalizedReview
const langMap: Record<string, keyof LocalizedReview> = {
  ua: "uk",
  en: "en",
}

// Обчислюємо поточний відгук з урахуванням локалі
const review = computed<ReviewCard>(() => {
  const key = langMap[locale.value] || "uk" // якщо не знайдено — default uk
  return data?.[key] ?? { user: "", content: "", rating: 0, date: "" }
})
</script>

<template>
  <div :class="['review-card', className]">
    <div v-if="blurChild" class="blur-layer">
      <slot name="blur">{{ blurChild }}</slot>
    </div>

    <div class="header">
      <UiRating :value="review.rating" :readonly="true" :maxStars="5" />
      <UiButton v-if="isAction" type="button" class="action-btn">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          class="text-muted-xl"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="256" cy="256" r="48"></circle>
          <circle cx="416" cy="256" r="48"></circle>
          <circle cx="96" cy="256" r="48"></circle>
        </svg>
      </UiButton>
    </div>

    <div class="user">
      <strong>{{ review.user }}</strong>
      <span class="checkmark">✔</span>
    </div>

    <p class="content">{{ review.content }}</p>

    <p v-if="isDate && review.date" class="date">
      {{ locale.value === "uk" ? "Опубліковано" : "Published" }}
      {{ review.date }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.review-card {
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .blur-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(2px);
    z-index: 10;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    .action-btn {
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: rgba(0, 0, 0, 0.4);
    }
  }

  .user {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    strong {
      font-size: 1rem;
      margin-right: 4px;
    }

    .checkmark {
      color: #01ab31;
      font-size: 1.2rem;
    }
  }

  .content {
    font-size: 0.875rem;
    color: rgba(0, 0, 0, 0.6);
  }

  .date {
    font-size: 0.875rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
    margin-top: 16px;
  }
}

.text-muted-xl {
  color: rgba(0, 0, 0, 0.4);
  font-size: 1.5rem;
}
</style>
