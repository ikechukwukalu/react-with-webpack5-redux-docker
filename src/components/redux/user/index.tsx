import { createSlice } from '@reduxjs/toolkit';

const getUserDetails: Function = (): object => {
    let loggedUser: string|null = localStorage.getItem('loggedUser');
    if (loggedUser) {
        return JSON.parse(loggedUser);
    }

    return {};
}

export const initialState: object = getUserDetails();

//Create a slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser: (state, { payload } ) => {
            state = payload;
        },
    },
});

// Generated actions from the slice
export const { getUser } = userSlice.actions

// A selector
export const userSelector = (state: any) => state.user

// The reducer
export default userSlice.reducer

// Asynchronous thunk action
export function setUser(user: object): any {
    return async (dispatch: any) => {
        return dispatch(getUser(user));
    }
}