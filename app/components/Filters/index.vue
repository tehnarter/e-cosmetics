<script setup lang="ts">
onMounted(() => {
  // GSAP анімація появи кожного блоку
  gsap.from(".filter-section", {
    opacity: 0,
    y: 20,
    duration: 0.4,
    stagger: 0.15,
    ease: "power2.out",
  })
})
</script>

<template>
  <div class="filters">
    <hr />
    <div class="filter-section">
      <FiltersCategories />
    </div>

    <hr />

    <div class="filter-section">
      <FiltersPrice />
    </div>

    <hr />

    <div class="filter-section">
      <FiltersColors />
    </div>

    <hr />

    <div class="filter-section">
      <FiltersSize />
    </div>

    <hr />

    <div class="filter-section">
      <FiltersDressStyle />
    </div>

    <button type="button" class="apply-btn">Apply Filter</button>
  </div>
</template>

<style lang="scss" scoped>
.filters {
  width: 100%;
}

hr {
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin: 15px;
}
.apply-btn {
  width: 100%;
  background: #000;
  color: #fff;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 0;
  height: 48px;
  cursor: pointer;
  transition: background 0.25s;

  &:hover {
    background: #222;
  }
}
</style>
