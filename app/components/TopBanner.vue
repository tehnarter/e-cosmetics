<script setup lang="ts">
import { ref, onMounted } from "vue"
import gsap from "gsap"

const visible = ref(true)
const banner = ref<HTMLElement | null>(null)

const closeBanner = () => {
  gsap.to(banner.value, {
    y: -40,
    opacity: 0,
    duration: 0.45,
    ease: "power2.out",
    onComplete: () => (visible.value = false),
  })
}

onMounted(() => {
  gsap.from(banner.value, {
    y: -40,
    opacity: 0,
    duration: 0.45,
    ease: "power2.out",
  })
})
</script>

<template>
  <div v-if="visible" ref="banner" class="top-banner">
    <div class="top-banner__inner">
      <p class="top-banner__text">
        Ви переглядаєте тестову версію сайту. Контент та функціонал оновлюються.
        <!-- <NuxtLink to="#" class="top-banner__link">Зареєструватися</NuxtLink> -->
      </p>

      <!-- Кнопка закриття через UiButton -->
      <UiButton
        variant="ghost"
        size="icon"
        aria-label="close banner"
        class="top-banner__close"
        @click="closeBanner"
      >
        <img src="/icons/times.svg" alt="close" width="13" height="13" />
      </UiButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-banner {
  background: #000;
  color: #fff;
  padding: 10px 15px;
  text-align: center;
  width: 100%;
  position: relative;
  z-index: 50;

  &__inner {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  &__text {
    font-size: 14px;
    line-height: 1.4;

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  // &__link {
  //   text-decoration: underline;
  //   font-weight: 500;
  //   margin-left: 4px;
  //   cursor: pointer;
  //   transition: opacity 0.2s ease;

  //   &:hover {
  //     opacity: 0.8;
  //   }
  // }

  &__close {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 4px !important;
    opacity: 0.8;
    transition: opacity 0.2s ease;

    img {
      display: block;
    }

    &:hover {
      opacity: 1;
    }

    @media (max-width: 640px) {
      display: none;
    }
  }
}
</style>
