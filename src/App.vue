<template>
  <div id="app">
    <Header />
    <div class="fake-header"></div>
    <keep-alive>
      <router-view class="content" />
    </keep-alive>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Vue",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      serch: "",
    };
  },
  methods: {

  },
  
};
</script>
<style lang="scss">
// Шрифт
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");

/*Обнуление*/
* {
  padding: 0;
  margin: 0;
  border: 0;
  font-family: "Lato", sans-serif;
  box-sizing: border-box;
  outline: none;
  scroll-behavior: smooth;
}
.content {
  min-height: 90vh;
}
.fake-header {
  height: 75px;
}
</style>
