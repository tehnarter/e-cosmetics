<script setup lang="ts">
onMounted(async () => {
  const gsap = (await import("gsap")).default
  const ScrollTrigger = (await import("gsap/ScrollTrigger")).default

  gsap.registerPlugin(ScrollTrigger)

  gsap.from(".title", {
    y: 100,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: ".title",
      start: "top 90%",
      once: true,
    },
  })

  gsap.from(".row-1", {
    y: 100,
    opacity: 0,
    duration: 0.6,
    delay: 0.4,
    scrollTrigger: {
      trigger: ".row-1",
      start: "top 90%",
      once: true,
    },
  })

  gsap.from(".row-2", {
    y: 100,
    opacity: 0,
    duration: 0.6,
    delay: 0.8,
    scrollTrigger: {
      trigger: ".row-2",
      start: "top 90%",
      once: true,
    },
  })
})
</script>

<template>
  <div class="dress-style">
    <section class="wrapper">
      <h2 class="title integralCF">ОБИРАЙ ЗА СТИЛЕМ</h2>

      <div class="row row-1">
        <DressStyleCard
          title="Щоденний"
          url="/shop#casual"
          className="card-1"
        />
        <DressStyleCard
          title="Офіційний"
          url="/shop#formal"
          className="card-2"
        />
      </div>

      <div class="row row-2">
        <DressStyleCard title="Вечірній" url="/shop#party" className="card-3" />
        <DressStyleCard title="Спорт" url="/shop#gym" className="card-4" />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.dress-style {
  padding: 0 16px;

  @media (min-width: 1280px) {
    padding: 0;
  }
}

.wrapper {
  max-width: var(--frame-width, 1440px);
  margin: 0 auto;
  background: #f0f0f0;
  padding: 40px 24px 24px;
  border-radius: 40px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 70px;
  }
}

.title {
  font-size: 32px;
  line-height: 36px;
  margin-bottom: 32px;
  text-transform: capitalize;

  @media (min-width: 768px) {
    font-size: 48px;
    margin-bottom: 56px;
  }
}

.row {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 20px;
  }

  @media (min-width: 768px) {
    height: 289px;
    margin-bottom: 24px;
  }
}

/* BACKGROUNDS */
.card-1 {
  background-image: url("/images/dress-style-1.png");
  height: 190px;
  @media (min-width: 768px) {
    max-width: 260px;
    height: 100%;
  }
  @media (min-width: 1024px) {
    max-width: 360px;
    height: 100%;
  }
  @media (min-width: 1280px) {
    max-width: 407px;
    height: 100%;
  }
}

.card-2 {
  background-image: url("/images/dress-style-2.png");
  height: 190px;
  @media (min-width: 768px) {
    max-width: 684px;
    height: 100%;
  }
}

.card-3 {
  height: 190px;
  background-image: url("/images/dress-style-3.png");

  @media (min-width: 768px) {
    max-width: 684px;
    height: 100%;
  }
}

.card-4 {
  height: 190px;
  background-image: url("/images/dress-style-4.png");

  @media (min-width: 768px) {
    max-width: 260px;
    height: 100%;
  }
  @media (min-width: 1024px) {
    max-width: 360px;
    height: 100%;
  }
  @media (min-width: 1280px) {
    max-width: 407px;
    height: 100%;
  }
}
</style>
