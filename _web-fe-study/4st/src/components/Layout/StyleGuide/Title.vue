<template>
  <h2>
    <slot /> 
  </h2>
</template>

<script>

export default {
  name: 'GuideTitle',
  components: {

  }
}
</script>

<style lang="scss" scoped>
  h2 {
    position: sticky;
    top: 0;
    font-size: 3rem;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 2;
    background: #fff;
    padding: 0 1.5rem;
    z-index: 1;
  }
      // 스타일 가이드 스타일 테스트
    // guide-type-line : 선으로 디자인
 .guide-type-line {
    h2 {
        border-bottom: 3px solid $black;
        margin: 0 -1.5rem;
      }
 }
</style>