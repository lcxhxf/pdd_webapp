import * as actionType from './constants.js';
import { reqlive } from '../../../api/index.js';

//主页数据
export const changeLiveData = (data) => {
    // console.log("进去成功...............");
    return {
        type: actionType.CHANGE_LIVEDATA,
        data: data
    }
}

export const getLiveData = () => {
    return (dispatch) => {
            reqlive()
                .then((res) => {
                    console.log(res.data.data)
                    dispatch(changeLiveData(res.data.data))
                })
                .catch((e) => {
                    console.log('出错了')
                })
        }
        // api

    // dispatch 同步骤 一个同步的action
}