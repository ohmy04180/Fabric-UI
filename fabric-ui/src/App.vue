<template>
  <design-guide msg="Design Guide" />
</template>
<script>
import DesignGuide from "./components/DesignGuide.vue";

export default {
  name: "App",
  components: {
    DesignGuide
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
