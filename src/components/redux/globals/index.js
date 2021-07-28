import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    base_url: '',
    api_url: ''
}
//Create a slice
const globalsSlice = createSlice({
    name: 'globals',
    initialState,
    reducers: {
        getGlobals: (state, { payload } ) => {
            state.base_url = payload.base_url;
            state.api_url = payload.api_url;
        },
    },
})

// Generated actions from the slice
export const { getGlobals } = globalsSlice.actions

// A selector
export const globalsSelector = (state) => state.globals

// The reducer
export default globalsSlice.reducer

// Asynchronous thunk action
export function setGlobals() {
    return async (dispatch) => {
        const data = {
            base_url: window.location.origin,
            api_url: window.location.pathname
        }
        return dispatch(getGlobals(data));
    }
}