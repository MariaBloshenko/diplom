<template>
  <form @submit.prevent>
    <my-input
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Назва посту"
    />
    <my-input
        v-model="post.body"
        class="input"
        type="text"
        placeholder="Тут створить свій першій пост"
    />
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
import MyInput from "@/components/UI/MyInput.vue";

export default {
  components: {MyInput},
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
  },
}
</script>

<style scoped>
form{
  display: flex;
  flex-direction: column;
}

</style>
