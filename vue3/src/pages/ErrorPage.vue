<template>
  <h1>404 Error Page</h1>
  <section class="errorContainer">
    <span class="four"><span class="screen-reader-text">4</span></span>
    <span class="zero"><span class="screen-reader-text">0</span></span>
    <span class="four"><span class="screen-reader-text">4</span></span>
  </section>
  <div class="linkContainer">
    <a
        class="moreLink">
      <router-link
          to="/article">
        Visit the original articles
      </router-link>
    </a>
  </div>
</template>

<script setup>
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  height: 100%;
}
.errorContainer{
  text-align: center;
  font-size: 106px;
  font-weight: 800;
  margin: 70px 15px;
}
.errorContainer > span{
  display: inline-block;
  position: relative;
}
.errorContainer > span.four{
  width: 136px;
  height: 43px;
  border-radius: 999px;
  background:
      linear-gradient(140deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 43%, transparent 44%, transparent 100%),
      linear-gradient(105deg, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.06) 41%, rgba(0, 0, 0, 0.07) 76%, transparent 77%, transparent 100%),
      linear-gradient(to right, #d89ca4, #e27b7e);
}
.errorContainer > span.four:before,
.errorContainer > span.four:after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 999px;
}
.errorContainer > span.four:before{
  width: 43px;
  height: 156px;
  left: 60px;
  bottom: -43px;
  background:
      linear-gradient(128deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 40%, transparent 41%, transparent 100%),
      linear-gradient(116deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 50%, transparent 51%, transparent 100%),
      linear-gradient(to top, #99749D, #B895AB, #CC9AA6, #D7969E, #E0787F);
}
.errorContainer > span.four:after{
  width: 137px;
  height: 43px;
  transform: rotate(-49.5deg);
  left: -18px;
  bottom: 36px;
  background: linear-gradient(to right, #99749D, #B895AB, #CC9AA6, #D7969E, #E0787F);
}
.errorContainer > span.zero{
  vertical-align: text-top;
  width: 156px;
  height: 156px;
  border-radius: 999px;
  background: linear-gradient(-45deg, transparent 0%, rgba(0, 0, 0, 0.06) 50%,  transparent 51%, transparent 100%),
  linear-gradient(to top right, #99749D, #99749D, #B895AB, #CC9AA6, #D7969E, #ED8687, #ED8687);
  overflow: hidden;
  animation: bgshadow 5s infinite;
}
.errorContainer > span.zero:before{
  content: '';
  display: block;
  position: absolute;
  transform: rotate(45deg);
  width: 90px;
  height: 90px;
  left: 0;
  bottom: 0;
  background:
      linear-gradient(95deg, transparent 0%, transparent 8%, rgba(0, 0, 0, 0.07) 9%, transparent 50%, transparent 100%),
      linear-gradient(85deg, transparent 0%, transparent 19%, rgba(0, 0, 0, 0.05) 20%, rgba(0, 0, 0, 0.07) 91%, transparent 92%, transparent 100%);
}
.errorContainer > span.zero:after{
  content: '';
  display: block;
  position: absolute;
  border-radius: 999px;
  width: 70px;
  height: 70px;
  left: 43px;
  bottom: 43px;
  background: #FDFAF5;
  box-shadow: -2px 2px 2px 0 rgba(0, 0, 0, 0.1);
}
.screen-reader-text {
  position: absolute;
  top: -9999em;
  left: -9999em;
}
@keyframes bgshadow{
  0% {
    box-shadow: inset -160px 160px 0 5px rgba(0, 0, 0, 0.4);
  }
  45% {
    box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0.1);
  }
  55% {
    box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0.1);
  }
  100% {
    box-shadow: inset 160px -160px 0 5px rgba(0, 0, 0, 0.4);
  }
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
body{
  background-color: #FDFAF5;
  margin-bottom: 50px;
}
html, button, input, select, textarea{
  font-family: 'Montserrat', Helvetica, sans-serif;
  color: #bbb;
}
h1{
  text-align: center;
  margin: 30px 15px;
}
.linkContainer{
  text-align: center;
}
a.moreLink{
  text-transform: uppercase;
  font-size: 13px;
  background-color: #de7e85;
  padding: 10px 15px;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
  line-height: 1.5;
  text-decoration: none;
  margin-top: 50px;
  letter-spacing: 1px;
  border-radius: 5px;
}
.linkContainer a{
  text-decoration: none;
  color: #fff;
}
.linkContainer a:hover{
  text-decoration: none;
  color: #181818;
}
</style>
