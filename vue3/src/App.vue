<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavHeader from "@/components/NavHeader.vue";
</script>

<template>
  <header>
    <NavHeader></NavHeader>
  </header>

  <router-view></router-view>
</template>

<style scoped>
</style>
