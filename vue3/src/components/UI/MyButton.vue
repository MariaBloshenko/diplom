<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button"
}
</script>

<style scoped>
.btn{
  width: 120px;
  padding: 10px 15px;
  background: black;
  color: white;
  border: 2px solid black;
}
</style>
