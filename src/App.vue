<template>
  <MsHeader></MsHeader>
  <MsSlider></MsSlider>
  <router-view></router-view>
  <ms-footer></ms-footer>
</template>

<script>
import MsFooter from './components/layouts/ms-footer.vue';
import MsHeader from "./components/layouts/ms-header.vue";
import MsSlider from "./components/layouts/ms-slider.vue";

export default {
  name: "App",
  components: {
    MsHeader,
    MsSlider,
    MsFooter
  },
};
</script>
<style>
  @import url('../src/assets/css/main.css');
</style>
