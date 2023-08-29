// Redux imports
import { combineReducers } from '@reduxjs/toolkit'

// Reducers imports
import userReducer from './user/userSlice'
import themeReducer from './theme/themeSlice'

const rootReducer = combineReducers({
    user: userReducer,
    theme: themeReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer