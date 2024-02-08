<!-- TODO : 시간날 때 작업해 둘 -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <section class="guide-section">
      <h2 class="section-title">color system</h2>
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
      <h2 class="section-title">shadows</h2>
      <ol class="test shadows">
        <li v-for="(shadow, index) in shadows" :key="index">{{ shadow }}</li>
      </ol>
    </section>
    <section class="guide-section">
      <h2 class="section-title">typography</h2>
      <div>
        <p>데이터패브릭에서 제작한 모든 서비스와 문서에는 Pretendard 폰트를 사용합니다.</p>
        <p>데이터패브릭에서 제작한 모든 서비스와 문서에는 Pretendard 폰트를 사용합니다.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {

  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      shadows: [
        'shadow-sm',
        'shadow-md',
        'shadow-lg',
        'shadow-xl'
      ]
    };
  }
};
</script>

<style scoped></style>
