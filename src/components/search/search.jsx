import React, { Component } from 'react';
import imgSearch from '../../assets/images/搜索.png'
import imgCamera from '../../assets/images/相机.png'

import {SearchBoxstyle} from './style.js'
class SearchBox extends Component {
    render() {
        return (
            <SearchBoxstyle>
                <div className="server-search-input">
                    <div className="server-search-place">
                        <p className='server-search-border'>
                            <img className='server-search-img' src={imgSearch}></img>
                        </p>
                        <input type="text" placeholder='搜索你想要的商品' style={{fontSize:"11px"}} /> 
                        <img className='server-search-camera' src={imgCamera}></img>
                    </div>
                </div>
            </SearchBoxstyle>
        );
    }
}


export default SearchBox;
