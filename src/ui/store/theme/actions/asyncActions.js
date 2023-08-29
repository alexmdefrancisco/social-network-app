import { createAsyncThunk } from '@reduxjs/toolkit'

// Domain imports
import { getThemeUseCase } from '@domain/useCases'

export const fetchThemeMode = createAsyncThunk('theme/fetchThemeMode', async function (_, { rejectWithValue }) {
    try {
        const themeMode = await getThemeUseCase()
        return themeMode
    } catch (error) {
        return rejectWithValue(error.message)
    }
})