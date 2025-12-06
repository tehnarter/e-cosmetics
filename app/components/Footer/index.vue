<script setup lang="ts">
const socials = [
  { id: 1, icon: "SvgoFacebook", url: "https://facebook.com" },
  { id: 2, icon: "SvgoInstagram", url: "https://instagram.com" },
  { id: 3, icon: "SvgoTwitter", url: "https://twitter.com" },
  { id: 4, icon: "SvgoTiktok", url: "https://tiktok.com" },
]
import { onMounted } from "vue"
import gsap from "gsap"
const paymentBadges = [
  { id: 1, srcUrl: "/icons/Visa.svg" },
  { id: 2, srcUrl: "/icons/mastercard.svg" },
  { id: 3, srcUrl: "/icons/paypal.svg" },
  { id: 4, srcUrl: "/icons/applePay.svg" },
  { id: 5, srcUrl: "/icons/googlePay.svg" },
]

// OPTIONAL ANIMATION (тільки на клієнті)
onMounted(() => {
  gsap.from(".footer__brand", { opacity: 0, y: 30, duration: 0.6 })
  gsap.from(".footer__links-desktop", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    delay: 0.2,
  })
})
</script>

<template>
  <footer class="footer">
    <div class="footer__newsletter-wrapper">
      <div class="container">
        <!-- <FooterNewsLetter /> -->
      </div>
    </div>
    <div class="footer__content">
      <div class="container">
        <nav class="footer__nav">
          <div class="footer__brand">
            <h1 class="footer__logo">COSMETICS</h1>

            <p class="footer__text">
              У нас є косметика, яка підкреслить твій стиль і якою ти будеш
              пишатися. Для жінок і чоловіків.
            </p>

            <div class="footer__socials">
              <NuxtLink
                v-for="item in socials"
                :key="item.id"
                :to="item.url"
                target="_blank"
                class="footer__social"
              >
                <component :is="item.icon" />
              </NuxtLink>
            </div>
          </div>
          <div class="footer__links-desktop">
            <!-- <FooterLinksSection /> -->
          </div>

          <div class="footer__links-mobile">
            <!-- <FooterLinksSection /> -->
          </div>
        </nav>

        <hr class="footer__divider" />
        <div class="footer__bottom">
          <p class="footer__copyright">COSMETICS © Made by</p>

          <div class="footer__payments">
            <span
              v-for="item in paymentBadges"
              :key="item.id"
              class="footer__payment-item"
            >
              <NuxtImg
                :src="item.srcUrl"
                width="33"
                height="15"
                alt="payment"
                class="footer__payment-img"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: 50px;

  &__newsletter-wrapper {
    position: relative;
  }

  &__newsletter-bg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50%;
    background: #f0f0f0;
  }

  &__content {
    background: #f0f0f0;
    padding: 40px 0;
  }

  &__nav {
    display: grid;
    margin-bottom: 30px;

    @media (min-width: 1024px) {
      grid-template-columns: 3fr 9fr;
    }
  }

  &__brand {
    max-width: 250px;
  }

  &__logo {
    font-size: 32px;
    margin-bottom: 20px;
    font-weight: 700;
  }

  &__text {
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    margin-bottom: 25px;
  }

  &__socials {
    display: flex;
    gap: 10px;
  }

  &__social {
    width: 32px;
    height: 32px;
    border: 1px solid #0002;
    border-radius: 50%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.25s;

    &:hover {
      background: #000;
      color: #fff;
    }
  }

  &__links-desktop {
    display: none;

    @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding-left: 40px;
    }
  }

  &__links-mobile {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (min-width: 640px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 1024px) {
      display: none;
    }
  }

  &__divider {
    border: none;
    border-top: 1px solid #0001;
    margin: 20px 0;
  }

  &__bottom {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 640px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__copyright {
    font-size: 14px;
    text-align: center;
    color: #0006;
    margin-bottom: 10px;
  }

  &__author {
    color: #000;
    font-weight: 600;
  }

  &__payments {
    display: flex;
    gap: 10px;
  }

  &__payment-item {
    width: 46px;
    height: 30px;
    background: #fff;
    border: 1px solid #d6dce5;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__payment-img {
    max-height: 15px;
  }
}
</style>
