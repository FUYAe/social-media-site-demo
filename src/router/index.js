import VueRouter from "vue-router"
import Home from "../pages/Home.vue"
import DetailPage from "../pages/DetailPage.vue"
import ErrPage from "../pages/ErrPage.vue"
import VideoPage from "../pages/VideoPage.vue"
import ImgBriefPage from "../pages/ImgBriefPage.vue"
import ProspectPage from "../pages/ProSpectPage.vue"
import MobileSearchPage from "../pages/MobileSearchPage.vue"
import store from '../store'
//解决重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
    // mode: "history",
    // base: "/dist/",
    routes: [{
            path: '/',
            redirect: "/home"
        },
        {
            name: "mobilesearch",
            path: '/mobilesearch/:searchtxt',
            component: MobileSearchPage,
            meta: { title: "搜索结果" },
            props(route) {
                return {
                    searchtxt: route.query.searchtxt,
                }
            }
        },
        {
            name: "imgbrief",
            path: '/imgbrief/:id',
            component: ImgBriefPage,
            meta: { title: "图文介绍" },
            props(route) {
                return {
                    id: route.query.id,
                }
            }
        },
        {
            name: "prospect",
            path: '/prospect/:id',
            component: ProspectPage,
            meta: { title: "前景分析" },
            props(route) {
                return {
                    id: route.query.id,
                }
            }
        },
        {
            path: '/bottom',
            redirect: "/home"
        },
        {
            name: "home",
            path: '/home',
            component: Home,
            meta: { title: "主页" }
        },
        {
            path: "/detail",
            component: ErrPage,
            meta: { title: "页面丢失" }

        },
        {
            name: "videoPlayer",
            path: "/video/:id",
            component: VideoPage,
            meta: { title: "视频" },
            props(route) {
                return {
                    id: route.query.id,
                }
            }

        },
        {
            name: "detail",
            path: "/detail/:id",
            component: DetailPage,
            meta: { title: "详情" },
            props(route) {
                return {
                    id: route.query.id,
                }
            }

        },
        {
            path: "*",
            component: ErrPage,
            meta: { title: "页面丢失" }

        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.path !== from.path) {
        store.dispatch('setLoading', true);
    }
    next()
})
router.afterEach((to, from) => {
    document.title = to.meta.title
    setTimeout(() => {
        store.dispatch('setLoading', false);
    }, 300)
})

//暴露router
export default router