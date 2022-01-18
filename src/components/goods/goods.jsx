import React from 'react';
import './goods.css'
import {
    GoodsStyle
} from "./goods.style";
import img1 from '../../assets/images/15-31-35.png'
import img2 from '../../assets/images/15-31-39.png'
import img3 from '../../assets/images/点赞.png'
import { useHistory } from 'react-router-dom'

function Goods() {
    const history = useHistory()
    const handleClick = () => {
        history.push('/home/goodsdetail')
    }
    return (
        <div className='goods' onClick={() => { handleClick() }}>
            <div className="goods-child">
                <img src={img1} alt="" />
                <p className='goods-child-text1'>
                    <img src={img2} alt="" />
                    Apple/苹果平板电脑</p>
                <p className='goods-child-text2'>
                    <a className='goods-child-text2-img'><img src={img3} alt="" /></a>
                    <a className='goods-child-text2-a1'>小编推荐</a>
                    <a className='goods-child-text2-a2'>顺丰包邮</a>
                </p>
                <p className='goods-child-text3'>
                    <a className='goods-child-text3-a1'>￥2985.99</a>
                    <a className='goods-child-text3-a2'>已拼434件</a>
                </p>
            </div>
            <div className="goods-child">
                <img src={img1} alt="" />
                <p className='goods-child-text1'>
                    <img src={img2} alt="" />
                    Apple/苹果平板电脑</p>
                <p className='goods-child-text2'>
                    <a className='goods-child-text2-img'><img src={img3} alt="" /></a>
                    <a className='goods-child-text2-a1'>小编推荐</a>
                    <a className='goods-child-text2-a2'>顺丰包邮</a>
                </p>
                <p className='goods-child-text3'>
                    <a className='goods-child-text3-a1'>￥2985.99</a>
                    <a className='goods-child-text3-a2'>已拼434件</a>
                </p>
            </div>
            <div className="goods-child">
                <img src={img1} alt="" />
                <p className='goods-child-text1'>
                    <img src={img2} alt="" />
                    Apple/苹果平板电脑</p>
                <p className='goods-child-text2'>
                    <a className='goods-child-text2-img'><img src={img3} alt="" /></a>
                    <a className='goods-child-text2-a1'>小编推荐</a>
                    <a className='goods-child-text2-a2'>顺丰包邮</a>
                </p>
                <p className='goods-child-text3'>
                    <a className='goods-child-text3-a1'>￥2985.99</a>
                    <a className='goods-child-text3-a2'>已拼434件</a>
                </p>
            </div>
            <div className="goods-child">
                <img src={img1} alt="" />
                <p className='goods-child-text1'>
                    <img src={img2} alt="" />
                    Apple/苹果平板电脑</p>
                <p className='goods-child-text2'>
                    <a className='goods-child-text2-img'><img src={img3} alt="" /></a>
                    <a className='goods-child-text2-a1'>小编推荐</a>
                    <a className='goods-child-text2-a2'>顺丰包邮</a>
                </p>
                <p className='goods-child-text3'>
                    <a className='goods-child-text3-a1'>￥2985.99</a>
                    <a className='goods-child-text3-a2'>已拼434件</a>
                </p>
            </div>
            <div className="goods-child">
                <img src={img1} alt="" />
                <p className='goods-child-text1'>
                    <img src={img2} alt="" />
                    Apple/苹果平板电脑</p>
                <p className='goods-child-text2'>
                    <a className='goods-child-text2-img'><img src={img3} alt="" /></a>
                    <a className='goods-child-text2-a1'>小编推荐</a>
                    <a className='goods-child-text2-a2'>顺丰包邮</a>
                </p>
                <p className='goods-child-text3'>
                    <a className='goods-child-text3-a1'>￥2985.99</a>
                    <a className='goods-child-text3-a2'>已拼434件</a>
                </p>
            </div>
            <div className="goods-child">
                <img src={img1} alt="" />
                <p className='goods-child-text1'>
                    <img src={img2} alt="" />
                    Apple/苹果平板电脑</p>
                <p className='goods-child-text2'>
                    <a className='goods-child-text2-img'><img src={img3} alt="" /></a>
                    <a className='goods-child-text2-a1'>小编推荐</a>
                    <a className='goods-child-text2-a2'>顺丰包邮</a>
                </p>
                <p className='goods-child-text3'>
                    <a className='goods-child-text3-a1'>￥2985.99</a>
                    <a className='goods-child-text3-a2'>已拼434件</a>
                </p>
            </div>
            <div className="goods-child">
                <img src={img1} alt="" />
                <p className='goods-child-text1'>
                    <img src={img2} alt="" />
                    Apple/苹果平板电脑</p>
                <p className='goods-child-text2'>
                    <a className='goods-child-text2-img'><img src={img3} alt="" /></a>
                    <a className='goods-child-text2-a1'>小编推荐</a>
                    <a className='goods-child-text2-a2'>顺丰包邮</a>
                </p>
                <p className='goods-child-text3'>
                    <a className='goods-child-text3-a1'>￥2985.99</a>
                    <a className='goods-child-text3-a2'>已拼434件</a>
                </p>
            </div>
            <div className="goods-child">
                <img src={img1} alt="" />
                <p className='goods-child-text1'>
                    <img src={img2} alt="" />
                    Apple/苹果平板电脑</p>
                <p className='goods-child-text2'>
                    <a className='goods-child-text2-img'><img src={img3} alt="" /></a>
                    <a className='goods-child-text2-a1'>小编推荐</a>
                    <a className='goods-child-text2-a2'>顺丰包邮</a>
                </p>
                <p className='goods-child-text3'>
                    <a className='goods-child-text3-a1'>￥2985.99</a>
                    <a className='goods-child-text3-a2'>已拼434件</a>
                </p>
            </div>
        </div>

    )
}

export default Goods