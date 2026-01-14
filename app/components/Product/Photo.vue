<script setup lang="ts">
import type { Product } from "~~/types/product.types"

const props = defineProps<{ data: Product }>()

const selected = ref<string>(props.data.srcUrl)
const rootRef = ref<HTMLElement | null>(null)

const selectPhoto = (photo: string) => {
  selected.value = photo

  if (!rootRef.value) return
  const mainImage = rootRef.value.querySelector(".photo-section__main img")

  if (mainImage) {
    gsap.fromTo(
      mainImage,
      { opacity: 0.6, scale: 0.97 },
      { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" }
    )
  }
}

onMounted(() => {
  if (!rootRef.value) return

  gsap.from(rootRef.value.querySelectorAll(".photo-section__thumb"), {
    opacity: 0,
    y: 12,
    stagger: 0.05,
    duration: 0.4,
    ease: "power2.out",
  })
})
</script>

<template>
  <div ref="rootRef" class="photo-section">
    <div
      v-if="data.gallery && data.gallery.length"
      class="photo-section__thumbs"
    >
      <button
        v-for="photo in data.gallery"
        :key="photo"
        type="button"
        class="photo-section__thumb"
        @click="selectPhoto(photo)"
      >
        <img :src="photo" :alt="data.title" loading="lazy" />
      </button>
    </div>

    <div class="photo-section__main">
      <img :src="selected" :alt="data.title" loading="eager" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.photo-section {
  display: flex;
  flex-direction: column-reverse;
  gap: 0.75rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0.875rem;
  }

  &__thumbs {
    display: flex;
    justify-content: center;
    gap: 0.75rem;

    @media (min-width: 1024px) {
      flex-direction: column;
      justify-content: flex-start;
    }
  }

  &__thumb {
    background: #f0eeed;
    border-radius: 13px;
    width: 111px;
    height: 106px;
    overflow: hidden;
    border: none;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }

    @media (min-width: 1280px) {
      border-radius: 20px;
      width: 152px;
      height: 167px;
    }
  }

  &__main {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0eeed;
    border-radius: 13px;
    width: 100%;
    max-height: 530px;
    min-height: 330px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }

    @media (min-width: 640px) {
      border-radius: 20px;
    }

    @media (min-width: 1024px) {
      min-height: 380px;
    }

    @media (min-width: 1280px) {
      min-height: 530px;
    }
  }
}
</style>
