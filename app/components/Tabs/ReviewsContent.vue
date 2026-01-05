<script setup lang="ts">
import { computed } from "vue"
import { useReviewsStore } from "~~/stores/reviews"

const reviewsStore = useReviewsStore()
const reviewsData = computed(() => reviewsStore.reviews)
</script>

<template>
  <section class="reviews">
    <!-- HEADER -->
    <div class="reviews__header">
      <div class="reviews__header-left">
        <h3 class="reviews__title">Усі відгуки</h3>
        <span class="reviews__count">(100)</span>
      </div>

      <div class="reviews__header-right">
        <!-- SELECT -->
        <UiSelect default-value="Найновіші">
          <UiSelectTrigger as-child>
            <button
              type="button"
              role="combobox"
              aria-expanded="false"
              aria-autocomplete="none"
              data-state="closed"
              class="select-trigger"
            >
              <span class="select-trigger__value">
                <UiSelectValue />
              </span>

              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="select-trigger__icon"
              >
                <path
                  d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </UiSelectTrigger>

          <UiSelectContent>
            <UiSelectItem value="Найновіші">Найновіші</UiSelectItem>
            <UiSelectItem value="Найрелевантніші">Найрелевантніші</UiSelectItem>
            <UiSelectItem value="Найстаріші">Найстаріші</UiSelectItem>
          </UiSelectContent>
        </UiSelect>

        <!-- BUTTON -->
        <UiButton type="button" class="write-btn"> Написати відгук </UiButton>
      </div>
    </div>

    <!-- REVIEWS -->
    <div class="reviews__grid">
      <ReviewCard
        v-for="review in reviewsData"
        :key="review.id"
        :data="review"
        is-action
        is-date
      />
    </div>

    <!-- LOAD MORE -->
    <div class="reviews__load-more-wrap">
      <NuxtLink to="#" class="reviews__load-more"> Більше відгуків </NuxtLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* ===== REVIEWS ===== */
.reviews {
}

/* ===== HEADER ===== */
.reviews__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 1.25rem; /* mb-5 */

  @media (min-width: 640px) {
    flex-direction: row;
    margin-bottom: 1.5rem; /* sm:mb-6 */
  }
}

.reviews__header-left {
  display: flex;
  align-items: center;
  margin-bottom: 1rem; /* mb-4 */

  @media (min-width: 640px) {
    margin-bottom: 0;
  }
}

.reviews__title {
  font-size: 1.25rem; /* text-xl */
  font-weight: 700;
  color: #000;
  margin-right: 0.5rem;

  @media (min-width: 640px) {
    font-size: 1.5rem; /* sm:text-2xl */
  }
}

.reviews__count {
  font-size: 0.875rem; /* text-sm */
  color: rgba(0, 0, 0, 0.6);

  @media (min-width: 640px) {
    font-size: 1rem; /* sm:text-base */
  }
}

.reviews__header-right {
  display: flex;
  align-items: center;
  gap: 0.625rem; /* space-x-2.5 */
}

/* ===== SELECT ===== */
.select-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  min-width: 120px;
  height: 3rem; /* h-12 */
  padding: 0.75rem 1rem; /* px-4 py-3 */

  background: #f0f0f0;
  color: #000;
  border-radius: 9999px;
  border: none;

  font-weight: 500;
  font-size: 0.75rem; /* text-xs */
  cursor: pointer;

  outline: none;
  box-shadow: none;
  transition: box-shadow 0.15s ease;

  &:focus {
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow:
      0 0 0 1px #000,
      0 0 0 3px rgba(0, 0, 0, 0.15);
  }

  &[data-state="open"] {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (min-width: 640px) {
    padding: 1rem 1.25rem; /* sm:px-5 sm:py-4 */
    font-size: 1rem; /* sm:text-base */
  }
}

.select-trigger__value {
  pointer-events: none;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.select-trigger__icon {
  width: 1rem; /* h-4 w-4 */
  height: 1rem;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

/* ===== BUTTON ===== */
.write-btn {
  height: 3rem;
  padding: 0.75rem 1rem; /* px-4 py-3 */
  background: #000;
  color: #fff;
  font-weight: 500;
  font-size: 0.75rem;
  border-radius: 9999px;

  @media (min-width: 640px) {
    min-width: 166px;
    padding: 1rem 1.25rem; /* sm:px-5 sm:py-4 */
    font-size: 1rem;
  }
}

/* ===== REVIEWS GRID ===== */
.reviews__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem; /* gap-5 */
  margin-bottom: 1.25rem; /* mb-5 */

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 2.25rem; /* sm:mb-9 */
  }
}
/* LOAD MORE */
.reviews__load-more-wrap {
  width: 100%;
  padding: 0 1rem;
  text-align: center;

  @media (min-width: 640px) {
    padding: 0;
  }
}

.reviews__load-more {
  display: inline-block;
  padding: 1rem 2.75rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 9999px;
  font-weight: 500;
  font-size: 0.875rem;
  color: #000;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #000;
    color: #fff;
  }

  @media (min-width: 640px) {
    font-size: 1rem;
  }
}
</style>
