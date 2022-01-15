import React ,{memo}from 'react'
import './Talk.css'
import { connect } from 'react-redux' 
import Scroll  from '../../baseUI/scroll/index'
import img1 from '../../assets/images/1.jpg'

const Talk = (props) =>{
   


    return (
        <>
            <Scroll
                direction="vertical"
                refresh={false}
            >
                <div className='talk'>
                   <img src={img1} alt="" />
                </div>
            </Scroll>
        </>
    )
}

const mapSateToProps = (state) =>{
    return {
        
    }
}

export default connect(mapSateToProps,{})(memo(Talk))//