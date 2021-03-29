<template>
  <div :class="[`input-${inputType}`, `${styleType}`, `${className}`]">
    <!-- methods 사용할때 () 까지 적어야한다, 없어도 빼면 시행안됨 -->
    <label 
        v-if="!isLabelHide()"
        :for="id"
        class="label-legend"><slot /></label>

    <input 
        :id="id"
        :name="name"
        :type="inputType"
        :placeholder="placeholder"
        :readonly="readonly"/>

    <!-- [TODO]
        - 에러문구 컨포넌트화
        - 에러문구 등장효과
     -->
    <p class="error"><i></i>에러문구 올 예정</p>
  </div>
</template>
<script>
export default {
    name: 'InputPassword',
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
            default: '비밀번호를 입력해주세요'
        },
        readonly: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        isLabelHide: function() {
            console.log(`dddd- ${this.styleType}`);
            switch (this.styleType) {
                case 'type3':
                    return true;
                default:
                    return false;
            }
        }
    },
}
</script>
<style lang="scss">
.input-password {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

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
            text-align: right;
            padding-right: 1.5rem;
        }
        input {
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