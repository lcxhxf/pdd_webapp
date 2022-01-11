import React ,{memo}from 'react'
import './Search.css'
//import './Search.style.js'
import { connect } from 'react-redux'
import  Scroll from '../../baseUI/scroll/index'

const Search = (props) => {
    const { category } = props
    return (
        <>
            <Scroll
                direction="vertical"
                refresh={false}
            >
                <div>
                    Search
                </div>
            </Scroll>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        category: state.search.category
    }
}

export default connect(mapStateToProps, {})(memo(Search))