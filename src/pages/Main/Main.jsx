import React, { useEffect, memo, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Main.css'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'
import Horizen from '../../baseUI/horizen-item';
import { categoryTypes } from '../../api/config';
import {
    NavContainer, ListContainer,
    List,
    ListItem
} from "./Main.style";
import Scroll from '../../baseUI/scroll/index'

const Main = (props) => {
    // 状态
    const [showPopup, setShowPopup] = useState(false)
    const [display, setDisplay] = useState(false)
    const history = useHistory()
    const { maindata } = props
    // action
    const { getMainDataDispatch } = props
    const { classify = [], rotationImg = [], menuBarData = {} } = maindata

    console.log(maindata)
    useEffect(() => {
        if (!maindata.length) {
            getMainDataDispatch()
        }
    }, [])
    const hanleOnclick = () => {
        // 弹出组件的显示
        setShowPopup(!showPopup)
    }
    // 上拉加载更多
    const handlePullUp = () => {

    }
    // 下拉刷新
    const handlePullDown = () => {

    }
    let [category, setCategory] = useState('1001');
    let [alpha, setAlpha] = useState('');

    let handleUpdateAlpha = (val) => {
        setAlpha(val);
    }

    let handleUpdateCatetory = (val) => {
        setCategory(val);
    }


    return (
        <div className="main">
            <div className="main-search">
                <input value="搜索你想要的商品" />
            </div>
            <NavContainer>
                <Horizen list={categoryTypes} title={""} handleClick={handleUpdateCatetory}
                    oldVal={category}></Horizen>
            </NavContainer>
            <ListContainer>
                <Scroll>
                    {renderSingerList()}
                </Scroll>
            </ListContainer>
        </div>
    )
}





//mock 数据
const singerList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
    return {
        picUrl: "https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg",
        name: "隔壁老樊",
        accountId: 277313426,
    }
});

// 渲染函数，返回歌手列表
const renderSingerList = () => {
    return (
        <List>
            {
                singerList.map((item, index) => {
                    return (
                        <ListItem key={item.accountId + "" + index}>
                            <div className="img_wrapper">
                                <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music" />
                            </div>
                            <span className="name">{item.name}</span>
                        </ListItem>
                    )
                })
            }
        </List>
    )
};
const mapStateToPorps = (state) => {
    return {
        maindata: state.main.maindata
    }
}
const mapStateToDispatch = (dispatch) => {
    return {
        getMainDataDispatch() {
            dispatch(actionTypes.getMainData())
        }
    }
}

export default connect(mapStateToPorps, mapStateToDispatch)(memo(Main))
