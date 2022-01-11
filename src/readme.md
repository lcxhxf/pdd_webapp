- 三元套路
    1. redux 放在pages 目录下的相应模块中
        数据驱动页面
    2. 切页面时的样式组件
    3. 路由配置  react-router-config 配置一个数组，动态加载组件
    4. better-scroll、 load、等 common组件

- 转移到自己的项目
    业务打理经验

- 首页开发套路
    1. 组件思路 (公式)
       connect() (search + scroll(memo, Lazyload 组件化) + tabbar)
       后端api  mockjs/koa  两种都用

- import './Server.css'
//import './Server.style.js'
import { connect } from 'react-redux'
import  Scroll from '../../baseUI/scroll/index'

- Swiper 组件打理流程
    1. 安装相应版本的Swiper
    2. 引入swiper及相应的样式
    3. 固定的html结构 .swiper-container ->.swiper-wrapper -> .swiper-item + .swiper-pagination
    4. useEffect 实例化Swiper

- 电商menubar
    1. swiper 提供swiper-bar 这种形式
    2. 使用融合组合组件
        menubar swiper
        menubar 菜单
    3. flex 每行交给复用组件
    4. 数据设计很ok
    
- 项目考点 
    1. 性能优化
         路由 懒加载
         组件memo
         connect(mapStateToProps,mapDispatchToProps)(meme(Component))
         lazyload 图片
         雪碧图 用一张全家福 代替一堆小图片 虽然体积大了，但是有效的减少了请求数
         现在有base64 图片webpack打包时自动转成base64放在css文件里面
         雪碧图是google 十年前的性能优化利器
         base64google发明的
    
    2. 样式组件
    3. better-scroll
    4. 组件化风格
    5. hooks 编程风格，比如在tabbar切换时使用了useLocation来匹配路由

- 页面 路由 
    1. 路由管页面级别组件 SPA
    2. 页面可以有多个模块 section
    3. 路由 /模块 /user  /posts
          子模块
    4. 多级路由设计方案
        /home /home/my /home/my/server 路由多模块
        一级路由，整个页面都是他的 除非有layout 
        /home  Tabbuttom  cpmponent
            Tabbar的页面空间就有了
            /home/Main 
                二级路由 这个页面
    5. 提前设计页面模块与路由的关系


- 状态丢失问题
    1. 刷新页面 store回到初始值
    2. 
