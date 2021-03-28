<template>
  <div class="app">
    <!-- [NOTE]
    - 라우터로 기본 설정한 view를 router-view 영역에 대체해서 보여줌 설정한게 없으면, 대체되는게 없으니 암것도 암보여짐 .app 만 보이겟지?
    - 감싸는애 class 지정해준건 임의로 영역 구분해서 보기 위해서 지은것.
    -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
  // @import "@/assets/scss/_mixins.scss";
</style>
