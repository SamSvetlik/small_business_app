
export const userReducer = (state = {}, action) => {
    switch(action.type) {
        case "SET_USER":
            if (!action.value){
                return {}
            }
            return {...state, ...action.value}
            

        default:
            return state;
    }
}
export const businessReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_BUSINESS":
            return [...state, action.value]
            
        case "REMOVE_INDEX":
            let newState = [...state]
            newState.splice(action.value, 1)
            return newState

        default:
            return state;
    }
}

