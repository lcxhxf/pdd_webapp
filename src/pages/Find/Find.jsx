import React, { memo } from 'react'
import './Find.css'
import { connect } from 'react-redux'
import { SearchBoxstyle } from './Find.style'
import imgSearch from '../../assets/images/搜索.png'
import imgCamera from '../../assets/images/相机.png'
import Scroll from '../../baseUI/scroll/index'
import img1 from '../../assets/images/指南针.png'
import img2 from '../../assets/images/眼睛.png'


const Find = (props) => {

    return (
        <>
            <div className="find">
                <SearchBoxstyle >
                    <div className="server-search-input" >
                        <div className="server-search-place">
                            <p className='server-search-border'>
                                <img className='server-search-img' src={imgSearch}></img>
                            </p>
                            <input type="text" placeholder='搜索你想要的商品' style={{ fontSize: "11px" }} />
                            <img className='server-search-camera' src={imgCamera}></img>
                        </div>
                    </div>
                </SearchBoxstyle>
                <div className="find-list">
                    <div className="find-list-img">
                        <div className="find-list-img1"> <img src={img1} alt="" /></div>
                        <div className="find-list-img-text">搜索发现</div>
                        <div className=""> <img src={img2} alt="" /></div>
                        </div>
                    <div className="find-list-list">
                        <div className="find-list-list-child">macbookm1</div>
                        <div className="find-list-list-child">macbook</div>
                        <div className="find-list-list-child">红魔手机壳</div>
                        <div className="find-list-list-child">百亿补贴ipad</div>
                        <div className="find-list-list-child">madpad11保护套</div>
                        <div className="find-list-list-child">macbook air 16g</div>
                        <div className="find-list-list-child">苹果笔记本air</div>
                        <div className="find-list-list-child">高级感衬衫男</div>
                        <div className="find-list-list-child">白衬衫男正装</div>
                        </div>
                </div>
            </div>
        </>
    )
}

const mapSateToProps = (state) => {
    return {

    }
}

export default connect(mapSateToProps, {})(memo(Find))//