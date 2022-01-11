import React, {memo} from 'react';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './bottom.css';
import { connect } from 'react-redux';
import HeadNumIcon from '../../common/headNumIcon/HeadNumIcon';
import { actionCreators } from '../../pages/Main/store';
import main from '../../assets/images/main.png'
import main_active from '../../assets/images/main_active.png'
import live from '../../assets/images/live.png'
import live_active from '../../assets/images/live_active.png'
import search from '../../assets/images/search.png'
import search_active from '../../assets/images/search_active.png'
import talk from '../../assets/images/talk.png'
import talk_active from '../../assets/images/talk_active.png'
import my from '../../assets/images/my.png'
import my_active from '../../assets/images/my_active.png'


const Bottom = (props) => {
    let { route, num, index } = props;
    const { pathname } = useLocation()
    
    // 根据用户直接访问的处理，非首页
    index = route.routes.findIndex(item => item.path == pathname) - 1
    // console.log(index);
    // console.log(num, '///////')
    const { setIndexDispatch } = props;
    return (
        <>

        {/* fdfdasfafaafdas */}
        {/* 二级路由而准备 */}
        {renderRoutes(route.routes)}
        <ul className="Botton-warper">
            <li 
            onClick={()=>{setIndexDispatch(0)}}
            className="Botton-warper-warp" 
            key="1">
                <Link to="/home/main" style={{textDecoration:"none"}}>
                    <div>  
                        {index===0?<img src={main_active}/>:<img src={main}/>}             
                        <div className="planet" style={index===0?{color: '#ec564b'}:{}}>首页</div>
                    </div>
                </Link>
            </li>
            <li className="Botton-warper-warp" key="2"
                onClick={()=>{setIndexDispatch(1)}}>
                <Link to='/home/live' style={{textDecoration:"none"}}>
                    <div>  
                        {index===0?<img src={live_active}/>:<img src={live}/>}             
                        <div className="planet" style={index===0?{color: '#ec564b'}:{}}>直播</div>
                    </div>
                </Link>
                </li>
            <li className="Botton-warper-warp" key="3"
            onClick={()=>{setIndexDispatch(2)}}>
                <Link to='/home/search' style={{textDecoration:"none"}}>
                <div>  
                        {index===0?<img src={search_active}/>:<img src={search}/>}             
                        <div className="planet" style={index===0?{color: '#ec564b'}:{}}>搜索</div>
                    </div>
                </Link>
            </li>
            <li className="Botton-warper-warp" key="4"
            onClick={()=>{
                setIndexDispatch(3);
            } }>
                <Link to='/home/talk' style={{textDecoration:"none"}}>
                <div>  
                    {index===0?<img src={talk_active}/>:<img src={talk}/>}             
                    <div className="planet" style={index===0?{color: '#ec564b'}:{}}>消息</div>
                </div>
                </Link>
            </li>
            <li className="Botton-warper-warp" key="5"
            onClick={()=>{
                setIndexDispatch(3);
            } }>
                <Link to='/home/my' style={{textDecoration:"none"}}>8
                    <div>  
                        {index===0?<img src={my_active}/>:<img src={my}/>}             
                        <div className="planet" style={index===0?{color: '#ec564b'}:{}}>个人中心</div>
                    </div>
                </Link>
            </li>
        </ul>
            {/* tabbar位置 */}
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        num: state.main.num,
        index: state.main.index
    }
}
// setIndex   changeIndex
// 1. dispatch能力 
// 2. 返回值是一个对象

const mapDispatchToProps = (dispatch) => {
    return {
        setIndexDispatch(index) {
            dispatch(actionCreators.setIndex(index))
        }
    }
}
export default connect(mapStateToProps, 
    mapDispatchToProps)(memo(Bottom))
