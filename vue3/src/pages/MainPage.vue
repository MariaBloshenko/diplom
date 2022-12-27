<template>
  <video
      class="video-fluid z-depth-1"
      loop autoplay muted playsinline>
  <source src="src/assets/background.mp4" type="video/mp4">
  </video>
  <div class="mainText">
    <h1>CHAT ROOM</h1>
    <h2>ASPIRE to INSPIRE</h2>
    <h2>_______________________________</h2>
    <h4>Це незалежний сайт, де ви <br> можете вільно висловлювати ваші думкі.</h4>
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
  color: white;
  font-size: 60px;
  font-weight: bold;
  z-index: 100;
}
h2{
  color: white;
  font-size: 20px;
  font-weight: bold;
  z-index: 100;
}
h4{
  color: white;
  font-size: 15px;
  z-index: 100;
  padding-top: 20px;
}
</style>

