<template>
  <div class="modal">
    <ModPost1></ModPost1>
    <ModPost2></ModPost2>
    <ModPost3></ModPost3>
  </div>
</template>

<script setup>

import ModPost1 from "@/components/Article/ModalArt1.vue";
import ModPost2 from "@/components/Article/ModalArt2.vue";
import ModPost3 from "@/components/Article/ModalArt3.vue";
</script>

<style scoped>
.modal{
  display: inline-flex;
}
</style>
