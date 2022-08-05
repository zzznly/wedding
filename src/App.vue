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
  },
  methods: {
    setScreenSize() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    },
    disableScroll () {
      document.querySelector('body').addEventListener('touchmove', this.removeEvent, { passive: false });
      document.querySelector('body').addEventListener('onclick', this.removeEvent, { passive: false });
      document.querySelector('body').addEventListener('mousewheel', this.removeEvent, { passive: false });
    },
    removeEvent (e) {
      e.preventDefault();
      e.stopPropagation();
    },
    enableScroll () {
      document.querySelector('body').removeEventListener('touchmove', this.removeEvent);
      document.querySelector('body').removeEventListener('onclick', this.removeEvent);
      document.querySelector('body').removeEventListener('mousewheel', this.removeEvent);
    }
  },

  created() {
    this.setScreenSize();
    this.disableScroll();
    this.removeEvent();
    this.enableScroll();
  }
}
</script>

<style lang="scss">
@import 'assets/style/common';

</style>
