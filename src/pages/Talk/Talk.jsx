import React, { memo } from 'react'
import './Talk.css'
import { connect } from 'react-redux'
import Scroll from '../../baseUI/scroll/index'
import img1 from '../../assets/images/店铺评价.png'
import img2 from '../../assets/images/分享2.png'
import Goods from '../../components/goods/goods'
import {ListContainer} from './Talk.style'

const Talk = (props) => {



    return (
        <>
            <ListContainer>
                <Scroll
                    direction="vertical"
                    refresh={false}
                >
                    <div className='talk'>
                        <div className="talk-title">聊天</div>
                        <div className="talk-shop">
                            <div className="">
                                <img src={img1} alt="" />
                            </div>
                            <div className="">
                                <div className="talk-shop-t1">增肌超人店铺</div>
                                <div className="talk-shop-t2">交易成功通知</div>
                            </div>
                            <div className="talk-shop-t3">22/01/17</div>
                        </div>
                        <div className="talk-text">
                            <div className="">
                                <img src={img2} alt="" />
                            </div>
                            <div className="talk-text-t1">为你推荐</div>
                        </div>
                        <Goods />
                    </div>

                </Scroll>
            </ListContainer>
        </>
    )
}

const mapSateToProps = (state) => {
    return {

    }
}

export default connect(mapSateToProps, {})(memo(Talk))//