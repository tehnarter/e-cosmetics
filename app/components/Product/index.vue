<script setup lang="ts">
import type { Product, LocalizedText } from "~~/types/product.types"
import { ref, computed, onMounted } from "vue"
import { useI18n } from "#imports"

const props = defineProps<{ data: Product }>()

const headerRef = ref<HTMLElement | null>(null)
const { locale } = useI18n()

// Мапа для відповідності ua → uk, en → en
const langMap: Record<string, keyof LocalizedText> = {
  ua: "uk",
  en: "en",
}

// Вибір title та description відповідно до мови
const title = computed(() => {
  const key = langMap[locale.value] ?? "uk"
  const t = props.data.title as LocalizedText
  return t?.[key] ?? ""
})

const description = computed(() => {
  const key = langMap[locale.value] ?? "uk"
  const d = props.data.description as LocalizedText
  return d?.[key] ?? ""
})

// Обчислення фінальної ціни
const finalPrice = computed(() => {
  if (props.data.discount.percentage > 0) {
    return Math.round(
      props.data.price -
        (props.data.price * props.data.discount.percentage) / 100
    )
  }
  if (props.data.discount.amount > 0) {
    return props.data.price - props.data.discount.amount
  }
  return props.data.price
})

// GSAP анімація при монтуванні
onMounted(() => {
  if (!headerRef.value) return

  gsap.from(headerRef.value.querySelectorAll(".fade-up"), {
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.08,
    ease: "power2.out",
  })
})
</script>

<template>
  <div ref="headerRef" class="product-header">
    <div class="product-header__grid">
      <div class="fade-up">
        <ProductPhoto :data="data" />
      </div>

      <div class="product-header__content">
        <!-- Використовуємо мультимовний title -->
        <h1 class="product-header__title fade-up">
          {{ title }}
        </h1>

        <div class="product-header__rating fade-up">
          <UiRating :value="data.rating" allow-fraction readonly :size="25" />
          <span class="product-header__rating-value">
            {{ data.rating.toFixed(1) }}<span>/5</span>
          </span>
        </div>

        <div class="product-header__price fade-up">
          <span class="current">${{ finalPrice }}</span>

          <span
            v-if="data.discount.percentage > 0 || data.discount.amount > 0"
            class="old"
          >
            ${{ data.price }}
          </span>

          <span v-if="data.discount.percentage > 0" class="badge">
            -{{ data.discount.percentage }}%
          </span>

          <span v-else-if="data.discount.amount > 0" class="badge">
            -${{ data.discount.amount }}
          </span>
        </div>

        <!-- Використовуємо мультимовний description -->
        <p class="product-header__description fade-up">{{ description }}</p>

        <hr />
        <ProductColor class="fade-up" />
        <hr />
        <ProductSize class="fade-up" />
        <hr class="desktop-only" />
        <ProductAddToCard :data="data" class="fade-up" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-header {
  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.75rem;

    @media (min-width: 768px) {
      font-size: 2.5rem;
      line-height: 2.5rem;
    }
  }

  &__rating {
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;

    &-value {
      font-size: 0.875rem;
      margin-left: 0.75rem;
      color: #000;

      span {
        opacity: 0.6;
      }
    }
  }

  &__price {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.25rem;

    .current {
      font-size: 2rem;
      font-weight: 700;
    }

    .old {
      font-size: 2rem;
      font-weight: 700;
      text-decoration: line-through;
      opacity: 0.4;
    }

    .badge {
      font-size: 0.75rem;
      font-weight: 500;
      padding: 0.375rem 0.875rem;
      border-radius: 999px;
      background: rgba(255, 51, 51, 0.1);
      color: #ff3333;
    }
  }

  &__description {
    font-size: 0.95rem;
    opacity: 0.6;
    margin-bottom: 1.25rem;
  }
}

hr {
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin: 1.25rem 0;
}

.desktop-only {
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
}
</style>
