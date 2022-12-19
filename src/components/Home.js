import React from 'react'
import cookie from 'cookie'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const Home = (props) => {
    return (
        <div >
            {checkAuth() ? (<h2> Logged in!  Welcome, {props.user.username}!</h2>) : (<h2>Not logged in!</h2>)}
        </div>
    )
}

export default Home