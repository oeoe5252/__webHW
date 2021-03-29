<template>
  <span>
    <slot /> 
  </span>
</template>

<script>

export default {
  name: 'GuideSubDescription',
  components: {

  }
}
</script>

<style lang="scss" scoped>
  span {
    font-size: 1.2rem;
    line-height: 2.5em;
    padding-left: 1em;
    color: $grayA;
  }
    // 스타일 가이드 스타일 테스트
    // guide-type-line : 선으로 디자인
 .guide-type-line {

 }
</style>