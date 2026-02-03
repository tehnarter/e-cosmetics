<script setup lang="ts">
const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
  } else {
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light")
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    isDark.value = true
    document.documentElement.classList.add("dark")
  }
})
</script>

<template>
  <div class="b-theme__switcher" @click="toggleTheme">
    <div class="tumbler__wrapper" :class="{ dark: isDark }">
      <SvgoSun filled class="icon sun" />
      <SvgoMoon filled class="icon moon" />
      <div class="tumbler"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.b-theme__switcher {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.tumbler__wrapper {
  width: 38px;
  height: 20px;
  border-radius: 30px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 1px;
  background-color: #000;
  transition: background-color 0.3s;

  &.dark {
    background-color: #5e5a5a;
  }
  &:hover {
    background-color: var(--hover-color);
  }
  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;

    &.sun {
      left: 3px;
    }
    &.moon {
      right: 3px;
    }
  }
}

.tumbler {
  width: 18px;
  height: 18px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 1px;
  left: 1px;
  transition:
    transform 0.3s,
    background-color 0.3s;
  z-index: 2;

  .tumbler__wrapper.dark & {
    transform: translateX(18px);
  }
}
</style>
