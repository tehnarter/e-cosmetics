<script setup lang="ts">
const query = ref("")
const results = ref<{ id: number; title: string }[]>([])

const mockData = [
  { id: 1, title: "Догляд за обличчям" },
  { id: 2, title: "Догляд за волоссям" },
  { id: 3, title: "Макіяж" },
  { id: 4, title: "Догляд за тілом" },
  { id: 5, title: "Аромати" },
]

const onSearch = () => {
  results.value = mockData.filter((item) =>
    item.title.toLowerCase().includes(query.value.toLowerCase())
  )
}
</script>

<template>
  <div class="search-page">
    <header class="search-header">
      <input
        v-model="query"
        type="search"
        placeholder="Пошук..."
        class="search-input"
        @input="onSearch"
      />
    </header>

    <main class="search-content">
      <p v-if="!query" class="hint">Почніть вводити запит</p>

      <ul v-else-if="results.length" class="results">
        <li v-for="item in results" :key="item.id" class="result-item">
          {{ item.title }}
        </li>
      </ul>

      <p v-else class="empty">Нічого не знайдено</p>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.search-page {
  min-height: 50vh;
  background: #fff;
}

.search-header {
  position: sticky;
  top: 0;
  padding: 12px;
  background: #fff;
  border-bottom: 1px solid #eee;
}

.search-input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid #ddd;
  font-size: 16px;
}

.search-content {
  padding: 16px;
}

.hint,
.empty {
  text-align: center;
  color: #999;
  margin-top: 40px;
}

.results {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.result-item {
  padding: 14px;
  border-radius: 12px;
  background: #f7f7f7;
}
</style>
