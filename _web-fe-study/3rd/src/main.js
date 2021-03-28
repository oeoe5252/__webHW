import Vue from "vue";
import routes from "./routes"; // routes 객체 import

Vue.config.productionTip = false;

const app = new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute];
    }
  },
  render(h) {
    return h(this.ViewComponent);
  }
}).$mount('#app'); // public/index.html 과 결합

// routeLink에서 발생한 window.pushState(1, 2, 3) 호출시 트리거 되는 이벤트
window.addEventListener('popstate', ()=> {
  app.currentRoute = window.location.pathname;
})


/**
 * # $mount
 * - $mount("선택자") :: public index.html에 있는 요소에 mount 한다는 의미~!!!! 컴포넌트로 만들어진 애들이 아니라!!!!!!!!!!!!!! 빙구!!! 시야를 좀 더 넓혀보쟈!
 * - $mount("선택자") :: 해당 선택자로 감싸지는것도 아니고, 해당 선택자를 찾는것도 아닌거 같은데. app만 된다....ㅠㅠㅠ힝구 ㅠㅠ
 * - 내가 필요할때 명시적으로 vue 인스턴스를 마운트 하기 위한것
 * - 이 의미는 너가 너의 뷰 인스턴스를  (특정한 엘리먼트 요소나, 동기프로세스가 끝날때 까지 기다린 만큼.) 지연시킬수 있는것을 의미한다. 
 * - 특히 뷰를 레거시한 어플리케이션의 돔?에에 주입시킬때 유용하게 쓰일 수 있다.
 * # vm.$mount :: 
 * - vm : the instance itself
 *  
 */

// main.js에 h로 렌더링된 컴포넌트를 #app이라는 아이로 랜더링시키는거(인줄 알았는데 "appe: App.vue  el 이름"가 연결되넹)
// id 가 있는 곳으로 해당 컴포넌트가 대체 되는듯(아냐)
// #app 이 컴포넌트 id는 아닌가보다... #test로 바꿨는데도, app컴포넌트를 부르넹?
