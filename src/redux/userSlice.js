import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        userSet(state, action) {
            if (!action.payload) {
                return {}
            }
            return action.payload
        }
    }
})

export const { userSet} = userSlice.actions

export default userSlice.reducer