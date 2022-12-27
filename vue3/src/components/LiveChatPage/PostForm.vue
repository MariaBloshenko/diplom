<template>
  <form @submit.prevent>
    <input
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Назва посту"
    >
    <input
        v-model="post.body"
        class="input"
        type="text"
        placeholder="Тут створить свій першій пост"
    >
    <my-button
        class="btn"
        style="align-self: flex-end; margin-top: 15px;"
        @click="createPost"
    >
      Створити пост
    </my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  // Створення нового посту, оживлення кнопки
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>
form{
  display: flex;
  flex-direction: column;
}
.input{
  width: 100%;
  border: 2px solid black;
  margin-top: 15px;
  padding: 10px 15px;
}
</style>
