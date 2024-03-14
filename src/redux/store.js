import { configureStore } from '@reduxjs/toolkit'
import { businessReducer } from './reducers'
import state from './state'

import userReducer from './userSlice'
// import businessReducer from './businessSlice'


const store = configureStore({
    reducer: {
        user: userReducer,
        businesses: businessReducer
    },
    preloadedState: state
})

export default store