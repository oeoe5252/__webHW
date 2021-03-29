<template>
  <guide-layout>
      <guide-title>Guide Title</guide-title>
      <!-- 컴포넌트 요소 넣으면 됨 -->
      <!-- 슬롯으로 하려했는데, template 태그 넣는게 지저분한거 같아서. 그냥 컴포넌트로 안빼고 span style 넣을걸 그랬나... -->
      <guide-sub-title class="mb40 line-hide">guide-sub-title</guide-sub-title>

      <guide-sub-title class="mb40">
        guide-sub-title
        <guide-sub-desc>guide-sub-desc</guide-sub-desc>
      </guide-sub-title>
  </guide-layout>
</template>

<script>
// import guide Components
import GuideLayout from "@/components/Layout/StyleGuide/Index"
import GuideTitle from "@/components/Layout/StyleGuide/Title"
import GuideSubTitle from "@/components/Layout/StyleGuide/SubTitle"
import GuideSubDesc from "@/components/Layout/StyleGuide/SubDescription"
// import form Components

export default {
  name: 'GuideForm',
  components: {
    GuideLayout, GuideTitle, GuideSubTitle, GuideSubDesc
  }
}
</script>
