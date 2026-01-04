<script setup lang="ts">
interface Review {
  user: string
  rating: number
  content: string
  date?: string
}

const props = defineProps<{
  blurChild?: unknown
  isAction?: boolean
  isDate?: boolean
  data: Review
  className?: string
}>()

const { blurChild, isAction = false, isDate, data } = props
</script>

<template>
  <div class="review-card">
    <div v-if="blurChild" class="blur-layer">
      <slot name="blur">{{ blurChild }}</slot>
    </div>

    <div class="header">
      <UiRating :value="data.rating" :readonly="true" :maxStars="5" />
      <UiButton v-if="isAction" type="button" class="action-btn"
        ><svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          class="text-muted-xl"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="256" cy="256" r="48"></circle>
          <circle cx="416" cy="256" r="48"></circle>
          <circle cx="96" cy="256" r="48"></circle></svg
      ></UiButton>
    </div>

    <div class="user">
      <strong>{{ data.user }}</strong>
      <span class="checkmark">✔</span>
    </div>

    <p class="content">{{ data.content }}</p>

    <p v-if="isDate" class="date">Опубліковано {{ data.date }}</p>
  </div>
</template>

<style scoped lang="scss">
.review-card {
  position: relative;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .blur-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(2px);
    z-index: 10;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    .action-btn {
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: rgba(0, 0, 0, 0.4);
    }
  }

  .user {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    strong {
      font-size: 1rem;
      margin-right: 4px;
    }

    .checkmark {
      color: #01ab31;
      font-size: 1.2rem;
    }
  }

  .content {
    font-size: 0.875rem;
    color: rgba(0, 0, 0, 0.6);
  }

  .date {
    font-size: 0.875rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
    margin-top: 16px;
  }
}
.text-muted-xl {
  color: rgba(0, 0, 0, 0.4);
  font-size: 1.5rem;
}
</style>
