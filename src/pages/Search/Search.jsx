import React, { memo,useState } from 'react'
import './Search.css'
//import './Search.style.js'
import { connect } from 'react-redux'
import Scroll from '../../baseUI/scroll/index'
import SearchBox from '../../components/search/search'
import Sort from '../../components/sort/sort.jsx'
import {
    SearchBoxStyle
} from "./Search.style";
import Horizen from '../../baseUI/horizen-item-y';

const Search = (props) => {
    var categoryTypes = [
        {
            "name": "推荐",
            "key": "0"
        },
        {
            "name": "推荐",
            "key": "1"
        },
        {
            "name": "推荐",
            "key": "2"
        },
        {
            "name": "推荐",
            "key": "3"
        },
        {
            "name": "推荐",
            "key": "4"
        },
        {
            "name": "推荐",
            "key": "5"
        },
        {
            "name": "推荐",
            "key": "6"
        },
        {
            "name": "推荐",
            "key": "7"
        },
        {
            "name": "推荐",
            "key": "8"
        },
        {
            "name": "推荐",
            "key": "9"
        },
        {
            "name": "推荐",
            "key": "10"
        },
        {
            "name": "推荐",
            "key": "11"
        },
        {
            "name": "推荐",
            "key": "12"
        },
        {
            "name": "推荐",
            "key": "13"
        },
    ]
    let [category, setCategory] = useState('0');
    const handleUpdateCatetory = (val) => {
        setCategory(val);
    }
    return (
        <>
            <div className="Search">
                    <SearchBox />
                    <Horizen list={categoryTypes} title={""} handleClick={handleUpdateCatetory}
                    oldVal={category}></Horizen>
                        <Sort/>                
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        category: state.search.category
    }
}

export default connect(mapStateToProps, {})(memo(Search))