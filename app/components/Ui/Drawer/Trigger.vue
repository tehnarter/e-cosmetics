<script setup lang="ts">
import { inject } from "vue"

const drawer = inject<any>("drawer")
</script>

<template>
  <span @click="drawer?.open()">
    <slot />
  </span>
</template>
