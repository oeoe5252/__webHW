<template>
  <div :class="[`input-${inputType}`, `${styleType}`, `${className}`]">
    <!-- methods 사용할때 () 까지 적어야한다, 없어도 빼면 시행안됨 -->
    <label 
        v-if="!isLabelHide()"
        :for="id"
        class="label-legend"><slot /></label>

    <textarea 
        :id="id"
        :name="name"
        :placeholder="placeholder"
        :readonly="readonly"
        @input="onInputUpdate"/>
    <p> <span>{{tmpValue.length}}</span> /1000</p>
    <!-- [TODO]
        - 에러문구 컨포넌트화
        - 에러문구 스타일
        - 에러문구 등장효과
     -->
    <p class="error"><i></i>에러문구 올 예정</p>
  </div>
</template>
<script>
export default {
    name: 'InputTextarea',
    data() {
        return {
            cntText: 0,
            tmpValue: ''
        }
    },
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
        isLabelHide: function() {
            switch (this.styleType) {
                case 'type3':
                    return true;
                default:
                    return false;
            }
        },
        onInputUpdate: function(e) {
            // this.value = e.target.value
            console.log(e.target.value, e.target.value.length);
            console.log("this.value", this.value)
            // 자식에서 입력된 값을 부모 이벤트로 보냄
            // this.checkRules(value)
            // this.cntText = e.target.value.length
            this.tmpValue = e.target.value;
            this.$emit('input', e.target.value);
        }
    },
}
</script>
<style lang="scss">
.input-textarea {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    textarea {
        min-height: 100px;
        font-size: 1.6rem;
        border: 1px solid rgb(221, 221, 221);
        padding: 1.5rem;
        line-height: 1.2;
        -ms-overflow-style: none;

        &::-webkit-scrollbar{
            display:none;
        }
    }

    .label-legend {
        font-size: 1.6rem;
        margin-bottom: 0.5em;
    }

    &.type1 {
        .label-legend {
            display: block;
            
        }
    }

    &.type2 {
        .label-legend {
            // justify 이것저것 다 했는데 왜 적용 왜 안돼..
            width: 100px;
            align-self: flex-start;
            text-align: right;
            padding-right: 1.5rem;
        }
        textarea {
            width: calc(100% - 100px);
        }
        .error {
            margin-left: 10rem;
        }
    }
}

// [TODO] 에러 컴포넌트에 넣기
.error {
    position: relative;
    display: block;
    margin-top: 1.5rem;
    color: $errColor01;
}
</style>