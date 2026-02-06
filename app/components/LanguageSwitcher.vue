<script setup>
const { locale, defaultLocale } = useI18n()
const route = useRoute()

const locales = [
  { code: "ua", label: "🇺🇦 UA" },
  { code: "en", label: "🇬🇧 EN" },
]

const switchLocale = computed(() =>
  locales.find((l) => l.code !== locale.value)
)

const getLocalePath = (code) => {
  const currentPath = route.fullPath
  const currentLocale = locale.value

  const pathWithoutPrefix =
    currentLocale !== defaultLocale
      ? currentPath.replace(new RegExp(`^/${currentLocale}`), "") || "/"
      : currentPath

  return code === defaultLocale
    ? pathWithoutPrefix
    : `/${code}${pathWithoutPrefix}`
}
</script>

<template>
  <NuxtLink
    v-if="switchLocale"
    :to="getLocalePath(switchLocale.code)"
    class="language-switch"
  >
    {{ switchLocale.label }}
  </NuxtLink>
</template>

<style scoped lang="scss">
.language-switch {
  padding: 0.4rem 0.8rem;
  border-radius: 0.4rem;
  font-family: var(--font-heading);
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: var(--hover-color);
  }
}
</style>
