import React ,{memo}from 'react'
import './Talk.css'
import { connect } from 'react-redux' 
import Scroll  from '../../baseUI/scroll/index'

const Talk = (props) =>{
   


    return (
        <>
            <Scroll
                direction="vertical"
                refresh={false}
            >
                <div>
                    Talk
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