<template>
  <div id="app">
    <Header />
    <div id="content" class="content">
      <router-view></router-view> 
    </div>
    <Footer />

  </div>
</template>

<script>
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';

export default {
  name: 'App',
  components: {
    Header, Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Noto+Serif+KR:wght@200;300;400;500;600;700;900&display=swap');

#app {
  font-family: 'Noto Sans KR', sans-serif;
  color:black;

}


</style>
