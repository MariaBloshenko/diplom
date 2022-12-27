<template>
  <div class="post">
    <div>
      <div>Назва посту {{ post.title }}</div>
      <div>Опит {{ post.body }}</div>
    </div>
    <div class="postBtns">
      <my-button>Видалити пост</my-button>
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
  padding: 15px;
  border: 2px solid black;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.postBtns{

}
</style>
