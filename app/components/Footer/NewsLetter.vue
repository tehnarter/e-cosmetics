<script setup lang="ts">
import { ref } from "vue"

const email = ref("")
const submit = () => {
  console.log("Email:", email.value)
}
</script>

<template>
  <section class="newsletter">
    <p class="newsletter__title">ОТРИМУЙТЕ НАЙСВІЖІШІ ПРОПОЗИЦІЇ ПЕРШИМИ</p>
    <div class="newsletter__form-wrapper">
      <div class="newsletter__form">
        <div class="newsletter__input-group">
          <span class="newsletter__icon">
            <NuxtImg
              src="/icons/envelope.svg"
              width="20"
              height="20"
              alt="email"
            />
          </span>

          <input
            v-model="email"
            type="email"
            placeholder="Введіть адресу електронної пошти"
            class="newsletter__input"
          />
        </div>

        <button class="newsletter__button" @click="submit">
          Підписатися на розсилку
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.newsletter {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;

  padding: 36px 24px;
  margin: 0 auto;
  background: #000;
  border-radius: 20px;

  @media (min-width: 768px) {
    padding: 44px 60px;
    grid-template-columns: 1fr 1fr;
  }

  &__title {
    font-size: 32px;
    color: #fff;
    font-weight: 700;
    margin-bottom: 24px;

    @media (min-width: 768px) {
      font-size: 40px;
      margin-bottom: 0;
    }
  }

  &__form-wrapper {
    display: flex;
    align-items: center;
  }

  &__form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
  }

  /* INPUT GROUP */
  &__input-group {
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 50px;
    padding: 10px 14px;
    margin-bottom: 14px;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;

    img,
    .nuxt-img {
      min-width: 20px;
      min-height: 20px;
    }
  }

  &__input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: 15px;
    color: #000;

    &::placeholder {
      color: rgba(0, 0, 0, 0.4);
      font-size: 15px;

      @media (min-width: 640px) {
        font-size: 16px;
      }
    }
  }

  /* BUTTON */
  &__button {
    height: 48px;
    background: #fff;
    border-radius: 999px;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    border: none;
    color: #0f172a;
    transition: 0.25s;

    &:hover {
      background: #e5e5e5;
    }
  }
}
</style>
