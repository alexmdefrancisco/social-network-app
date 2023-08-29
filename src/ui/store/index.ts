import { configureStore } from '@reduxjs/toolkit'
import { Provider as StoreProvider } from 'react-redux'

import rootReducer from './rootReducer'

const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export { StoreProvider, store }