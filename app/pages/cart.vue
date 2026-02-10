<script setup lang="ts">
import { useCartStore } from "~~/stores/cart"
import { useI18n } from "#imports"
import { computed, ref, onMounted } from "vue"

const cartStore = useCartStore()
const { locale } = useI18n()

// мапа для ua → uk
const langMap: Record<string, "uk" | "en"> = {
  ua: "uk",
  en: "en",
}

// повертаємо items з локалізацією імені
const items = computed(() =>
  cartStore.items.map((item) => ({
    ...item,
    localizedName: item.name[langMap[locale.value] ?? "uk"] ?? "",
  }))
)

const totalPrice = computed(() => cartStore.totalPrice)
const adjustedTotalPrice = computed(() => cartStore.adjustedTotalPrice)

const discountPercent = computed(() => {
  const total = totalPrice.value
  if (!total) return 0
  return Math.round(((total - adjustedTotalPrice.value) / total) * 100)
})

const pageRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!process.client || !pageRef.value) return

  import("gsap").then(({ gsap }) => {
    gsap.from(pageRef.value!.querySelectorAll(".cart-animate"), {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    })
  })
})
</script>

<template>
  <main ref="pageRef" class="cart-page">
    <div class="cart__container">
      <template v-if="items.length">
        <AppBreadcrumb
          class="cart-animate"
          :items="[
            { label: 'Головна', to: '/' },
            { label: 'Корзина', active: true },
          ]"
        />

        <h2 class="cart-title cart-animate">your cart</h2>

        <div class="cart-layout">
          <!-- PRODUCTS -->
          <div class="cart-products cart-animate">
            <template v-for="(product, idx) in items" :key="idx">
              <CartProductCard :data="product" />
            </template>
          </div>

          <!-- SUMMARY -->
          <div class="cart-summary cart-animate">
            <h6 class="summary-title">Order Summary</h6>

            <div class="summary-list">
              <div class="summary-row">
                <span>Subtotal</span>
                <strong>${{ totalPrice }}</strong>
              </div>

              <div class="summary-row">
                <span>Discount (-{{ discountPercent }}%)</span>
                <strong class="discount">
                  -${{ Math.round(totalPrice - adjustedTotalPrice) }}
                </strong>
              </div>

              <div class="summary-row">
                <span>Delivery Fee</span>
                <strong>Free</strong>
              </div>

              <hr />

              <div class="summary-row total">
                <span>Total</span>
                <strong>${{ Math.round(adjustedTotalPrice) }}</strong>
              </div>
            </div>

            <div class="promo">
              <UiInputGroup>
                <UiInputGroupText>
                  <SvgoPromo filled class="promo__svg" />
                </UiInputGroupText>

                <UiInputGroupInput placeholder="Add promo code" />
              </UiInputGroup>

              <UiButton class="apply-btn">Apply</UiButton>
            </div>

            <UiButton class="checkout-btn">
              Go to Checkout
              <SvgoArrow class="arrow" />
            </UiButton>
          </div>
        </div>
      </template>

      <!-- EMPTY -->
      <div v-else class="cart-empty cart-animate">
        <SvgoBasketExclamation filled />
        <span>Ваша корзина пуста.</span>
        <NuxtLink to="/shop">
          <UiButton class="empty-cart-btn">Магазин</UiButton>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.cart-page {
  padding-bottom: 80px;
}

.cart-title {
  font-family: var(--font-integral);
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.cart-layout {
  display: flex;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
}

.cart-products,
.cart-summary {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background: var(--cart-background);
}

.cart-products {
  flex: 1;
  padding: 24px;

  hr {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin: 16px 0;
  }
}

.cart-summary {
  max-width: 505px;
  padding: 24px;
}

.summary-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
}

.summary-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.6);

  strong {
    color: #000;
  }

  &.total {
    font-size: 22px;
    font-weight: 700;
  }
  .discount {
    color: #dc2626;
  }
}

.promo {
  display: flex;
  gap: 12px;
  margin-top: 20px;
  &__svg {
    color: rgba(0, 0, 0, 0.4);
    font-size: 1.5rem;
  }
}

.apply-btn {
  width: 120px;
  background-color: #0f172a;
  border-radius: 18px;
}

.checkout-btn {
  margin-top: 24px;
  width: 100%;
  height: 60px;
  background-color: #0f172a;
  border-radius: 35px;

  .arrow {
    font-size: 1.25rem;
    margin-left: 0.5rem;
    transition: transform 0.2s ease;
  }

  &:hover .arrow {
    transform: translateX(4px);
  }
}

.cart-empty {
  margin-top: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #d1d5db;

  svg {
    font-size: 64px;
  }

  span {
    margin-bottom: 16px;
  }
}

.empty-cart-btn {
  width: 96px;
  border-radius: 9999px;
  background-color: #0f172a;
}
</style>
