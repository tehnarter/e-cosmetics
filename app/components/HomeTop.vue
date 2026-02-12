<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import { gsap } from "gsap"

const h2 = ref(null)
const p = ref(null)
const btn = ref(null)
const stats = ref(null)
const rightImg = ref(null)

let observers = []

// універсальна функція анімації
function animateOnView(el, config) {
  if (!el) return

  // стартовий стан
  gsap.set(el, {
    opacity: config.initial.opacity ?? 1,
    y: config.initial.y || 0,
    rotate: config.initial.rotate || 0,
  })

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        gsap.to(el, {
          opacity: config.enter.opacity ?? 1,
          y: config.enter.y || 0,
          rotate: config.enter.rotate || 0,
          duration: config.duration || 0.6,
          delay: config.delay || 0,
          ease: "power3.out",
        })

        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )

  observer.observe(el)
  observers.push(observer)
}

onMounted(() => {
  if (!process.client) return

  animateOnView(h2.value, {
    initial: { y: 100, opacity: 0, rotate: 10 },
    enter: { y: 0, opacity: 1, rotate: 0 },
    duration: 0.6,
  })

  animateOnView(p.value, {
    initial: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    duration: 0.6,
    delay: 0.5,
  })

  animateOnView(btn.value, {
    initial: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    duration: 0.6,
    delay: 1,
  })

  animateOnView(stats.value, {
    initial: { y: 100, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    duration: 0.6,
    delay: 1.5,
  })

  animateOnView(rightImg.value, {
    initial: { y: 100, opacity: 0, rotate: 10 },
    enter: { y: 0, opacity: 1, rotate: 0 },
    duration: 0.8,
    delay: 2.3,
  })
})

onBeforeUnmount(() => {
  observers.forEach((o) => o.disconnect())
  observers = []
})
</script>

<template>
  <section class="top">
    <div class="top__grid top__container">
      <!-- LEFT -->
      <section class="top__left">
        <h2 ref="h2" class="top__title">
          ЗНАЙДИ КОСМЕТИКУ, ЩО ПІДКРЕСЛЮЄ ТВОЮ КРАСУ
        </h2>

        <p ref="p" class="top__text">
          Переглянь нашу різноманітну колекцію ретельно підібраних косметичних
          засобів, створених, щоб підкреслити твою індивідуальність та доповнити
          щоденний догляд.
        </p>

        <div ref="btn">
          <NuxtLink to="/shop" class="top__btn">Перейти до магазину</NuxtLink>
        </div>

        <div ref="stats" class="top__stats">
          <div class="stat">
            <span class="stat__num">
              <UiAnimatedCounter :from="0" :to="150" />+
            </span>
            <span class="stat__label">Міжнародних брендів</span>
          </div>

          <UiSeparator orientation="vertical" class="stat__sep" />

          <div class="stat">
            <span class="stat__num">
              <UiAnimatedCounter :from="0" :to="1200" />+
            </span>
            <span class="stat__label">Преміальних продуктів</span>
          </div>

          <UiSeparator
            orientation="vertical"
            class="stat__sep stat__sep--big"
          />

          <div class="stat stat--last">
            <span class="stat__num">
              <UiAnimatedCounter :from="0" :to="2500" />+
            </span>
            <span class="stat__label">Задоволених клієнтів</span>
          </div>
        </div>
      </section>

      <!-- RIGHT -->
      <section ref="rightImg" class="top__right">
        <img src="/icons/big-star.svg" alt="big star" class="star star--big" />
        <img
          src="/icons/small-star.svg"
          alt="small star"
          class="star star--small"
        />
      </section>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.top {
  padding-top: 40px;
  overflow: hidden;

  @media (min-width: 768px) {
    padding-top: 96px;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__left {
    padding: 0 16px;
  }

  &__title {
    font-size: 32px;
    margin-bottom: 20px;
    font-weight: 700;

    @media (min-width: 1024px) {
      font-size: 64px;
      line-height: 64px;
      margin-bottom: 32px;
    }
  }

  &__text {
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    margin-bottom: 24px;
    max-width: 545px;

    @media (min-width: 1024px) {
      font-size: 16px;
      margin-bottom: 32px;
    }
  }

  &__btn {
    display: inline-block;
    background: black;
    color: white;
    padding: 16px 40px;
    border-radius: 999px;
    text-align: center;
    transition: 0.3s;

    &:hover {
      background: rgba(0, 0, 0, 0.8);
    }
  }

  &__stats {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 32px;
    margin-bottom: 60px;

    @media (min-width: 768px) {
      margin-bottom: 116px;
      flex-wrap: nowrap;
    }
  }

  /* RIGHT */
  &__right {
    position: relative;
    min-height: 448px;
    background: url("/images/header-res-homepage.png") top / cover no-repeat;

    @media (min-width: 768px) {
      min-height: 428px;
      background: url("/images/header-homepage.png") top / cover no-repeat;
      padding: 0 16px;
    }
  }
}

/* Stats */
.stat {
  display: flex;
  flex-direction: column;
  margin-right: 24px;

  &__num {
    font-size: 24px;
    font-weight: 700;

    @media (min-width: 1024px) {
      font-size: 40px;
      margin-bottom: 8px;
    }
  }

  &__label {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);

    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }

  &--last {
    margin-top: 12px;

    @media (min-width: 640px) {
      margin-top: 0;
    }
  }
}

/* Separator overrides */
.stat__sep {
  height: 48px;
  background: rgba(0, 0, 0, 0.1);
  margin-right: 30px;

  &--big {
    display: none;

    @media (min-width: 640px) {
      display: block;
    }
  }
}

/* Stars */
.star {
  position: absolute;
  animation: spin 4s linear infinite;

  &--big {
    width: 76px;
    right: 28px;
    top: 48px;

    @media (min-width: 1024px) {
      width: 104px;
      right: 0;
    }
  }

  &--small {
    width: 44px;
    left: 28px;
    top: 144px;
    animation-duration: 3s;

    @media (min-width: 768px) {
      width: 56px;
      top: 224px;
    }
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
