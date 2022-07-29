<template>
  <div class="wedding">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/common/Header.vue';
import Main from './components/Main';
import Footer from './components/common/Footer.vue';

export default {
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style lang="scss">
@import 'assets/style/common';

</style>
