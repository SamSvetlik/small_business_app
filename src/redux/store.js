import { configureStore } from '@reduxjs/toolkit'
import preloadedState from './state'
import businessReducer from './businessSlice'
import userReducer from './userSlice'


const store = configureStore({
    reducer: {
        user: userReducer,
        businesses: businessReducer
    },
    preloadedState
})

export default store