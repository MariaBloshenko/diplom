<template>
  <div class="contactPage">
    <p>Знайшли друкарську помилку? Пишіть: m16091987m@gmail.com</p>
    <p>Telegram: @maru1609</p>
    <br>
    <hr>
    <br>
    <p>ЗАЛИШИЛИСЬ ПИТАННЯ?</p>
    <p>Якщо у вас залишилися будь-які питання, дайте нам знати, і ми обов'язково допоможемо:</p>

    <p>095 146 49 94</p>
    <p>095 369 80 14</p>
    <ModPost></ModPost>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import ModPost from "@/components/ModalWindows.vue";
export default defineComponent({
  components: {ModPost}
})
</script>

<style scoped>
*{
  height: 100%;
}
.contactPage{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  padding-top: 90px;
}
</style>
