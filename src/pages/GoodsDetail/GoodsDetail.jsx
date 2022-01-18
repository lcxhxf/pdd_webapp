import React, { memo } from 'react'
import { connect } from 'react-redux'
import './GoodsDetail.css'
import img1 from '../../assets/images/返回.png'
import img2 from '../../assets/images/16-36-00.png'
import img3 from '../../assets/images/分享1.png'
import img4 from '../../assets/images/箭头.png'
import img5 from '../../assets/images/2.jpg'
import img6 from '../../assets/images/微信图片_20220118181952.jpg'
import { useHistory } from 'react-router-dom'

const GoodsDetail = (props) => {
    const history = useHistory()
    const handleClick = () => {
        history.push('/home/main')
    }
    return (
        <>
            <div className="goodsdetail">
                <div className="goodsdetail-back">
                    <div className="" onClick={() => { handleClick() }}><img src={img1} alt="" /></div>
                    <div className="goodsdetail-back-title">商品详情</div>
                </div>
                <div className="goodsdetail-Rotation">
                    <img src={img2} alt="" />
                </div>
                <div className="goodsdetail-introduction">
                    <div className="goodsdetail-introduction-price">
                        <div className="goodsdetail-introduction-price-left">￥2985.99</div>
                        <div className="goodsdetail-introduction-price-right">已拼1375件</div>
                    </div>
                    <div className="goodsdetail-introduction-share">
                        <div className="goodsdetail-introduction-share-left">2020新款M1芯片Apple/苹果MacBook. Air13
                            寸全新笔记本电脑便携薄顺丰包邮
                        </div>
                        <div className="goodsdetail-introduction-share-right">
                            <img src={img3} alt="" />
                        </div>
                    </div>
                    <div className="goodsdetail-introduction-afterSale">
                        <div className="goodsdetail-introduction-afterSale-left">顺丰包邮.退货包运费. 7天无理由退货，假一赔十
                        </div>
                        <div className="goodsdetail-introduction-afterSale-right">
                            <img src={img4} alt="" />
                        </div>
                    </div>
                    <div className="goodsdetail-introduction-spell">
                        <div className="goodsdetail-introduction-spell-title">
                            <div className="goodsdetail-introduction-spell-title1">这些人刚刚拼单成功，可参与拼单</div>
                            <div className="goodsdetail-introduction-spell-title2">查看更多</div>
                            <div className="">
                                <img src={img4} alt="" />
                            </div>
                        </div>
                        <div className="goodsdetail-introduction-spell-pic">
                            <div className="goodsdetail-introduction-spell-pictop">
                                <div className="">
                                    <img src={img5} alt="" />
                                </div>
                                <div className="goodsdetail-introduction-spell-pictop-name">叶湘伦</div>
                                <div className="goodsdetail-introduction-spell-pictop-btn">去拼单</div>
                            </div>
                            <div className="goodsdetail-introduction-spell-pictop">
                                <div className="">
                                    <img src={img6} alt="" />
                                </div>
                                <div className="goodsdetail-introduction-spell-pictop-name">jay</div>
                                <div className="goodsdetail-introduction-spell-pictop-btn">
                                    去拼单</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="goodsdetail-evaluate">
                    <div className="goodsdetail-introduction-spell-title">
                        <div className="goodsdetail-introduction-spell-title1">商品评价(146)</div>
                        <div className="goodsdetail-introduction-spell-title2 goodsdetail-introduction-spell-title3">查看更多</div>
                        <div className="">
                            <img src={img4} alt="" />
                        </div>
                    </div>
                    <div className="">111</div>
                    <div className="">222</div>
                    <div className="">333</div>
                </div>
                <div className="goodsdetail-detail">详情</div>
                <div className="goodsdetail-recommend">推荐</div>
            </div>
        </>
    )
}

const mapSateToProps = (state) => {
    return {

    }
}

export default connect(mapSateToProps, {})(memo(GoodsDetail))//