import React from 'react';
import './cell.css'
import img1 from '../../assets/images/箭头.png'
function Cell(props) {

    return (
        <div className="cell">
            <div className="cell-left">关注的直播</div>
            <div className='cell-right-img'><img src={img1} alt="" /></div>
            <div className='cell-right-text'>全部动态</div>

        </div>
    )
}

export default Cell