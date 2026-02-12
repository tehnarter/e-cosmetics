<script setup lang="ts">
const brandsData: { id: string; srcUrl: string }[] = [
  { id: "versace", srcUrl: "/icons/versace-logo.svg" },
  { id: "zara", srcUrl: "/icons/zara-logo.svg" },
  { id: "gucci", srcUrl: "/icons/gucci-logo.svg" },
  { id: "prada", srcUrl: "/icons/prada-logo.svg" },
  { id: "calvin-klein", srcUrl: "/icons/calvin-klein-logo.svg" },
]
</script>

<template>
  <div class="brands">
    <div class="brands__container">
      <NuxtImg
        v-for="brand in brandsData"
        :key="brand.id"
        :src="brand.srcUrl"
        :alt="brand.id"
        format="svg"
        class="brands__logo"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.brands {
  background: #000;
  margin-bottom: 30px;

  &__container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 20px 0;

    // md
    @media (min-width: 768px) {
      padding: 0;
      justify-content: space-between;
    }

    padding-left: 16px;
    padding-right: 16px;

    @media (min-width: 1280px) {
      padding-left: 0;
      padding-right: 0;
    }

    gap: 28px;
  }

  &__logo {
    height: auto;
    width: auto;
    max-width: 116px;
    max-height: 26px;

    margin: 20px 0;

    // md
    @media (min-width: 768px) {
      margin: 44px 0;
    }

    // lg
    @media (min-width: 1024px) {
      max-width: 192px;
      max-height: 36px;
    }
  }
}
</style>
