<template>
  <div class="wedding">
    <Header></Header>
    <router-view></router-view>
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
  setup() {
    const disableScroll = () => {
      document.querySelector('body').addEventListener('touchmove', this.removeEvent, { passive: false });
      document.querySelector('body').addEventListener('onclick', this.removeEvent, { passive: false });
      document.querySelector('body').addEventListener('mousewheel', this.removeEvent, { passive: false });
    };

    const removeEvent = e => {
      e.preventDefault();
      e.stopPropagation();
    };

    const enableScroll = () => {
      document.querySelector('body').removeEventListener('touchmove', this.removeEvent);
      document.querySelector('body').removeEventListener('onclick', this.removeEvent);
      document.querySelector('body').removeEventListener('mousewheel', this.removeEvent);
    }
    return {
      disableScroll,
      removeEvent,
      enableScroll
    }
  }
}
</script>

<style lang="scss">
@import 'assets/styles/common';
//@import 'assets/'

</style>
