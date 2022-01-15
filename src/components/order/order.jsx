import React from 'react';
import img1 from '../../assets/images/待付款.png'
import img2 from '../../assets/images/分享.png'
import img3 from '../../assets/images/时钟.png'
import img4 from '../../assets/images/发货.png'
import img5 from '../../assets/images/待评价.png'

import './order.css'
function Order(props) {

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
        </div>
        
    )
}

export default Order