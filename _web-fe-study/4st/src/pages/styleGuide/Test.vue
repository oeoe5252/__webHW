<template>
  <guide-layout>
      <guide-title>Test</guide-title>
      <!-- 컴포넌트 요소 넣으면 됨 -->
<!-- [TODO] 
  - 화:오전:: 라디오, 체크 : v-model, check 여부, rules
  - 화:오전:: 텍스트에어리아: v-model, 글자수 카운트, rules는 필요 없
  - 화:오오오오후:: 셀렉트: 화요일 저녁에 놀고 해보자 수요일 전엔 기본이라도 완성시키기 
  - 주말에 했음 좀 좋니.... 벼락치기 인생... 이럼 안대 김아진.... 외줄타기하네 혼자
 -->
      <guide-sub-title class="line-hide">
        input
        <guide-sub-desc>text</guide-sub-desc>
      </guide-sub-title>
<!-- [NOTE]
  - v-model="감시할변수" 
  - v-model : v-bind와 @input의 조화, 값이 자동으로 value로 할당된다.
-->
      <input-text
        v-model="guideRequest.text"
        :rules="rules.text"
        id="g-text1"
        name="g-text1"
        inputType="text"
        styleType="type1"
        className="mt15" 
        placeholder="텍스트를 입력해주세요">텍스트 {{guideRequest.text}}</input-text>

      <guide-sub-title class="mt15">
        input
        <guide-sub-desc>email</guide-sub-desc>
      </guide-sub-title>

      <input-text
        v-model="guideRequest.email"
        :rules="rules.email"
        id="g-mail"
        name="g-mail"
        inputType="text"
        styleType="type1"
        className="mt15" 
        placeholder="test@dot.com">이메일 {{guideRequest.email}}</input-text>

      <guide-sub-title class="mt15">textarea</guide-sub-title>
      <!-- [TODO] 본 input type엔 textarea 없지만 그냥 이름 짓기 구찮아서 넣어준것... -->
      <input-textarea
        v-model="guideRequest.textarea"
        :rules="rules.textarea"
        id="g-txtarea"
        name="g-txtarea"
        inputType="textarea"
        styleType="type1"
        className="mt15">
        텍스트영역
      </input-textarea>

      <guide-sub-title class="mt15">radio</guide-sub-title>
      <div class="g-wrap">
        <!-- [TODO] 체크 기본 설정 옵션 아직 작업 안함 -->
        <input-radio
          v-model="guideRequest.gender"
          :checked='true'
          value="g-gender1-1"
          id="g-gender1-1"
          name="g-gender1"
          inputType="radio"
          className="mt15">라디오1{{guideRequest.gender}}</input-radio>
        <input-radio
          v-model="guideRequest.gender"
          value="g-gender1-2"
          id="g-gender1-2"
          name="g-gender1"
          inputType="radio"
          className="mt15">라디오2{{guideRequest.gender}}</input-radio>
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
// [TODO] 세미콜론 통일시키기
// import guide Components
import GuideLayout from "@/components/Layout/StyleGuide/Index"
import GuideTitle from "@/components/Layout/StyleGuide/Title"
import GuideSubTitle from "@/components/Layout/StyleGuide/SubTitle"
import GuideSubDesc from "@/components/Layout/StyleGuide/SubDescription"
// import form Components
import InputText from "@/components/base/forms/InputText"
// import InputPwd from "@/components/base/forms/InputPassword"
import InputRadio from "@/components/base/forms/InputRadio"
import InputCheck from "@/components/base/forms/InputCheckbox"
import InputTextarea from "@/components/base/forms/InputTextarea"


export default {
  name: 'GuideForm',
  components: {
    GuideLayout, GuideTitle, GuideSubTitle, GuideSubDesc, InputText, InputRadio, InputCheck, InputTextarea
  },
  data: () => ({
    // v-model 감시값
    // 데이터 넘길 값
    // `v-model`은 모든 form 엘리먼트의 초기 `value`와 `checked` 그리고 `selected` 속성을 무시합니다. 항상 Vue 인스턴스 데이터를 원본 소스로 취급합니다. 컴포넌트의 `data` 옵션 안에 있는 JavaScript에서 초기값을 선언해야합니다.
//     text 와 textarea 태그는 value속성과 input이벤트를 사용합니다.
// 체크박스들과 라디오버튼들은 checked 속성과 change 이벤트를 사용합니다.
// Select 태그는 value를 prop으로, change를 이벤트로 사용합니다.
    guideRequest : {
      text: '',
      email: '',
      gender: '',
      textarea: '',
    },
    // vuetify 복붙 : vuetify에 안적혀있었음 생각도 못했을거
    // 에러는 무진장 뜨네 멋모르고 막하니깐(루프 오류 제일심각)
    // arrow 함수
    // (인수) => return
    // [arrFunc, arrFunc, arrFun ......]
    // 값이 바뀔때마다 해당 rulse 들 순환해줘야함.
    // add them as functions returning true/error message.
    rules: {
      // 처음에도 노출되는건, v-model 에서 값이 공백이라서인가
      // !false = true
      // !true = false
      // 왜 이중부정을 하지? 어짜피 이중부정은 원값 아닌가? 뭔 이유가 있으니깐 걔네들이 했겠지?
      text: [
        value => !!value || 'Required.',
        value => (value || '').length <= 4 || '텍스트는 4자까지만',
        value => {
          const pattern = /^[가-힣]+$/
          return pattern.test(value) || '국문 제대로 입력해'
        }
      ],
      email: [
        value => !!value || 'Required.',
        value => (value || '').length <= 20 || 'Max 20 characters',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      ],
      textarea: [
        value => (value || '').length <= 10 || 'Text must be less than 10 characters',
      ]
    }
  }),
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