<template>
  <div v-if="posts.length > 0">
    <h1>Сторінка з постами</h1>
    <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else style="color: purple">Наразі постів немає. Створить перший!</h2>
</template>

<script>
import PostItem from "@/components/LiveChatPage/PostItem.vue";

export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
