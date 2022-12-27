<template>
  <div id="demo">
    <button @click="show = !show">Переключить отображение</button>
    <transition name="bounce">
      <p v-if="show">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis
        enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi
        tristique senectus et netus.
      </p>
    </transition>
  </div>
</template>

<script>
const Demo = {
  data() {
    return {
      show: true
    }
  }
}

Vue.createApp(Demo).mount('#demo')
</script>

<style scoped>
button{
  text-align: center;
  text-transform: uppercase;
  font-size: 13px;
  background-color: black;
  padding: 10px 15px;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
  line-height: 1.5;
  text-decoration: none;
  margin-top: 50px;
  letter-spacing: 1px;
  border-radius: 5px;
  color: #fff;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
