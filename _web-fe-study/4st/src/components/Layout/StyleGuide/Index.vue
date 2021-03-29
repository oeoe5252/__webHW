<template>
  <div class="index guide-type-line">
    <!-- guide-layout
    - navigation 과, 콘텐츠 영역만 분리한 것
     -->
    <guide-navigation/>
    <guide-content>
      <slot />
    <!-- page내 <style-guide> 안에 vue 파일 내용이 넘어옴 -->
    </guide-content>
  </div>
</template>

<script>
import GuideNavigation from "@/components/Layout/StyleGuide/Nav";
import GuideContent from "@/components/Layout/StyleGuide/Content";

export default {
  components: {
    GuideNavigation, GuideContent
  }
}
</script>
