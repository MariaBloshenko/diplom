<template>
  <div id="app">
    <button class="btnModalPost" @click="showModal = true">Пропонуємо вам ознайомитись із політикою конфіденційності</button>
  </div>
  <transition name="fade" appear>
    <div class="modalOverlay" v-if="showModal" @click="showModal = false"></div>
  </transition>
  <transition class="smallSlide" appear>
    <div class="modalWindow" v-if="showModal">
      <h1>Загальні положення політики конфіденційності</h1>
      <p>Метою Політики є забезпечення належного захисту інформації про Користувачів, у тому числі їх персональних даних, від несанкціонованого доступу та розголошення.</p>
      <br>
      <p>Відносини, пов'язані зі збиранням, зберіганням, розповсюдженням та захистом інформації про Користувачів, регулюються Політикою, іншими офіційними документами Адміністрації та чинним законодавством.</p>
      <br>
      <p>Використовуючи цей сервіс з реєстрацією та без, Користувач висловлює свою згоду з усіма умовами Політики. У разі незгоди Користувача з умовами Політики використання сервісу має бути негайно припинено.</p>
      <button class="btnExtra" @click="showModal = false">Закрыть окно</button>
    </div>
  </transition>

</template>

<script>
export default {
  name: "ModPost",
  el: "#app",
  data(){
    return{
      showModal: false
    }
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
body{
  font-family: 'monospace', sans-serif;
}
#app{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;
  overflow-x: hidden;
}
.btnModalPost,
.btnExtra{
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  padding: 15px 25px;
  background-image: linear-gradient(to right, #CC2E5D, #FF5858);
  border-radius: 8px;
  color: #FFF;
  font-size: 15px;
  font-weight: 700;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}
.modalOverlay{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}
.modalWindow{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 100%;
  max-width: 900px;
  background-color: #FFF;
  border-radius: 16px;
  padding: 25px;
}
.btnExtra:hover,
.btnModalPost:hover{
  box-shadow: 6px 6px rgba(0, 0, 0, 0.5);
  transition: transform .3s;
}
h1{
  color: #222;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 15px;
}
p{
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
}

</style>
