<template>
  <ul class="pagination-content">
    <slot />
  </ul>
</template>

<style scoped lang="scss">
.pagination-content {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
