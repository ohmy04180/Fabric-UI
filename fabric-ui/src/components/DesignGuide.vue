<!-- TODO : 시간날 때 작업해 둘 -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <section class="guide-section">
      <p>color system</p>
      <ol class="test">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </section>
    <section class="guide-section">
      <ol class="test shadows">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </section>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<style scoped></style>
