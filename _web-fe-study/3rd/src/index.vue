<template>
  <div id="test">
    <TheHeader></TheHeader>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Index" />
  </div>
</template>

<script>
// 해당 인스턴스에서 사용할 컴포넌트 import
// 너무나 공통인것, import말구 layout으로 쓸수 있는 방법찾아보기
import TheHeader from "@/layouts/TheHeader.vue";
import HelloWorld from "@/components/sample/HelloWorld.vue";

export default { // 아래 정의된 객체{}를 export
  name: "Index",  // vue 개발자 도구에 표시되는 이름
  components: {   // 상단 import된 컴포넌트 사용 정의?
    HelloWorld, TheHeader
  },
};
</script>

<style lang="scss">
#test {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
