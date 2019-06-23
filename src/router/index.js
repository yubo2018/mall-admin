

/**
 *      path         页面路由地址
 *      navShow      是否显示页面路由
 *      tabShow      是否显示页面底部导航
 *      title        页面标题
 *      keepAlive    是否缓存页面
 *      navActive    1级序号 - 层级 - 2级序号 
 *      @type {*[]}
 */
// 概述
const pandectRouter = {
    path: '/',
    component: resolve => require(['../pages/Main'], resolve),
    meta: {
        navActive: '0-0',
        navShow: true,
        title: '概况',
    },
    children: [
        {
            path: '/',
            component: resolve => require(['../pages/Index'], resolve),
            name: 'Index',
            meta: {
                navActive: '0-0',
                navShow: false,
                title: '概况1',
            },
        }
    ]
}
// 商品
const goodsRouter = {
    path: '/goods',
    component: resolve => require(['../pages/Main'], resolve),
    meta: {
        navActive: '1-1',
        navShow: true,
        title: '商品',
    },
    children: [
        
        {
            path: '/GoodsAll',
            component: resolve => require(['../pages/Goods/GoodsAll'], resolve),
            name: 'GoodsAll',
            meta: {
                navActive: '1-0',
                navShow: true,
                title: '全部商品',
            },
        },{
            path: '/AddGoods',
            component: resolve => require(['../pages/Goods/AddGoods'], resolve),
            name: 'AddGoods',
            meta: {
                navShow: false,
                navActive: '1-0',
                title: '商品编辑',
            },
        }, {
            path: '/GoodsGroup',
            component: resolve => require(['../pages/Goods/GoodsGroup'], resolve),
            name: 'GoodsGroup',
            meta: {
                navActive: '1-2',
                navShow: true,
                title: '商品分组',
            },
        }, {
            path: '/GoodsTag',
            component: resolve => require(['../pages/Goods/GoodsTag'], resolve),
            name: 'GoodsTag',
            meta: {
                navActive: '1-3',
                navShow: true,
                title: '商品标签',
            },
        }, {
            path: '/GoodsAttribute',
            component: resolve => require(['../pages/Goods/GoodsAttribute'], resolve),
            name: 'GoodsAttribute',
            meta: {
                navActive: '1-4',
                navShow: true,
                title: '商品属性',
            },
        },{
            path: '/AddAttribute',
            component: resolve => require(['../pages/Goods/AddAttribute'], resolve),
            name: 'AddAttribute',
            meta: {
                navShow: false,
                navActive: '1-4',
                title: '属性编辑',
            },
        },
    ]
}
// 订单
const orderRouter = {
    path: '/order',
    component: resolve => require(['../pages/Main'], resolve),
    meta: {
        navActive: '2-0',
        navShow: true,
        title: '订单',
    },
    children: [
        {
            path: '/OrderAll',
            component: resolve => require(['../pages/order/OrderAll'], resolve),
            name: 'OrderAll',
            meta: {
                navActive: '2-0',
                navShow: true,
                title: '全部订单',
            }
        }, {
            path: '/Recharge',
            component: resolve => require(['../pages/order/Recharge'], resolve),
            name: 'Recharge',
            meta: {
                navActive: '2-1',
                navShow: true,
                title: '充值订单',
            }
        }
    ]
}

// 店铺
const storeRouter = {
    path: '/store',
    component: resolve => require(['../pages/Main'], resolve),
    meta: {
        navActive: '3-0',
        navShow: true,
        title: '店铺',
    },
    children: [
        {
            path: '/',
            component: resolve => require(['../pages/store/Store'], resolve),
            name: 'store',
            meta: {
                navActive: '3-0',
                navShow: false,
                title: '全部订单',
            }
        }
    ]
}

const Login = {
    path: '/login',
    component: resolve => require(['../pages/Login'], resolve),
    name: 'Login',
    meta: {
        title: '登录',
    },
}
const Register = {
    path: '/register',
    component: resolve => require(['../pages/Register'], resolve),
    name: 'register',
    meta: {
        navShow: false,
        title: '注册',
    },
}

export default [pandectRouter, goodsRouter, orderRouter,storeRouter, Login, Register]
