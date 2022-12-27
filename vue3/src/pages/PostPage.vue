<template>
  <div class="liveChatApp">
    <post-form
        @create="createPost"
    />
    <post-list
        :posts="posts"
    />
  </div>
</template>

<script>
import PostForm from "@/components/LiveChatPage/PostForm.vue";
import PostList from "@/components/LiveChatPage/PostList.vue";
export default {
  components: {
    PostForm, PostList
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'qqq1', body: 'www1'},
        {id: 2, title: 'qqq2', body: 'www2'},
        {id: 3, title: 'qqq3', body: 'www3'}
      ],
    }
  },
  methods: {
    createPost(post) {
      console.log(post)
      this.posts.push(post)
    },
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.liveChatApp{
  padding: 20px;
}

</style>
