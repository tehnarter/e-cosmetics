<script setup lang="ts">
const { t } = useI18n()

const footerSections = [
  {
    id: 1,
    key: "footer.company",
    links: [
      { id: 11, key: "about", url: "#" },
      { id: 12, key: "advantages", url: "#" },
      { id: 13, key: "blog", url: "#" },
      { id: 14, key: "careers", url: "#" },
    ],
  },
  {
    id: 2,
    key: "footer.help",
    links: [
      { id: 21, key: "support", url: "#" },
      { id: 22, key: "shipping", url: "#" },
      { id: 23, key: "terms", url: "#" },
      { id: 24, key: "privacy", url: "#" },
    ],
  },
  {
    id: 3,
    key: "footer.faq",
    links: [
      { id: 31, key: "account", url: "#" },
      { id: 32, key: "tracking", url: "#" },
      { id: 33, key: "orders", url: "#" },
      { id: 34, key: "payment", url: "#" },
    ],
  },
  {
    id: 4,
    key: "footer.resources",
    links: [
      { id: 41, key: "care_tips", url: "#" },
      { id: 42, key: "cosmetics_guide", url: "#" },
      { id: 43, key: "beauty_guide", url: "#" },
      { id: 44, key: "video_reviews", url: "#" },
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
  <section
    v-for="section in footerSections"
    :key="section.id"
    class="footer-section"
    ref="items"
  >
    <h3 class="footer-title">{{ t(section.key + ".title") }}</h3>

    <NuxtLink
      v-for="link in section.links"
      :key="link.id"
      :to="link.url"
      class="footer-link"
      :class="{ capitalize: link.id !== 41 && link.id !== 43 }"
    >
      {{ t(section.key + "." + link.key) }}
    </NuxtLink>
  </section>
</template>

<style scoped lang="scss">
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
