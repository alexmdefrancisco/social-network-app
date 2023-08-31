import { createSlice } from '@reduxjs/toolkit'

import { fetchUserData, signIn, signUp } from './actions/asyncActions'
import { UserObject } from '@domain/entities/User'

interface UserState {
    isLoggedIn: boolean,
    userObject: object,
    status?: 'loading' | 'idle',
    error?: any
}

const initialState: UserState = {
    error: null,
    isLoggedIn: false,
    userObject: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        clearError: (state) => {
            state.error = null
        },
        clearUser: (state) => {
            state.isLoggedIn = false
            state.userObject = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.status = 'idle'
                state.userObject = { ...state.userObject, ...action.payload }
                state.error = null
            })
            .addCase(fetchUserData.rejected, (state) => {
                state.status = 'idle'
            })
            .addCase(signIn.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(signIn.fulfilled, (state) => {
                state.status = 'idle'
                state.isLoggedIn = true
                state.error = null
            })
            .addCase(signIn.rejected, (state, action) => {
                state.status = 'idle'
                state.error = action.error.message
            })
            .addCase(signUp.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(signUp.fulfilled, (state) => {
                state.status = 'idle'
                state.isLoggedIn = true
                state.error = null
            })
            .addCase(signUp.rejected, (state, action) => {
                state.status = 'idle'
                state.error = action.error.message
            })
    }
})

export const { clearError, clearUser } = userSlice.actions

export default userSlice.reducer