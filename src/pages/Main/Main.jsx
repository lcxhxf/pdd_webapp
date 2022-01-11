import React, { useEffect,memo, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Main.css'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'

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
    return (
        <div className="main">
            Main     
        </div>
    )
}
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
