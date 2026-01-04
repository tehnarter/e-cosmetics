<script setup lang="ts"></script>

<template>
  <section>
    <h3 class="title">Специфікації продукту</h3>

    <TabsProductDetails />
  </section>
</template>

<style scoped lang="scss">
.title {
  font-size: 1.25rem; // text-xl
  font-weight: 700; // font-bold
  color: #000;
  margin-bottom: 1.25rem; // mb-5
}

@media (min-width: 640px) {
  .title {
    font-size: 1.5rem; // sm:text-2xl
    margin-bottom: 1.5rem; // sm:mb-6
  }
}
</style>
