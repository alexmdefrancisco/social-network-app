// Redux imports
import { createSlice } from '@reduxjs/toolkit'

// Assets
import { darkTheme, lightTheme } from '@ui/assets/theme'

import { fetchThemeMode } from './actions/asyncActions'

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        mode: 'light',
        status: 'idle',
        currentTheme: lightTheme,
        error: null
    },
    reducers: {
        updateThemeMode: (state, action) => {
            state.mode = action.payload
            if (action.payload === 'light') {
                state.currentTheme = lightTheme
            } else if (action.payload === 'dark') {
                state.currentTheme = darkTheme
            } else if (action.payload === 'system') {
                // Here you would need to determine whether to use the light or dark theme
                // based on the system settings. The following is just an example.
                // const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
                // state.theme = prefersDarkMode ? darkTheme : lightTheme
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchThemeMode.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchThemeMode.fulfilled, (state, action) => {
                state.mode = action.payload
                state.status = 'idle'
            })
            .addCase(fetchThemeMode.rejected, (state, action) => {
                state.status = 'idle'
                state.error = action.payload
            })
    }
})

export const { updateThemeMode } = themeSlice.actions

export default themeSlice.reducer