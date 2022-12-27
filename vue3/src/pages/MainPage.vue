<template>
  <video
      class="video-fluid z-depth-1"
      loop autoplay muted playsinline>
  <source src="src/assets/main_bg.mp4" type="video/mp4">
  </video>
  <div class="mainText">
    <h1>BARISTA HOUSE</h1>
    <h2>BLOG & ARTICLE</h2>
    <h2>_______________________________</h2>
    <h4>Це незалежний сайт про каву, <br> кавову культуру та кавову індустрію.</h4>
  </div>
</template>

<script>
export default {
  name: "MainPage",
}
</script>

<style scoped>
video{
  position: absolute;
  width: 1280px;
  z-index: 45;
}
.mainText{
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin-left: 100px;
  margin-top: 150px;
}
h1{
  color: black;
  font-size: 60px;
  font-weight: bold;
  z-index: 100;
}
h2{
  color: black;
  font-size: 20px;
  font-weight: bold;
  z-index: 100;
}
h4{
  color: black;
  font-size: 15px;
  z-index: 100;
  padding-top: 20px;
}
</style>

