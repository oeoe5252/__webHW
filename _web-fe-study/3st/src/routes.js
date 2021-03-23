// 대체할 컴포넌트 import
import Index from "@/index.vue";
import About from "@/components/sub/About.vue";
import Contact from "@/components/sub/Contact.vue";
import Service from "@/components/sub/Service.vue";
import Work from "@/components/sub/Work.vue";

// custom routes 객체 정의 { 'pathName:window.location.pathname' : vueComponent }
const routes = {
    '/': Index,
    '/about': About,
    '/contact': Contact,
    '/service': Service,
    '/work': Work, 
}

// const test = {
//     'key' : value
// }
// '/welcome': Welcome,
// 패스가 "/about" 면 About 컴포넌트를 뱉어라
/**
 * [Note] export vs exports vs export default
 * ------------
 * [export] : js 모듈에서 함수, 객체, 원시값을 내보낼때 사용
 * [exports] : 모듈에서 함수, 객체, 원시값을 객체형태로 내보낼 때 사용
 * [exports default] : 분리되어있는 파일 내 내보낼 하나의 고정된 값만 내보낼 때 사용 읭?
 * ------------
 * [export default] : 파일 전체를 export 
 * [export 변수명] : 해당 변수만 export ::-set-:: import {변수명} form '경로' :: import시 export할때 썻던 변수명 그대로 사용해야하고, 중괄호로 감싸야한다.
 */
export default routes; // 라우트 객체 export


// 외부에서 쓰기 위해 export 해준다. 
// export와 
// export default 차이 검색하기

// 파일명이랑  export 할때 쓰는 명을 통일해주는게 좋다. 
// import 시 파일명을 써도 되고, export 이름을 써도 되지만, 
// 그냥 export 시 사용할 변수 이름을 export 시켯다고 생각하면 된다.  

// 이 작업은 router 패키지를 깔아도 해줘야하는 작업