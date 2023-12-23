import { combineReducers } from 'redux';
import userReducer from './user/index.tsx';


const rootReducer = combineReducers({
    user: userReducer,
})

export default rootReducer