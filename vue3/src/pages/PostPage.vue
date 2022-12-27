<template>
  <div class="liveChatApp">
    <h1>Ласкаво просимо до живого блогу</h1>
    <my-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    <post-form
          @create="createPost"
      />
    <post-list
        :posts="sortedPosts"
        @remove="removePosts"
    />
  </div>
</template>

<script>
import PostForm from "@/components/LiveChatPage/PostForm.vue";
import PostList from "@/components/LiveChatPage/PostList.vue";
import axios from "axios";
import MyButton from "@/components/UI/MyButton.vue";
import MySelect from "@/components/UI/MySelect.vue";
export default {
  components: {
    MySelect,
    MyButton,
    PostForm, PostList
  },
  data() {
    return {
      posts: [],
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'По назві'},
        {value: 'body', name: 'По змісту'}
      ]
    }
  },
  methods: {
    //Створення функції додавання посту
    createPost(post) {
      console.log(post)
      this.posts.push(post)
    },
    //Створення функції видалення посту
    removePosts(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    //Отримання постів із сервера
    async fetchPosts() {
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        console.log(response)
        this.posts = response.data;
      } catch (e) {
        alert('Помилка')
      }
    }
  },
  //Автоматичне відвантаження постів
  // під час відкриття сторінки
  mounted() {
    this.fetchPosts();
  },
//Повернення відфільтрованого масиву постів
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    }
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
.appBtns{
  margin: 15px;
  display: flex;
  justify-content: space-between;
}
</style>
