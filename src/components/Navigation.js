import React from 'react'
import { AppBar, Toolbar, 
  Typography
} from '@mui/material'
import { green } from '@mui/material/colors';
import { Link } from 'react-router-dom'

const primary = green
const Navigation = () => {
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
                        <Link to="/listings">Listings</Link>
                    </li>
                    {/* <li className="nav-list-item">
                        <Link to="/add">Add</Link>
                    </li> */}
                    <li className="nav-list-item">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation