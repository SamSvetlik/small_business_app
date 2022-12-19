import React from 'react'
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import cookie from "cookie";

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const Businesses = (props) => {
    return (
        <TableContainer style={{width: "95%", margin: "auto"}} component={Paper} elevation={8} >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Business Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>More Info</TableCell>
                        <TableCell>Remove Business</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.businesses.map((business, index)=> {
                        return (
                            <TableRow>
                                <TableCell>{business.name}</TableCell>
                                <TableCell>{business.address}</TableCell>
                                <TableCell>{business.hours.reduce((prev, cur) => [ ...prev, cur, <br /> ], [])}</TableCell>
                                <TableCell>
                                <Link to={`/business/${index}`}>See More Details</Link>
                                </TableCell>
                                <TableCell>
                                    {checkAuth() === true
                                    ? <DeleteIcon onClick={() => {props.removeIndex(index)}} />
                                    : "Please login to delete"}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Businesses