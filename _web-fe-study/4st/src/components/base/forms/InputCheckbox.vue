<template>
  <div :class="[`input-${inputType}`, `${styleType}`, `${className}`]">
    <input 
        :id="id"
        :name="name"
        :type="inputType"
        :readonly="readonly"/>

    <!-- [TODO]
        - 에러문구는 그룹에서
     -->
    <label 
        :for="id"
        class="label-legend">
      <slot />
    </label>
  </div>
</template>
<script>
export default {
    name: 'InputCheck',
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
            default: 'type1'
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
    },
}
</script>
<style lang="scss">
  // [check]

.input-checkbox {
    .label-legend {
        position: relative;
        font-size: 1.6rem;
    }
    // 스퀘어 스타일
    &.type1 {
        .label-legend {
            line-height: 2.4rem;
            padding-left: 3rem;
            margin-bottom: 0.5em;
            &:before {
                @include pseudoBase();
                top: 0;
                bottom: 0;
                margin: auto;
            }
            &:before {
                @include itemSize(24px, 24px);
                left: 0;
                background-color: #fff;
                border: 1px solid #ccc;
                transition: all .15s;
            }
        }
        :checked + label {
            &:before {
                border: 7px solid $mainColor01;
            }
        }
    }
    // 체크 스타일
    &.type2 {
        .label-legend {
            line-height: 2.4rem;
            padding-left: 3rem;
            margin-bottom: 0.5em;
            &:before,
            &:after {
                @include pseudoBase();
                top: 0;
                bottom: 0;
                margin: auto;
            }
            &:before {
                @include itemSize(24px, 24px);
                left: 0;
                background-color: $white;
                border: 1px solid $grayC;
                transition: all .15s;
            }
            &:after {
                @include itemSize(16px, 9px);
                top: -5px;
                left: 4px;
                border-left: 2.5px solid $white;
                border-bottom: 2.5px solid $white;
                border-color: $white;
                transform: rotate(315deg);
            }
        }
        :checked + label {
            &:before {
                background-color: $mainColor01;
            }
            &:after {
                border-color: $white;
            }
        }
    }
}
</style>