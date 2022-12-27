<template>
  <div class="post" v-for="post in posts">
    <div>Назва посту {{ post.title }}</div>
    <div>Опит {{ post.body }}</div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.post{
  padding: 15px;
  border: 2px solid black;
  margin-top: 15px;
}
</style>
