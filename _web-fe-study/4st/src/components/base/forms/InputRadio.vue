<template>
  <div :class="[`input-${inputType}`, `${styleType}`, `${className}`]">
    <!-- methods 사용할때 () 까지 적어야한다, 없어도 빼면 시행안됨 -->
    <!-- <label 
        v-if="!isLabelHide()"
        :for="id"
        class="label-legend"><slot /></label> -->

    <input 
        :id="id"
        :name="name"
        :type="inputType"
        :readonly="readonly"/>

    <!-- [TODO]
        - 에러문구는 그룹에서
     -->
        <!-- 라디오, 체크박스, 파일이면 return false -->
    <label 
        :for="id"
        class="label-legend">
      <!-- 라벨 필수 스타일 문구, 근데 슬롯 안씀...-->
      <slot name="must" />
      <!-- 라벨 일반 스타일 문구, 근데 슬롯 안씀.. .span으로 스타일 처리함 -->
      <slot name="txt" />
      <!-- 그외 name 지정 안한 애들 오게끔 -->
      <slot />
    </label>

    <p class="error"><i></i>에러문구 올 예정</p>
  </div>
</template>
<script>
export default {
    name: 'InputRadio',
    props: {
        id: {
            type: String,
            default: 'tmp'
        },
        name: {
            type: String,
            default: 'tmp'
        },
        inputType: {
            type: String,
            default: 'text'
        },
        styleType: {
            type: String,
            default: null
        },
        className: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: '텍스트를 입력해주세요'
        },
        readonly: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        // isLabelHide: function() {
        //     console.log(`dddd- ${this.styleType}`);
        //     switch (this.styleType) {
        //         case 'type3':
        //             return true;
        //         default:
        //             return false;
        //     }
        // }
    },
}
</script>
<style lang="scss">
  // [radio]
  .input-radio {
      label {
        display: inline-block;
        position: relative;
        font-size: 1.6rem;
        line-height: 24px; // label 아이콘 높이만큼 설정
        padding-left: 2em;

        &:before,
        &:after {
          @include pseudoBase(inline-block);
          top: 0;
          bottom: 0;
          border-radius: 50%;
          margin: auto;
        }
        &:before {
          @include itemSize(24px, 24px);
          left: 0;
          background-color: $grayC;
        }
        &:after {
          @include itemSize(10px, 10px);
          left: 7px;
          background-color: $white;
        }
      }
      :checked + label {
        &:before {
          background-color: $errColor01;
        }
      }

    // &.type1 {
    //   label {
    //     display: inline-block;
    //     width: 100px;
    //     height: 60px;
    //     font-size: 2rem;
    //     line-height: 60px;
    //     letter-spacing: -0.02rem;
    //     text-align: center;
    //     border: 1px solid $gray3E;
    //   }
    //   :checked + label {
    //     color: $white;
    //     background-color: $gray3E;
    //   }
    // }

    // &.type2 {
    //   label {
    //     display: block;
    //     display: inline-block;
    //     margin: auto;
    //     @include bgImg(top left, cover);
    //   }
    //   &.std {
    //     label {
    //       @include bgItemSize(280px, 365px);
    //       @include bgSprite(0 0);
    //       background-image: url('~@/assets/images/event1/pop/ev1_std_sp_h.png');
    //     }
    //     &:hover label,
    //     :checked + label {
    //       @include bgSprite(-290px 0);
    //     }
    //   }
    //   &.normal {
    //     label {
    //       @include bgItemSize(264px, 340px);
    //       @include bgSprite(0 0);
    //       background-image: url('~@/assets/images/event1/pop/ev1_normal_sp_h.png');
    //     }
    //     &:hover label,
    //     :checked + label {
    //       @include bgSprite(-274px 0);
    //     }
    //   }
    // }
  }
.input-radio {
    // display: flex;
    // align-items: center;
    // flex-wrap: wrap;

    // .label-legend {
    //     font-size: 1.6rem;
    //     margin-bottom: 0.5em;
    // }

    // &.type1 {
    //     .label-legend {
    //         display: block;
            
    //     }
    // }

    // &.type2 {
    //     .label-legend {
    //         // justify 이것저것 다 했는데 왜 적용 왜 안돼..
    //         width: 100px;
    //         text-align: right;
    //         padding-right: 1.5rem;
    //     }
    //     input {
    //         width: calc(100% - 100px);
    //     }
    //     .error {
    //         margin-left: 10rem;
    //     }
    // }
}

// [TODO] 에러 컴포넌트에 넣기
.error {
    position: relative;
    display: block;
    margin-top: 1.5rem;
    color: $errColor01;
}
</style>