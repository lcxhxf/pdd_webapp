import React from 'react';
import img1 from '../../assets/images/16-36-28.png'
import img2 from '../../assets/images/16-31-04.gif'
import './follow.css'

function Follow(props) {

    return (
        <div className="follow">
            <div className="follow-child">
                <img className='follow-child-img' src={img1} alt="" />
                <div className="follow-child-gif">
                    <img src={img2} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Follow