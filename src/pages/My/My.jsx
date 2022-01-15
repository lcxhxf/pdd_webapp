import React ,{memo}from 'react'
import './My.css'
import { connect } from 'react-redux' 
import Scroll  from '../../baseUI/scroll/index'
import img1 from '../../assets/images/2.jpg'

const My = (props) =>{
   


    return (
        <>
            <Scroll
                direction="vertical"
                refresh={false}
            >
                <div className="my">
                    <div className="my-head">
                        <div className="my-head-img">
                            <img src={img1} alt="" />
                        </div>
                        <div className="">半岛铁盒</div>
                        <div className="">拼单返现</div>
                    </div>
                    <div className="my-head">222</div>
                    <div className="">333</div>
                    <div className="">444</div>

                </div>
            </Scroll>
        </>
    )
}

const mapSateToProps = (state) =>{
    return {
        
    }
}

export default connect(mapSateToProps,{})(memo(My))//memo