import React from 'react';
import './chart.css'
import img1 from '../../assets/images/14-44-43.png'
import img2 from '../../assets/images/14-44-47.png'
import img3 from '../../assets/images/15-04-21.png'
import img4 from '../../assets/images/15-04-34.png'
function Chart(props) {

    return (
        <div className="chart">
            <div className="chart-Ranking">
                <div className="chart-Ranking-text">
                    <h5>排行榜</h5>
                    <h5>每日更新</h5>
                </div>
                <div className="chart-Ranking-img1"><img src={img1} alt="" /></div>
                <div className="chart-Ranking-img2"><img src={img2} alt="" /></div>
            </div>
            <div className="chart-border"></div>
            <div className="chart-recommend">
            <div className="chart-recommend-text">
                    <h5>小编推荐</h5>
                    <h5>精选好货</h5>
                </div>
                <div className="chart-recommend-img1"><img src={img3} alt="" /></div>
                <div className="chart-recommend-img2"><img src={img4} alt="" /></div>
            </div>
        </div>
    )
}

export default Chart