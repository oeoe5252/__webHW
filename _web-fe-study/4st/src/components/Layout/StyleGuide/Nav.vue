<template>
  <nav class="guide-nav">
    <h1>
      <router-link to="/styleGuide">GuideMain</router-link>
    </h1>
    <ul>
      <li v-for="(item, index) of listItem" :key="index">
        <router-link :to="item.link">{{ item.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'GuideNavigator',
  data() {
    return {
      listItem: [
        {
          name: "Form",
          link: "/styleGuide/form"
        },
        {
          name: "Test",
          link: "/styleGuide/test"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .guide-nav {
    position: fixed;
    @include itemSize(250px, 100%);
    h1 {
      font-size: 3rem;
      font-weight: 800;
      text-transform: uppercase;
      line-height: 2;
      padding: 0 1.5rem;
    }

    li{
      font-size: 1.6rem;
      line-height: 2.5em;
      padding: 0 1.5rem;
      a {
        display: block;
      }
    }
  }
    // 스타일 가이드 스타일 테스트
    // guide-type-line : 선으로 디자인
 .guide-type-line {
   .guide-nav {
     border-right: 3px solid $black;
      h1 {
        font-family: Montserrat;
      }
      li{
        border-top: 3px solid $black;
      }
   }
 }
</style>
