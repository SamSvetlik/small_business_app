import { combineReducers } from 'redux'

const user = (state = {}, action) => {
    switch(action.type) {
        case "SET_USER":
            return {...state, ...action.value}
            

        default:
            return state;
    }
}
const businesses = (state = [], action) => {
    switch(action.type) {
        case "ADD_BUSINESS":
            return [...state, ...action.value]
            

        default:
            return state;
    }
}

export default combineReducers({ user, businesses })