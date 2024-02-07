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
  text-align: center;
  margin-top: 60px;
}
</style>
