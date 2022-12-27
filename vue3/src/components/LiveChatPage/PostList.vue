<template>
  <div v-if="posts.length > 0">
    <h1>Сторінка з постами</h1>
    <my-input
        v-model="searchQuery"
    />
    <transition-group name="postList">
      <post-item
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <h2 v-else style="color: purple">Наразі постів немає. Створить перший!</h2>
</template>

<script>
import PostItem from "@/components/LiveChatPage/PostItem.vue";
import MyInput from "@/components/UI/MyInput.vue";

export default {
  components: {MyInput, PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.postList-item {
  display: inline-block;
  margin-right: 10px;
}
.postList-enter-active,
.postList-leave-active {
  transition: all 0.7s ease;
}
.postList-enter-from,
.postList-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.postList-move {
  transition: transform 0.8s ease;
}
</style>
