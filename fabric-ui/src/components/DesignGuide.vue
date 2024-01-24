<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>디자인 가이드를 보여줄 페이지 입니다.</p>
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
