import React from 'react';
import img1 from '../../assets/images/16-36-28.png'
import './follow.css'

function Follow(props) {

    return (
        <div className="follow">
            <div className="follow-child">
                <img className='follow-child-img' src={img1} alt="" />
            </div>
        </div>
    )
}

export default Follow