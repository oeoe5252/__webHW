<template>
  <guide-layout>
      <guide-title>Test</guide-title>
      <!-- 컴포넌트 요소 넣으면 됨 -->
  </guide-layout>
</template>

<script>
import GuideLayout from "@/components/Layout/StyleGuide/Index"
import GuideTitle from "@/components/Layout/StyleGuide/Title"

export default {
  name: 'GuideForm',
  components: {
    GuideLayout, GuideTitle
  }
}
</script>
