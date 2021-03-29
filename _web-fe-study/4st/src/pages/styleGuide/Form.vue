<template>
  <guide-layout>
      <guide-title>Form</guide-title>
      <!-- 컴포넌트 요소 넣으면 됨 -->

      <guide-sub-title  class="mb40 line-hide">
        input
        <guide-sub-desc>text</guide-sub-desc>
      </guide-sub-title>
      - type1 : 라벨 스타일1
      - type2 : 라벨 스타일2
      - type3 : 라벨 스타일3 
      - readonly 스타일 그러고보니 안만들었네 ㅎㅎ

      <guide-sub-title class="mt15 mb40">
        input
        <guide-sub-desc>password</guide-sub-desc>
      </guide-sub-title>
      (text랑 스타일 동일, type만 다름, 바인딩ㄴ, 유령...: 우선 text 그냥 씀)
      - type1 : 라벨 스타일1
      - type2 : 라벨 스타일2
      - type3 : 라벨 스타일3 

      <guide-sub-title class="mt15 mb40">
        input
        <guide-sub-desc>email</guide-sub-desc>
      </guide-sub-title>
      (text랑 스타일 동일, type만 다름, 바인딩ㄴ, 유령...: 우선 text 그냥 씀)
      - type1 : 라벨 스타일1
      - type2 : 라벨 스타일2
      - type3 : 라벨 스타일3 
      - type4: text(라벨 스타일3) 와 select의 조합?

      <guide-sub-title class="mt15 mb40">
        input
        <guide-sub-desc>address</guide-sub-desc>
      </guide-sub-title>
      - input과 마크업 구성이 다름 나중에 생각 작업ㄴㄴ
      - 버튼 컴포넌트, 상세주소 영역

      <guide-sub-title class="mt15 mb40">
        input
        <guide-sub-desc>file</guide-sub-desc>
      </guide-sub-title>
      - input과 마크업 구성이 다름 나중에 생각 작업ㄴㄴ
      - 라벨 버튼 컴포넌트, 

      <guide-sub-title class="mt15 mb40">radio</guide-sub-title>
      - 에러문구는 그룹 묶어서 그룹에서 한번만
      - 선택은 하나만 있지 않으니 그룹안에 input-radio 컴포넌트 필요할듯(그 그룹에서 error 컴포넌트 사용하게끔) (필수 여부)
      - type1: 기본 닷 스타일(def)
      - type2: 박스 스타일

      <guide-sub-title class="mt15 mb40">checkbox</guide-sub-title>
      - 에러문구는 그룹 묶어서 그룹에서 한번만
      - 선택은 하나만 있지 않으니 그룹안에 input-radio 컴포넌트 필요할듯(그 그룹에서 error 컴포넌트 사용하게끔) (필수 여부)
      - type1: 기본 스퀘어 스타일(def)
      - type2: 체크 스타일
      - type3: 체크 스타일2

      <guide-sub-title class="mt15 mb40">textarea</guide-sub-title>
      - [TODO] 최대글자 입력 카운트 노출

      <guide-sub-title class="mt15 mb40">select</guide-sub-title>

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
