<template>
  <h3>
    <slot /> 
  </h3>
</template>

<script>

export default {
  name: 'GuideSubTitle',
  components: {

  }
}
</script>

<style lang="scss" scoped>
  h3 {
    font-size: 1.6rem;
    line-height: 2.5em;
    padding: 0 1.5rem;
  }
    // 스타일 가이드 스타일 테스트
    // guide-type-line : 선으로 디자인
 .guide-type-line {
    h3 {
      background-color: $grayF9;
        border-top: 3px solid $black;
      border-bottom: 3px solid $black;
      margin: 0 -1.5rem;
      &.line-hide {
        border-top: none;
      }
    }
 }
</style>