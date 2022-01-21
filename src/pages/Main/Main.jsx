import React, { useEffect, memo, useState } from 'react'
import './Main.css'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'
import Horizen from '../../baseUI/horizen-item';
import SearchBox from '../../components/search/search'
import MenuBar from '../../components/menuBar/menuBar'
import {
    NavContainer, ListContainer,
    List,
    ListItem
} from "./Main.style";
import Scroll from '../../baseUI/scroll/index'
import Chart from '../../components/chart/chart'
import Maingoods from '../../components/maingoods/maingoods'
import Loading from '../../baseUI/loading';


const Main = (props) => {
    let [category, setCategory] = useState('0');
    let [pullUpLoading,setPullUpLoading] = useState(false)
    let [pullDownLoading,setPullDownLoading] = useState(false)
    // 状态
    const { maindata } = props
    // action
    const { getMainDataDispatch } = props

    const { categoryTypes = [], menuBarData = {}, goodData = [] } = maindata
    

    // console.log(menuBarData, '11111111111111');
    // console.log(goodsData, '222222222222222');
    useEffect(() => {
        if (!maindata.length) {
            getMainDataDispatch()
        }

    }, [])
    
    const handleUpdateCatetory = (val) => {
        setCategory(val);
    }

      // 顶部下拉刷新
  const handlePullDown = () => {
    // pullDownRefresh(category, pageCount);
  }
  // 滑到最底部刷新部分的处理
  const handlePullUp = () => {
    pullUpRefresh(category, pageCount);
  }
    return (

        <div className="main">
            <SearchBox />
            <NavContainer>
                <Horizen list={categoryTypes} title={""} handleClick={handleUpdateCatetory}
                    oldVal={category}></Horizen>
            </NavContainer>
            <ListContainer>
                <Scroll
                    direction="vertical"
                    refresh={false}
                    pullUp={handlePullUp}
                    pullDown={handlePullDown}
                    pullUpLoading={pullUpLoading}
                    pullDownLoading={pullDownLoading}
                >
                    <div className="">
                        <MenuBar menuBarData={menuBarData} />
                        <Chart />
                        <Maingoods goodData={goodData} oldVal={category} />
                    </div>
                </Scroll>
            </ListContainer>
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
