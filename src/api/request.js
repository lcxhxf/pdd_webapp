// 所有接口方法的列表
import Ajax from './ajax.js'
export const {
    getHotSingerListRequest,
    getSingerListRequest
  } = () => {
    return Ajax('/home/main')
}