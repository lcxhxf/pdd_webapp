import React ,{memo}from 'react'
import './Live.css'
//import './Live.style.js'
import { connect } from 'react-redux'
import  Scroll from '../../baseUI/scroll/index'

const Live = (props) => {
    const { category } = props
    return (
        <>
            <Scroll
                direction="vertical"
                refresh={false}
            >
                <div>
                    Live
                </div>
            </Scroll>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        category: state.live.category
    }
}

export default connect(mapStateToProps, {})(memo(Live))