import React from 'react';
import './maingoods.css'

import img1 from '../../assets/images/15-31-35.png'
import img2 from '../../assets/images/15-31-39.png'
import img3 from '../../assets/images/点赞.png'
import { useHistory } from 'react-router-dom'

function Maingoods(props) {
    const { goodData,oldVal } = props;
    // console.log(goodData,'222222222222222');
    console.log(goodData[oldVal]?.picUrl,'1111111111111');
    const history = useHistory()
    const handleClick = () => {
        history.push('/home/goodsdetail')
    }
    let list = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    return (
        <div className='goods' onClick={() => { handleClick() }}>
            {/* <div className="goods-child">
                <img src={goodData[oldVal]?.picUrl} alt="" />
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
            </div> */}
            {
                list.map((item,index) => {
                    return <div className="goods-child" key={index}>
                    <img src={goodData[oldVal]?.picUrl} alt="" />
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
                })
            }
        </div>

    )
}

export default Maingoods