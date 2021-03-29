<template>
  <guide-layout>
      <guide-title>Test</guide-title>
      <!-- 컴포넌트 요소 넣으면 됨 -->

      <guide-sub-title class="line-hide">
        input
        <guide-sub-desc>text</guide-sub-desc>
      </guide-sub-title>

      <input-text
        id="g-name1"
        name="g-name1"
        inputType="text"
        styleType="type1"
        className="mt15" 
        placeholder="이름을 입력해주세요">이름</input-text>

      <input-text
        id="g-name2"
        name="g-name2"
        inputType="text"
        styleType="type2"
        className="mt15">이름</input-text>

      <input-text
        id="g-name3"
        name="g-name3"
        inputType="text"
        styleType="type3"
        className="mt15">이름</input-text>

      <guide-sub-title class="mt15">
        input
        <guide-sub-desc>password</guide-sub-desc>
      </guide-sub-title>

      <input-pwd
        id="g-pwd1"
        name="g-pwd1"
        inputType="password"
        styleType="type1"
        className="mt15" 
        placeholder="비밀번호입력">비밀번호</input-pwd>
      <input-pwd
        id="g-pwd2"
        name="g-pwd2"
        inputType="password"
        styleType="type2"
        className="mt15" 
        placeholder="비밀번호입력">비밀번호</input-pwd>
      <input-pwd
        id="g-pwd3"
        name="g-pwd3"
        inputType="password"
        styleType="type3"
        className="mt15" 
        placeholder="비밀번호입력">비밀번호</input-pwd>

      <guide-sub-title class="mt15">radio</guide-sub-title>
      <div class="g-wrap">
        <!-- [TODO] 체크 기본 설정 옵션 아직 작업 안함 -->
        <input-radio
          id="g-gender1-1"
          name="g-gender1"
          inputType="radio"
          className="mt15">라디오1</input-radio>
        <input-radio
          id="g-gender1-2"
          name="g-gender1"
          inputType="radio"
          className="mt15">라디오2</input-radio>
        <!-- [TODO] 에러 컴포넌트 -->
        <p class="error"><i></i>에러문구 올 예정</p>
      </div>

      <guide-sub-title class="mt15">checkbox</guide-sub-title>
      <div class="g-wrap">
        <!-- [TODO] 체크 기본 설정 옵션 아직 작업 안함 -->
        <input-check
          id="g-chk-1"
          name="g-chk"
          inputType="checkbox"
          className="mt15">체크1</input-check>
        <input-check
          id="g-chk-2"
          name="g-chk"
          inputType="checkbox"
          className="mt15">체크2</input-check>
        <!-- [TODO] 에러 컴포넌트 -->
        <p class="error"><i></i>에러문구 올 예정</p>
      </div>
      <div class="g-wrap">
        <!-- [TODO] 체크 기본 설정 옵션 아직 작업 안함 -->
        <input-check
          id="g-chk2-1"
          name="g-chk2"
          inputType="checkbox"
          styleType="type2"
          className="mt15">체크1</input-check>
        <input-check
          id="g-chk2-2"
          name="g-chk2"
          inputType="checkbox"
          styleType="type2"
          className="mt15">체크2</input-check>
        <!-- [TODO] 에러 컴포넌트 -->
        <p class="error"><i></i>에러문구 올 예정</p>
      </div>
  </guide-layout>
</template>

<script>
// import guide Components
import GuideLayout from "@/components/Layout/StyleGuide/Index"
import GuideTitle from "@/components/Layout/StyleGuide/Title"
import GuideSubTitle from "@/components/Layout/StyleGuide/SubTitle"
import GuideSubDesc from "@/components/Layout/StyleGuide/SubDescription"
// import form Components
import InputText from "@/components/base/forms/InputText"
import InputPwd from "@/components/base/forms/InputPassword"
import InputRadio from "@/components/base/forms/InputRadio"
import InputCheck from "@/components/base/forms/InputCheckbox"


export default {
  name: 'GuideForm',
  components: {
    GuideLayout, GuideTitle, GuideSubTitle, GuideSubDesc, InputText, InputPwd, InputRadio, InputCheck,
  },
  data() {
    return {
      guideRequest : {
        name: '',
        password: '',
        tel: '',
        addr: '',
        age: '',
        set: '',
      },
      // guideInputData : {
      //   text : {
      //     type1 : {
      //       className: '',
      //       placeholder: '이름을 입력해주세요',
      //       alert: '이름을 정확히 입력해주세요'
      //     }
      //   }
      // }
    }
  },
}
</script>

<style lang="scss">
  // [TODO] 컴포넌트화 하기(그룹 요소 err)
  .g-wrap {
    display: flex;
    flex-wrap: wrap;

    [class*="input-"]:not(:first-child) {
      margin-left: 1.5rem;
    }
  }

  // [TODO] 에러 컴포넌트에 넣기(radio, checkbox 는 그룹안에 있어야 함)
.error {
    position: relative;
    display: block;
    margin-top: 1.5rem;
    color: $errColor01;
    width: 100%;
}
</style>