import { configureStore } from '@reduxjs/toolkit'
import state from './state'
import businessReducer from './businessSlice'
import userReducer from './userSlice'


const store = configureStore({
    reducer: {
        user: userReducer,
        businesses: businessReducer
    },
    preloadedState: state
})

export default store