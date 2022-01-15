import React from 'react';
import './cell-my.css'
import img1 from '../../assets/images/箭头.png'
function CellMy(props) {

    return (
        <div className="cell">
            <div className="cell-left">我的订单</div>
            <div className='cell-right-img'><img src={img1} alt="" /></div>
            <div className='cell-right-text'>查看全部</div>

        </div>
    )
}

export default CellMy