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
import Goods from '../../components/goods/goods'


const Main = (props) => {
    let [category, setCategory] = useState('0');
    // 状态
    const { maindata } = props
    // action
    const { getMainDataDispatch } = props
    const { categoryTypes = [], menuBarData = [] } = maindata

    useEffect(() => {
        if (!maindata.length) {
            getMainDataDispatch()
        }
    }, [])

    const handleUpdateCatetory = (val) => {
        setCategory(val);
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
                >
                    <div className="">
                        <MenuBar menuBarData={menuBarData} />
                        <Chart />
                        <Goods />
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
