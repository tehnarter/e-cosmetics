<script setup lang="ts"></script>

<template>
  <ClientOnly>
    <UiDrawer>
      <UiDrawerTrigger>
        <button
          type="button"
          class="mobile-filters-trigger"
          aria-label="Open filters"
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="sidebar-icon"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="4" y1="21" x2="4" y2="14"></line>
            <line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line>
            <line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line>
            <line x1="9" y1="8" x2="15" y2="8"></line>
            <line x1="17" y1="16" x2="23" y2="16"></line>
          </svg>
        </button>
      </UiDrawerTrigger>

      <UiDrawerOverlay />

      <UiDrawerContent class="mobile-filters">
        <UiDrawerHeader>
          <div class="mobile-filters__header">
            <span class="mobile-filters__title">Filters</span>
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="sidebar-icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
          </div>

          <UiDrawerTitle class="sr-only">Filters</UiDrawerTitle>
          <UiDrawerDescription class="sr-only">
            Product filters
          </UiDrawerDescription>
        </UiDrawerHeader>

        <div class="mobile-filters__body">
          <Filters />
        </div>
      </UiDrawerContent>
    </UiDrawer>
  </ClientOnly>
</template>

<style scoped lang="scss">
/* Trigger */
.mobile-filters-trigger {
  width: 32px;
  height: 32px;
  padding: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 9999px;
  background-color: #f0f0f0;
  color: #000;

  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }

  &__icon {
    width: 24px;
    height: 24px;
    opacity: 0.4;
  }
}

/* Drawer */
.mobile-filters {
  max-height: 90%;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    color: #000;
  }

  &__icon-muted {
    font-size: 24px;
    color: rgba(0, 0, 0, 0.4);
  }

  &__body {
    max-height: 90%;
    overflow-y: auto;

    width: 100%;
    padding: 20px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 768px) {
      padding: 24px;
      gap: 24px;
    }
  }
}
.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
</style>
