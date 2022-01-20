import React, { memo, useState,useEffect } from 'react'
import { connect } from 'react-redux'
import './GoodsDetail.css'
import img1 from '../../assets/images/返回.png'
import img2 from '../../assets/images/16-36-00.png'
import img3 from '../../assets/images/分享1.png'
import img4 from '../../assets/images/箭头.png'
import img5 from '../../assets/images/2.jpg'
import img6 from '../../assets/images/微信图片_20220118181952.jpg'
import img7 from '../../assets/images/00-06-31.png'
import img8 from '../../assets/images/00-06-34.png'
import img9 from '../../assets/images/商家.png'
import img10 from '../../assets/images/空心.png'
import img11 from '../../assets/images/消息.png'
import Goods from '../../components/goods/goods'
import img12 from '../../assets/images/close-l.png'
import img13 from '../../assets/images/wxb定位.png'
import img14 from '../../assets/images/箭头.png'
import img15 from '../../assets/images/16-36-00.png'
import img16 from '../../assets/images/加号.png'
import img17 from '../../assets/images/减号.png'


import Scroll from '../../baseUI/scroll/index'
import {
    ListContainer,
} from "./GoodsDetail.style";



import { useHistory } from 'react-router-dom'

const GoodsDetail = (props) => {
    const history = useHistory()
    const handleClick = () => {
        history.push('/home/main')
    }
    let [buy,setBuy] = useState(false)
    let [kindstyle,setKindstyle] = useState(0)
    let [name,setName] = useState('20款M1/8G/256G灰N63')
    let [addNum,setAddNum] = useState(1)
    let [preprice,setPreprice] = useState(6120)
    let [totalprice,setTotalprice] = useState(6120)
    let kind = ['20款M1/8G/256G灰N63','20款M1/8G/256G银N93', '20款M11/8G/256G金ND3','20款M1/8G/512G灰N73','20款M1/8G/512G银NA3', 'M1芯片256定制16G银','M1芯片256定制16G金','M1芯片1TB定制16G银灰金', 'M1芯片256定制16G金','M1芯片1TB定制16G银灰金','M1芯片256定制16G金', 'M1芯片1TB定制16G银灰金','M1芯片256定制16G金','M1芯片1TB定制16G银灰金', 'M1芯片256定制16G金','M1芯片1TB定制16G银灰金']
    const buyClick = () => {
        setBuy(true)
    }
    const closeClick = () => {
        setBuy(false)
    }
    const reduceClick = () => {
        setAddNum(addNum-1)
        setTotalprice(addNum*preprice)
    }
    const addClick = () => {
        setAddNum(addNum+1)
        setTotalprice(addNum*preprice)
    }
    const kindClick = (e) => {
        // console.log(e);
        setKindstyle(e.target.id)
        setName(e.target.innerHTML)
    }
    // useEffect(() => {

    // }, totalprice)
    return (
        <>
            <div className="goodsdetail" style={buy?{}:{}}>
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
                    <div className="goodsdetail-introduction-spell-label">
                        <div className="goodsdetail-introduction-spell-label1">正品（80）</div>
                        <div className="goodsdetail-introduction-spell-label2">很好吃（2.4万）</div>
                    </div>
                    <div className="goodsdetail-evaluate-text" >
                        <div className="" style={{ display: "flex" }}>
                            <img src={img6} alt="" style={{ width: "30px", height: "30px", "border-radius": "50%" }} />
                            <p>周小伦</p>
                        </div>
                        <div className="goodsdetail-evaluate-text-txt">用了一周才确认收货,电脑是正品，官网可查询。看了很多家，最终决定买这一家的。发货快,赠品也很好.</div>
                    </div>
                    <div className="goodsdetail-evaluate-text" >
                        <div className="" style={{ display: "flex" }}>
                            <img src={img5} alt="" style={{ width: "30px", height: "30px", "border-radius": "50%" }} />
                            <p>周jie伦</p>
                        </div>
                        <div className="goodsdetail-evaluate-text-txt">49年入国军?没有这事!看了新款MBP后。果断入手颜值与性能并全。价格实惠，16g开发够用。</div>
                    </div>
                </div>
                <div className="goodsdetail-evaluate">
                    <div className="goodsdetail-introduction-spell-title">
                        <div className="goodsdetail-introduction-spell-title1">行家心得(2)</div>
                        <div className="goodsdetail-introduction-spell-title2 goodsdetail-introduction-spell-title3">查看更多</div>
                        <div className="">
                            <img src={img4} alt="" />
                        </div>
                    </div>
                    <div className="goodsdetail-evaluate-text" >
                        <div className="" style={{ display: "flex" }}>
                            <img src={img6} alt="" style={{ width: "30px", height: "30px", "border-radius": "50%" }} />
                            <p>我们都是小青蛙?</p>
                        </div>
                        <div className="goodsdetail-evaluate-text-txt">用了一周才确认收货,电脑是正品，官网可查询。看了很多家，最终决定买这一家的。发货快,赠品也很好.</div>
                    </div>
                </div>
                <div className="title1">商品详情</div>
                <div className="goodsdetail-detail">
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                </div>
                <div className="title2">推荐</div>
                <Goods />
            </div>
            <div className="tabbar" onClick={() => { buyClick() }}>
                <div className="tabbar1">
                    <div className=""><img src={img9} alt="" /></div>
                    <div className="">店铺</div>
                </div>
                <div className="tabbar2">
                    <div className=""><img src={img10} alt="" /></div>
                    <div className=""> 收藏</div>
                </div>
                <div className="tabbar3">
                    <div className=""><img src={img11} alt="" /></div>
                    <div className=""> 客服</div>
                </div>
                <div className="tabbar4">
                    <div className="">￥7999</div>
                    <div className=""> 单独购买</div>
                </div>
                <div className="tabbar5">
                    <div className="">￥7899</div>
                    <div className=""> 发起拼单</div>
                </div>
            </div>
            <div className="buy" style={buy?{}:{display: "none"}}>
                <div className="buy-head">
                    <div className="buy-head-title">确认订单</div>
                    <div className="">
                        <img src={img12} alt="" onClick={() => { closeClick() }}/>
                    </div>
                </div>        
                <Scroll
                    direction="vertical"
                    refresh={false}
                    pullUpLoading={true}
                    pullDownLoading={true}
                >
                    <div className="">
                      <div className="buy-address">
                          <div className="">
                              <img src={img13} alt="" />
                          </div>
                          <div className="">罗*,178****3357,**省**市****I昌北开发区*****************3号楼2栋</div>
                          <div className="">
                              <img src={img14} alt="" />
                          </div>
                      </div>
                      <div className="buy-img">
                          <div className="">
                              <img src={img15} alt="" />
                          </div>
                          <div className="">
                              <div className="buy-img-price">￥{totalprice}</div>
                              <div className="buy-img-name">已选: {name}</div>
                              <div className="buy-img-num">
                                  <div className="buy-img-add">
                                      <img src={img17} alt="" onClick={() => { reduceClick() }}/>
                                  </div>
                                  <div className="buy-img-add-num">{addNum}</div>
                                  <div className="">
                                      <img src={img16} alt="" onClick={() => { addClick() }}/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="buy-kind">
                          <p className='buy-kind-title'>颜色分类</p>
                          {
                            kind.map((item,index) => {
                                return <div className="111" id={index} onClick={(e) => { kindClick(e) }} style={kindstyle == index?{"background-color": "red",color: "#fff"}:{}}>{item}</div>
                            })
                          }
                          {/* <div className="" onClick={() => { kindClick() }} style={}>20款M1/8G/256G灰N63</div> */}  
                      </div>
                    </div>
                </Scroll>
                <div className="buy-buttom">
                    立即支付￥{totalprice}
                </div>
            </div>
            <div className="buy-hover" style={buy?{}:{display: "none"}}></div>
        </>
    )
}

const mapSateToProps = (state) => {
    return {

    }
}

export default connect(mapSateToProps, {})(memo(GoodsDetail))//