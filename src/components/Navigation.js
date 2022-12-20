import React from 'react'
import { AppBar, Toolbar, 
  Typography
} from '@mui/material'
import { Link } from 'react-router-dom'
import cookie from "cookie";


const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}
const logOut = () => {
    document.cookie = cookie.serialize("loggedIn", null, {
        maxAge: 0,
    });
}

const Navigation = (props) => {

    return (
        <AppBar position="relative" color='primary'>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Lubbock Small Business
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/business">Businesses</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/add">Add</Link>
                    </li>
                    {checkAuth() ? 
                        (<li className="nav-list-item">
                            <Link to="/login" onClick={() => {
                                logOut()
                                props.setUser(null)
                                }}>Logout</Link>
                        </li>) 
                        : 
                        (<li className="nav-list-item">
                                <Link to="/login">Login</Link>
                        </li>)} 
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation