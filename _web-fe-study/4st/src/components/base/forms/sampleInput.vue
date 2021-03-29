<template>
  <div :class="[`input-${inputType}`, styleType]">
    <!-- 왼쪽 라벨 스타일 노출여부: label-hide prop -->
    <label v-if="isLabelLeft()" :for="id" :class="[label]"><slot /></label>
    <!-- 인풋 영역 -->
    <input
      :type="inputType"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      :readonly="readonly"
      @input="userInput"
      :value="userInputVal"
    />
    <!-- 라디오, 체크박스, 파일이면 return false -->
    <label v-if="!isLabelLeft()" :for="id">
      <!-- 라벨 필수 스타일 문구, 근데 슬롯 안씀...-->
      <slot name="must" />
      <!-- 라벨 일반 스타일 문구, 근데 슬롯 안씀.. .span으로 스타일 처리함 -->
      <slot name="txt" />
      <!-- 그외 name 지정 안한 애들 오게끔 -->
      <slot />
    </label>

    <!-- 인풋 추가설명 -->
    <p v-if="alert" :class="[{ alert: alert }]"><i></i>{{ alert }}</p>
    <!-- 인풋 에러(툴팁:abs로)? || 기존 스타일에 컬러만?  -->
    <!-- <p v-if="error"
            :class="[{'error': error}]">
            <i></i>{{ error }}
        </p> -->
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class InputText extends Vue {
  /**
   * @Prop inputType : [(text)]
   * @Prop styleType : [(def), type1]
   * @Prop name : [(f_tmp)]
   * @Prop id : [(f_tmp)]
   * @Prop value : [()]
   * @Prop readonly : T || (F)
   * @Prop checked : T || (F)
   * @Prop placeholder : [(Enter your text)]
   * @Prop label : [(), hide]
   * @Prop error : [()]
   * @Prop alert : [()]
   */
  @Prop({ default: 'text' }) inputType?:              string
  @Prop({ default: 'def' }) styleType?:               string
  @Prop({ default: 'f_tmp' }) name?:                  string
  @Prop({ default: 'f_tmp' }) id?:                    string
  @Prop({ default: '' }) value?:                      string
  @Prop({ default: false }) readonly?:                boolean
  @Prop({ default: false }) checked?:                 boolean
  @Prop({ default: 'Enter your text' }) placeholder?: string
  @Prop({ default: '' }) label?:                      string
  @Prop({ default: '' }) error?:                      string
  @Prop({ default: '' }) alert?:                      string



  isLabelLeft(): boolean {
    switch (this.inputType) {
      case 'radio':
      case 'checkbox':
      case 'file':
        return false
      default:
        return true
    }
  }

  userInputVal: string = ''
  userInput(e: any) {
    this.userInputVal = e.target.value
    // console.log(this.userInputText)
    this.$emit('input', e.target.value)
  }

}
</script>
<style lang="scss">
  input::placeholder,
  textarea::placeholder {
    color: $gray999;
  }

  [class*='input-'] {
    margin-bottom: 2rem;
  }
  
  .alert {
    font-size: 1.5rem;
    font-weight: 300;
    color: $gray999;
    letter-spacing: -0.01em;
    padding: 1.1em 1.6em 0;

    &:before {
      content: '*';
      display: inline-block;
    }
  }

  // [text]
  [type='text'] {
    width: 100%;
    height: 60px;
    font-size: 2rem;
    background-color: $grayF3;
    padding: 1em 1.5em;
  }
</style>