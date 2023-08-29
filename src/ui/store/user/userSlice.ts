import { createSlice } from '@reduxjs/toolkit'

import { fetchUserData, signIn, signUp } from './actions/asyncActions'

interface UserState {
    isLoggedIn: boolean,
    userObject: object,
    status?: 'loading' | 'idle',
    error?: any
}

const initialState: UserState = {
    isLoggedIn: false,
    userObject: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        clearUser: (state) => {
            state.isLoggedIn = false
            state.userObject = {}
        },
        setUser: (state, action) => {
            state.isLoggedIn = true
            state.userObject = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.status = 'loading',
                state.isLoggedIn = true
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.status = 'idle'
                state.userObject = { ...state.userObject, ...action.payload }
                state.error = null
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                console.log(action)
                state.status = 'idle'
                state.error = action.payload
            })
            .addCase(signIn.pending, (state) => {
                state.status = 'loading',
                state.isLoggedIn = true
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.status = 'idle'
                state.userObject = { ...state.userObject, token: action.payload }
                state.error = null
            })
            .addCase(signIn.rejected, (state, action) => {
                console.log(action)
                state.status = 'idle'
                state.error = action.payload
            })
            .addCase(signUp.pending, (state) => {
                state.status = 'loading',
                state.isLoggedIn = true
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.status = 'idle'
                state.userObject = { ...state.userObject, token: action.payload }
                state.error = null
            })
            .addCase(signUp.rejected, (state, action) => {
                console.log(action)
                state.status = 'idle'
                state.error = action.payload
            })
    }
})

export const { clearUser, setUser } = userSlice.actions

export default userSlice.reducer