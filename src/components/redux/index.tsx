import { combineReducers } from 'redux';
import globalsReducer from './globals/index.tsx';
import userReducer from './user/index.tsx';


const rootReducer = combineReducers({
    globals: globalsReducer,
    user: userReducer,
})

export default rootReducer