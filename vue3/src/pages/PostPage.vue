<template>
  <div class="liveChatApp">
    <h1>Ласкаво просимо до живого блогу</h1>
    <my-input
        v-model="searchQuery"
        placeholder="Пошук..."
        style="margin-bottom: 30px; width: 250px"
    />
    <div><h3>Сортування</h3></div>
    <my-select
        v-model="selectedSort"
        :options="sortOptions"
        style="border: 2px black solid;"
        />
    <post-form
        @create="createPost"
    />
    <post-list
        :posts="sortAndSearchedPost"
        @remove="removePosts"
    />
    <div class="pageWrapper">
      <div
        v-for="pageNumber in totalPage"
        :key="pageNumber"
        class="page"
        :class="{
          'currentPage': page === pageNumber
        }"
        @click="changePage(pageNumber)"
      >
      {{ pageNumber }}
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from "@/components/LiveChatPage/PostForm.vue";
import PostList from "@/components/LiveChatPage/PostList.vue";
import axios from "axios";
import MyButton from "@/components/UI/MyButton.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";

export default {
  components: {
    MyInput,
    MySelect,
    MyButton,
    PostForm, PostList
  },
  data() {
    return {
      posts: [],
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 4,
      totalPage: 0,
      sortOptions: [
        {value: 'title', name: 'По назві'},
        {value: 'body', name: 'За змістом'}
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
    //Пагінація сторінок
    changePage(pageNumber) {
      this.page = pageNumber
      this.fetchPosts()
    },
    //Отримання постів із сервера
    async fetchPosts() {
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });
        //Розподіл постів по сторінках
        this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
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
    },
    sortAndSearchedPost() {
      return this.sortedPosts.filter(post => post.title.includes(this.searchQuery))
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
.appBtns{
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.pageWrapper{
  display: flex;
  margin-top: 15px;
  margin-left: 20px;
}
.page{
  border: 2px black solid;
  padding: 10px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 12px;
  bottom: 10px;
  background: black;
  color: #FFFFFF;
}
.currentPage{
  border: 7px rebeccapurple solid;
}
</style>
