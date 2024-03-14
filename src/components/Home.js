import React from 'react'
import cookie from 'cookie'
import { useSelector, useDispatch } from 'react-redux'
import { userSet } from '../redux/userSlice'
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const Home = (props) => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    return (
        <div >
            {checkAuth() ? (<h2> Logged in!  Welcome, {user.username}!</h2>) : (<h2>Not logged in!</h2>)}
        </div>
    )
}

export default Home