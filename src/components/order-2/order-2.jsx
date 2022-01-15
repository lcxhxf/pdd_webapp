import React from 'react';
import img1 from '../../assets/images/优惠券.png'
import img2 from '../../assets/images/收藏.png'
import img3 from '../../assets/images/关注.png'
import img4 from '../../assets/images/脚印.png'
import img5 from '../../assets/images/钱 .png'

import './order-2.css'
function Order2(props) {

    return (
        <div className="order-style">
            <div className="order">
            <div className="order-child">
                <img className='order-img' src={img1} alt="" />
                <p className='order-text'>优惠券</p>
            </div>
            <div className="order-child">
                <img className='order-img' src={img2} alt="" />
                <p className='order-text'>商品收藏</p>
            </div>
            <div className="order-child">
                <img className='order-img' src={img3} alt="" />
                <p className='order-text'>店铺关注</p>
            </div>
            <div className="order-child">
                <img className='order-img' src={img4} alt="" />
                <p className='order-text'>历史浏览</p>
            </div>
            <div className="order-child">
                <img className='order-img' src={img5} alt="" />
                <p className='order-text'>退款售后</p>
            </div>
        </div>
        </div>
        
    )
}

export default Order2