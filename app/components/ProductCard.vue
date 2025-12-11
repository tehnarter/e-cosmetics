<script setup lang="ts">
interface Discount {
  percentage: number
  amount: number
}

interface Product {
  id: number
  title: string
  price: number
  rating: number
  srcUrl: string
  discount: Discount
}

const props = defineProps<{
  data: Product
}>()

const slug = props.data.title.split(" ").join("-")
</script>

<template>
  <NuxtLink :to="`/shop/product/${data.id}/${slug}`" class="card">
    <div class="card-image">
      <NuxtImg
        :src="data.srcUrl"
        width="295"
        height="298"
        class="img"
        :alt="data.title"
      />
    </div>

    <strong class="card-title">{{ data.title }}</strong>

    <div class="rating">
      <UiRating :value="data.rating" :readonly="true" :maxStars="5" />
      <span class="rating-value">
        {{ data.rating.toFixed(1) }}<span class="max">/5</span>
      </span>
    </div>

    <div class="price">
      <span class="current">
        {{
          data.discount.percentage > 0
            ? `$${Math.round(data.price - (data.price * data.discount.percentage) / 100)}`
            : data.discount.amount > 0
              ? `$${data.price - data.discount.amount}`
              : `$${data.price}`
        }}
      </span>

      <span
        v-if="data.discount.percentage > 0 || data.discount.amount > 0"
        class="old"
      >
        ${{ data.price }}
      </span>

      <span v-if="data.discount.percentage > 0" class="badge">
        -{{ data.discount.percentage }}%
      </span>

      <span v-else-if="data.discount.amount > 0" class="badge">
        -${{ data.discount.amount }}
      </span>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.card-image {
  background: #f0eeed;
  border-radius: 20px;
  width: 100%;
  max-width: 295px;
  aspect-ratio: 1/1;
  margin-bottom: 16px;
  overflow: hidden;

  .img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
}

.card-title {
  font-weight: 700;
  font-size: 20px;
  color: #000;
}

.rating {
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;

  .rating-value {
    margin-left: 12px;
    font-size: 14px;
    color: #000;

    .max {
      color: rgba(0, 0, 0, 0.6);
    }
  }
}

.price {
  display: flex;
  align-items: center;
  gap: 8px;

  .current {
    font-size: 24px;
    font-weight: 700;
    color: #000;
  }

  .old {
    font-size: 24px;
    color: rgba(0, 0, 0, 0.4);
    text-decoration: line-through;
  }

  .badge {
    background: rgba(255, 51, 51, 0.1);
    color: #ff3333;
    padding: 6px 14px;
    font-size: 12px;
    border-radius: 999px;
    font-weight: 500;
  }
}
</style>
