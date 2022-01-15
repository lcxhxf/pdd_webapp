import React, { memo, useEffect, useState } from 'react'
import './Live.css'
//import './Live.style.js'
import * as actionTypes from './store/actionCreator'
import { connect } from 'react-redux'
import Scroll from '../../baseUI/scroll/index'
import Goods from '../../components/goods/goods'
import Cell from '../../components/cell/cell.jsx'
import Follow from '../../components/follow/follow.jsx'
import {
    NavContainer, FollowStyle, GoodsStyle
} from "./Live.style";
import Horizen from '../../baseUI/horizen-item';


const Live = (props) => {
    const { livedata } = props
    const { getLiveDataDispatch } = props
    let [category, setCategory] = useState('0');
    // const { categoryTypes = []} = livedata
    var categoryTypes = [
        {
            "name": "推荐",
            "key": "0"
        },
        {
            "name": "推荐",
            "key": "1"
        },
        {
            "name": "推荐",
            "key": "2"
        },
        {
            "name": "推荐",
            "key": "3"
        },
        {
            "name": "推荐",
            "key": "4"
        },
        {
            "name": "推荐",
            "key": "5"
        },
        {
            "name": "推荐",
            "key": "6"
        },
        {
            "name": "推荐",
            "key": "7"
        },
    ]
    useEffect(() => {
        getLiveDataDispatch()
    }, [])
    const handleUpdateCatetory = (val) => {
        setCategory(val);
    }
    return (
        <>
            <Scroll
                direction="vertical"
                refresh={false}
            >
                <Cell />
                <FollowStyle>
                    <Follow />
                </FollowStyle>
                <NavContainer>
                    <Horizen list={categoryTypes} title={""} handleClick={handleUpdateCatetory}
                        oldVal={category}></Horizen>
                </NavContainer>
                <GoodsStyle>
                    <Goods />
                </GoodsStyle>

            </Scroll>

        </>
    )
}

const mapStateToPorps = (state) => {
    return {
        livedata: state.main.livedata
    }
}
const mapStateToDispatch = (dispatch) => {
    return {
        getLiveDataDispatch() {
            dispatch(actionTypes.getLiveData())
        }
    }
}

export default connect(mapStateToPorps, mapStateToDispatch)(memo(Live))