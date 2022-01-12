import React from 'react'
import './menuBarItem.css'
import Scroll from '../../../baseUI/scroll/index'

const MenuBarItem = (props) => {
    const { menuBarData=[] } = props
    

    return (
        <>
            <div className='menu-item__box'>
                {
                    menuBarData.map((item, index) => {
                        return (
                            <div className="item-box" key={index}
                                onClick={() => {
                                    handleclick(`${item.type}`)
                                }}
                            >
                                <img src={item.picUrl} alt="" className="item-box__img" />
                                <div className="item-box__text">{item.type}</div>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default MenuBarItem