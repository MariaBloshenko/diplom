<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div>НАЗВА ПОСТУ: {{ post.title }}</div>
      <div>ОПИС: {{ post.body }}</div>
    </div>
    <!--Створення кнопки видалення посту -->
    <div>
      <my-button
      @click="$emit('remove', post)">
        Видалити пост
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post{
  padding: 7px;
  border: 2px solid black;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
