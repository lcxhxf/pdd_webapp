import React ,{memo}from 'react'
import './My.css'
import { connect } from 'react-redux' 
import Scroll  from '../../baseUI/scroll/index'

const My = (props) =>{
   


    return (
        <>
            <Scroll
                direction="vertical"
                refresh={false}
            >
                <div>
                    My
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