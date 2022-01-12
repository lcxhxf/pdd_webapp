import React, { useEffect } from 'react';
import MenuBarItem from './menuBarItem/menuBarItem';
import './menuBar.css';
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";

function MenuBar(props) {
    const { menuBarData } = props
    useEffect(() => {
        new Swiper('.swiper-container-menu', {
            scrollbar: {
                el: '.swiper-scrollbar-menu',
            }
        })
    }, [])
    return (
        <div className="menu-bar">
            <div className="menu-bar1">
                <div className="swiper-container-menu">
                    {/* swiper  */}
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div>
                                <MenuBarItem menuBarData={menuBarData.list1} ></MenuBarItem>
                                <MenuBarItem menuBarData={menuBarData.list2} ></MenuBarItem>
                            </div>
                        </div>
                        {/* <div className="swiper-slide"
                        style={{width: '100%'}}>
                            <div>
                                <MenuBarItem menuBarData={menuBarData.list3} ></MenuBarItem>
                                <MenuBarItem menuBarData={menuBarData.list4} ></MenuBarItem>
                            </div>
                        </div> */}
                    </div>
                    <div className="swiper-scrollbar-menu"></div>
                </div>
            </div>
        </div>
    )
}

export default MenuBar
