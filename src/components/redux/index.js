import { combineReducers } from 'redux'

import globalsReducer from './globals'

const rootReducer = combineReducers({
    globals: globalsReducer,
})

export default rootReducer