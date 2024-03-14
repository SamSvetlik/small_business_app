import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        name: "Mad Hatter's House of Games",
        description: "A staple among the collectible card game, board game, and role playing game enthusiasts in Lubbock.",
        address: "1507 Texas Ave, Lubbock, Tx 79401",
        hours: ["Monday-Tuesday: 12 pm - 8 pm", "Wednesday: 12 pm - 10 pm", "Thursday: 12 pm - 8 pm", "Friday-Saturday: noon-midnight", "Sunday: 12pm - 6 pm"],
        url: "https://www.madhattershouseofgames.com/",
        position: {
            lat: 33.581380,
            lng: -101.845550}
    },
    {
        name: "Flipper's Tavern",
        description: "Local pub with pinball machines and gourmet hot dogs.",
        address: "1406 Avenue Q, Lubbock, Tx 79401",
        hours: ["Monday-Saturday: 11 am - midnight"],
        url: "https://www.flipperstavern.com/",
        position: {
            lat: 33.582340,
            lng: -101.855620}
    },
    {
        name: "J&B Coffee Co",
        description: "Serving coffee and tea to Texas Tech students since 1979.",
        address: "2701 26th St, Lubbock, Tx 79410",
        hours: ["Monday-Saturday: 6:30 am - 9 pm", "Sunday 8 am - 9 pm"],
        url: "https://jandbcoffee.com/",
        position: {
            lat: 33.570300,
            lng: -101.875590}
    },
    {
        name: "Star Comics",
        description: "Lubbock's original comic book shop since 1977.",
        address: "3504 34th St, Lubbock, Tx 79410",
        hours: ["Monday-Saturday: 11 am - 6 pm", "Sunday: 1 pm - 5 pm"],
        url: "https://www.starcomicsonline.com/",
        position: {
            lat: 33.563610,
            lng: -101.890360}
    },
    {
        name: "Ralph's Records",
        description: "West Texas’ largest selection of new and used Vinyl, Cds, DVD and Blu-rays and concert tickets",
        address: "3322 82nd St, Lubbock, Tx 79423",
        hours: ["Monday-Wednesday: 9 am - 9 pm", "Thursday: 9 am - 8 pm", "Friday-Saturday: 9 am - 9 pm", "Sunday: 11 am - 8 pm"],
        url: "https://ralphsrecordstx.com/",
        position: {
            lat: 33.520190,
            lng: -101.886700}
    }
]

const businessSlice = createSlice({
    name: 'businesses',
    initialState,
    reducers: {
        businessAdded(state, action) {
            state.businesses.push(action.payload)
        },
        businessRemovedByIndex(state, action) {
            state.splice(action.payload, 1)
        }
    },

})

export const {businessAdded, businessRemovedByIndex} = businessSlice.actions

export default businessSlice.reducer