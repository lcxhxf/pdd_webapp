import React, { memo } from 'react'
import './My.css'
import { connect } from 'react-redux'
import Scroll from '../../baseUI/scroll/index'
import img1 from '../../assets/images/2.jpg'
import img2 from '../../assets/images/红包.png'
import img3 from '../../assets/images/箭头 (1).png'
import CellMy from '../../components/cell-my/cell-my'
import Order from '../../components/order/order.jsx'
import Order2 from '../../components/order-2/order-2.jsx'
import Order3 from '../../components/order-3/order-3.jsx'
import { Order2Style } from './My.style'
import Goods from '../../components/goods/goods'

const My = (props) => {



    return (
        <>
            <Scroll
                direction="vertical"
                refresh={false}
            >
                <div className="my">
                    <div className="my-head">
                        <div className="my-head-img">
                            <img src={img1} alt="" />
                        </div>
                        <div className="my-head-name">
                            <div className="my-head-name-text1">半岛铁盒</div>
                            <div className="my-head-name-text2">更新资料</div>
                        </div>
                        <div className="my-head-right">
                            <div className="my-head-right-img">
                                <img src={img2} alt="" />
                            </div>
                            <div className="my-head-right-text">拼单返现</div>
                        </div>
                    </div>
                    <div className="my-head-month-style" >
                        <div className="my-head-month">
                            <div className="my-head-month-left">省钱月卡|先领券再下单</div>
                            <div className="my-head-month-right">
                                <div className="my-head-month-right-text">领124元通用券</div>
                                <div className="">
                                    <img src={img3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <CellMy />
                    <Order />
                    <Order2Style>
                        <Order2 />
                    </Order2Style>
                    <Order2Style>
                        <Order3 />
                    </Order2Style>
                    <Goods/>
                </div>
            </Scroll>
        </>
    )
}

const mapSateToProps = (state) => {
    return {

    }
}

export default connect(mapSateToProps, {})(memo(My))//memo