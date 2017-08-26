<template>
  <div id="app">
    <div>
      <button type="button" @click="toggleContents">Toggle contents</button>
    </div>

    <img src="./assets/logo.png" v-if="showContents">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {};
  },
  computed: {
    showContents() {
      return this.$store.getters.showContents;
    },
  },
  methods: {
    toggleContents() {
      this.$store.dispatch('toggleContents');
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
