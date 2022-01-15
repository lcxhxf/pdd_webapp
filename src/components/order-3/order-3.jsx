import React from 'react';
import img1 from '../../assets/images/树.png'
import img2 from '../../assets/images/数字-20.png'
import img3 from '../../assets/images/地址管理.png'
import img4 from '../../assets/images/设置.png'
import img5 from '../../assets/images/客服.png'
import img6 from '../../assets/images/火车站.png'

import './order-3.css'
function Order3(props) {

    return (
        <div className="order-style">
            <div className="order">
                <div className="order-child">
                    <img className='order-img' src={img1} alt="" />
                    <p className='order-text'>待付款</p>
                </div>
                <div className="order-child">
                    <img className='order-img' src={img2} alt="" />
                    <p className='order-text'>待分享</p>
                </div>
                <div className="order-child">
                    <img className='order-img' src={img3} alt="" />
                    <p className='order-text'>待发货</p>
                </div>
                <div className="order-child">
                    <img className='order-img' src={img4} alt="" />
                    <p className='order-text'>待收货</p>
                </div>
                <div className="order-child">
                    <img className='order-img' src={img5} alt="" />
                    <p className='order-text'>评价</p>
                </div>
            </div>
            <div className="order2">
                <div className="order-child2">
                    <img className='order-img' src={img6} alt="" />
                    <p className='order-text'>待付款</p>
                </div>
            </div>
        </div>

    )
}

export default Order3