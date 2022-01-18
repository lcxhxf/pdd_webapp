import React, { lazy, Suspense } from 'react';
import BlankLayout from '../layouts/BlankLayout';
import { Redirect, Link } from 'react-router-dom';
//延迟加载
const Main = lazy(()=> import('../pages/Main/Main'));
const Live = lazy(()=>import('../pages/Live/Live'))//动态路由 性能优化
const Search = lazy(()=>import('../pages/Search/Search'))//动态路由 性能优化
const Talk = lazy(()=>import('../pages/Talk/Talk'))
const My = lazy(()=>import('../pages/My/My'))
const Find = lazy(()=>import('../pages/Find/Find'))
const GoodsDetail = lazy(()=>import('../pages/GoodsDetail/GoodsDetail'))
import Bottom from '../components/tabButtom/tabButtom';

const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={null}>
            <Component {...props}></Component>
        </Suspense>
    )
}

export default [{
    component: BlankLayout,
    routes:[
        {
            path:'/',
            exact: true,
            render: () => < Redirect to = { "/home" }/>,
        },
        {
            path:'/home',
            component: Bottom,
            routes: [
                {
                    path: '/home',
                    exact: true,
                    render: () => < Redirect to = { "/home/main" }
                    />,
                },
                {
                    path: '/home/main',
                    component: SuspenseComponent(Main),
                },
                {
                    path: '/home/live',
                    //动态路由 性能优化
                    component: SuspenseComponent(Live),
                },
                {
                    path: '/home/search',
                    //动态路由 性能优化
                    component: SuspenseComponent(Search),
                },
                {
                    path: '/home/talk',
                    //动态路由 性能优化
                    component: SuspenseComponent(Talk),
                },
                {
                    path: '/home/my',
                    //动态路由 性能优化
                    component: SuspenseComponent(My),
                },
                {
                    path: '/home/find',
                    //动态路由 性能优化
                    component: SuspenseComponent(Find),
                },
                {
                    path: '/home/goodsdetail',
                    //动态路由 性能优化
                    component: SuspenseComponent(GoodsDetail),
                }
                
            ]
        }
    ]
}]

