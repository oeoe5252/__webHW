import Vue from 'vue';
import Router from 'vue-router';
import Home from "@/pages/Home";
import GuideMain from "@/pages/styleGuide/Main";
import GuideForm from "@/pages/styleGuide/Form";
import GuideTest from "@/pages/styleGuide/Test";

Vue.use(Router);

let router = new Router({

    /**
     * Push 방식의 routing
     */
    mode: 'history',

    /**
     * 라우트 정의
     */
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                default: Home
            }
        },
        {
            path: '/styleGuide',
            name: 'form',
            components: {
                default: GuideMain
            }
        },
        {
            path: '/styleGuide/form',
            name: 'form',
            components: {
                default: GuideForm
            }
        },
        {
            path: '/styleGuide/test',
            name: 'form',
            components: {
                default: GuideTest
            }
        }
    ],
});

/**
 * Router Gard
 */
/*router.beforeEach((to, from, next) => {

});*/

export default router;
