<template>
  <header>
    <div class="container">
        <ul>
          <li><router-link to="/about">О нас</router-link></li>
          <li><router-link to="/article">Article Collection</router-link></li>
          <li><router-link to="/live_chat">LiveChat</router-link></li>
          <li><router-link to="/contact">Контакты</router-link></li>
          <li><router-link to="/reg">Регистрация</router-link></li>
        </ul>
      </div>
  </header>
</template>

<script>
export default {
  name: "NavHeader"
}
</script>

<style scoped>
.container{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  top: 0;
  left: 0;
  z-index: 100;
  margin: 0 auto;
  width: 100%;
  height: 100px;
  color: #FFFFFF;
  background-color: black;
}
ul{
  list-style-type: none;
  padding: 2.125rem;
}
li{
  display: inline-flex;
  justify-content: flex-end;
  margin: 0 0.8rem;
  cursor: pointer;
  font-size: 20px;
  color: #FFFFFF;
  font-weight: 700;
}
a{
  text-decoration: none;
  color: #FFFFFF;
  font-weight: 700;
}
a:hover {
  text-decoration: none;
  color: #CC9AA6FF;
}
li:hover {
  text-decoration: none;
  color: #CC9AA6FF;
}
@media (max-width:1024px) {
  li{
    font-size: 15px;
    font-weight: 600;
  }
  a{
    font-weight: 600;
  }
}
@media (max-width:500px) {
  .footerMenu ul{
    display: flex;
    margin-top: 10px;
    margin-bottom: 20px;
  }
}
</style>
