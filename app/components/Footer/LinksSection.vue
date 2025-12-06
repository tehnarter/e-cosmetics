<script setup lang="ts">
import { onMounted, ref } from "vue"
import gsap from "gsap"

interface FooterLink {
  id: number
  label: string
  url: string
}

interface FooterLinks {
  id: number
  title: string
  children: FooterLink[]
}

const footerLinksData: FooterLinks[] = [
  {
    id: 1,
    title: "Компанія",
    children: [
      { id: 11, label: "Про нас", url: "#" },
      { id: 12, label: "Наші бренди", url: "#" },
      { id: 13, label: "Як ми працюємо", url: "#" },
      { id: 14, label: "Вакансії", url: "#" },
    ],
  },
  {
    id: 2,
    title: "Допомога",
    children: [
      { id: 21, label: "Підтримка клієнтів", url: "#" },
      { id: 22, label: "Доставка та оплата", url: "#" },
      { id: 23, label: "Умови використання", url: "#" },
      { id: 24, label: "Політика конфіденційності", url: "#" },
    ],
  },
  {
    id: 3,
    title: "FAQ",
    children: [
      { id: 31, label: "Особистий кабінет", url: "#" },
      { id: 32, label: "Відстеження замовлення", url: "#" },
      { id: 33, label: "Мої замовлення", url: "#" },
      { id: 34, label: "Оплата", url: "#" },
    ],
  },
  {
    id: 4,
    title: "Корисне",
    children: [
      { id: 41, label: "Блог про догляд", url: "#" },
      { id: 42, label: "Поради косметолога", url: "#" },
      { id: 43, label: "Підбір косметики", url: "#" },
      { id: 44, label: "Відеоогляди", url: "#" },
    ],
  },
]

const items = ref<HTMLElement[]>([])

onMounted(() => {
  if (process.client) {
    gsap.from(items.value, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
    })
  }
})
</script>

<template>
  <div class="footer-links">
    <section
      v-for="item in footerLinksData"
      :key="item.id"
      class="footer-section"
      ref="items"
    >
      <h3 class="footer-title">{{ item.title }}</h3>

      <NuxtLink
        v-for="link in item.children"
        :key="link.id"
        :to="link.url"
        class="footer-link"
        :class="{
          capitalize: link.id !== 41 && link.id !== 43,
        }"
      >
        {{ link.label }}
      </NuxtLink>
    </section>
  </div>
</template>

<style scoped lang="scss">
.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 20px;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 20px;
  font-weight: 600;
}

.footer-link {
  font-size: 15px;
  color: rgba(0, 0, 0, 0.6);
  width: fit-content;
  margin-bottom: 12px;
  transition: all 0.25s ease;

  &:hover {
    color: #000;
    transform: translateX(4px);
  }
}
</style>
