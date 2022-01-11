import { combineReducers } from 'redux';
import { reducer as mainReducer } from '../pages/Main/store/index'
import { reducer as liveReducer } from '../pages/Live/store/index'
import { reducer as searchReducer } from '../pages/Search/store/index'
import { reducer as talkReducer } from '../pages/Talk/store/index'
import { reducer as myReducer } from '../pages/My/store/index'


export default combineReducers({
    main: mainReducer,
    live: liveReducer,
    search: searchReducer,
    talk: talkReducer,
    my: myReducer
});