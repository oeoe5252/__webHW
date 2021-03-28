<template>
    <a
        :href="href"
        :class="[{active: isActive}, 'tmp']"
        @click="go">
        <slot></slot>
    </a>
</template>

<script>

export default {
    // vue <router-link> 랑 이름이 너무 겹치네...
    props: {
        // prop 유효성 검사(https://kr.vuejs.org/v2/guide/components-props.html)
        href: {
            type: String,
            required: true
        }
    },
    computed: {
        isActive() {
            // $root : 현재 컴포넌트 트리의 루트 Vue 인스턴스
            // 전달받은 href와 루트의 currentRoute 명과 같으면 true(활성화 스타일 추가), 다르면 false(비활성화) 
            return this.href === this.$root.currentRoute;
        }
    },
    methods: {
        go(e) {
            e.preventDefalut(); 
            // defalut 이벤트 막기 (안쓰면 a 기본 이벤트가 먹혀서, 깜빡이게 된다. 클릭이벤트를 차단하여 브라우저가 페이지를 다시 로드하지 않도록)
            // FF : TypeError: e.preventDefalut is not a function 떴었음, 찾아보기
            // chrome : TypeError: e.preventDefalut 관련 에러 잠깐씩 뜸.
            this.$root.currentRoute = this.href;
            /**
             * window.history.pushState(state, title, [, url])
             * @param : state 
             * @param : title : safari 제외 거의 모든 브라우저 안됨 (document.title 로 적용 확인하는거 같음) 
             * @param : url : 이동할 url, currentUrl과 origin이 같아야함
             */
            window.history.pushState( null, null, this.href);
        }
    }
}
</script>

<style lang="scss">
    .tmp {
        margin-left: 10px;

        &.active {
            color: #42b983;
        }

        &:first-child {
            margin-left: 0;
        }
    }
</style>