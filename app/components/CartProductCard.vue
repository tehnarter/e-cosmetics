<script setup lang="ts">
import { computed, onMounted, ref } from "vue"
import { useCartStore } from "~~/stores/cart"
import { useI18n } from "#imports"

const props = defineProps<{
  data: any // CartItem з доданим localizedName
}>()

const cartStore = useCartStore()
const cardRef = ref<HTMLElement | null>(null)

const { locale } = useI18n()
const langMap: Record<string, "uk" | "en"> = {
  ua: "uk",
  en: "en",
}

// Локалізоване ім’я продукту
const localizedName = computed(
  () =>
    props.data.localizedName ??
    props.data.name[langMap[locale.value] ?? "uk"] ??
    ""
)

const productLink = computed(
  () =>
    `/shop/product/${props.data.id}/${localizedName.value.split(" ").join("-")}`
)

const finalPrice = computed(() => {
  const { price, discount } = props.data

  if (discount.percentage > 0) {
    return Math.round(price - (price * discount.percentage) / 100)
  }

  if (discount.amount > 0) {
    return price - discount.amount
  }

  return price
})

const onQuantityChange = (value: number) => {
  if (value > props.data.quantity) {
    cartStore.addToCart({ ...props.data, quantity: 1 })
    return
  }

  if (value === 0) {
    cartStore.removeAll(props.data.id, props.data.attributes)
    return
  }

  cartStore.removeOne(props.data.id, props.data.attributes)
}

onMounted(async () => {
  if (!process.client || !cardRef.value) return

  const { gsap } = await import("gsap")

  gsap.from(cardRef.value, {
    opacity: 0,
    y: 16,
    duration: 0.45,
    ease: "power2.out",
  })
})
</script>

<template>
  <div ref="cardRef" class="cart-card">
    <NuxtLink :to="productLink" class="cart-card__image">
      <NuxtImg
        :src="data.srcUrl"
        width="124"
        height="124"
        :alt="data.name"
        class="image"
      />
    </NuxtLink>

    <div class="cart-card__content">
      <div class="cart-card__top">
        <NuxtLink :to="productLink" class="title">
          {{ localizedName }}
        </NuxtLink>

        <button
          class="remove-btn"
          @click="cartStore.removeAll(data.id, data.attributes)"
        >
          <SvgoDelete />
        </button>
      </div>

      <div class="meta">
        <span class="label">Size:</span>
        <span class="value">{{ data.attributes[0] }}</span>
      </div>

      <div class="meta">
        <span class="label">Color:</span>
        <span class="value">{{ data.attributes[1] }}</span>
      </div>

      <div class="cart-card__bottom">
        <div class="price">
          <span class="current">${{ finalPrice }}</span>

          <span v-if="finalPrice !== data.price" class="old">
            ${{ data.price }}
          </span>

          <span v-if="data.discount.percentage" class="badge">
            -{{ data.discount.percentage }}%
          </span>

          <span v-else-if="data.discount.amount" class="badge">
            -${{ data.discount.amount }}
          </span>
        </div>

        <CartCounter
          :model-value="data.quantity"
          is-zero-delete
          @update:modelValue="onQuantityChange"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cart-card {
  display: flex;
  gap: 16px;
  align-items: flex-start;

  &__image {
    background: #f0eeed;
    border-radius: 12px;
    width: 100px;
    min-width: 100px;
    aspect-ratio: 1;
    overflow: hidden;

    @media (min-width: 640px) {
      width: 124px;
    }

    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  &__bottom {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }
}

.title {
  font-weight: 700;
  font-size: 16px;
  color: #000;

  @media (min-width: 1280px) {
    font-size: 20px;
  }
}

.remove-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  color: #dc2626;
  font-size: 20px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
}

.meta {
  font-size: 12px;
  margin-top: -4px;

  .label {
    color: #000;
    margin-right: 4px;
  }

  .value {
    color: rgba(0, 0, 0, 0.6);
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
}

.price {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;

  .current {
    font-weight: 700;
    font-size: 20px;

    @media (min-width: 1280px) {
      font-size: 24px;
    }
  }

  .old {
    font-weight: 700;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.4);
    text-decoration: line-through;
  }

  .badge {
    font-size: 10px;
    padding: 6px 14px;
    border-radius: 999px;
    background: rgba(255, 51, 51, 0.1);
    color: #ff3333;

    @media (min-width: 1280px) {
      font-size: 12px;
    }
  }
}

.counter {
  min-width: 105px;
  max-width: 105px;

  @media (min-width: 640px) {
    max-width: 128px;
  }
}
</style>
