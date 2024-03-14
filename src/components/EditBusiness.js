import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Paper, TextField, Button, Chip } from '@mui/material'
import { editBusiness } from "../redux/businessSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";



const EditBusiness = (props) => {
    const id = useParams().id;
    const dispach = useDispatch()
    const business = useSelector(state => state.businesses[id])

    const [newBiz, setNewBiz] = useState({
        ...business
    })

    console.log(newBiz)

    const [tempHours, setTempHours] = useState("")

    const navigate = useNavigate()

    const handleTextChange = (e) => {
        const newState = { ...newBiz }
        newState[e.target.id] = e.target.value
        setNewBiz(newState)
    }
    
    const updateTempHours = (e) => {
        let newState = e.target.value
        setTempHours(newState)
    }

    const handleHours = (e) => {
        if (tempHours) {
            const newState = { ...newBiz }
            newState.hours.push(tempHours)
            setNewBiz(newState)
            setTempHours("")
        }
    }

    const deleteHour = (index) => {
        const newState = {...newBiz}
        newState.hours = newState.hours.filter((hour, i) => i !== index);
        setNewBiz(newState)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newBiz.hours.length === 0){
            alert("Looks like your business has no hours listed.  Be sure and click 'add hours' after you type the schedule!")
        } else
        fetch(`https://geocode.maps.co/search?q=${newBiz.address}`)
            .then((response)=> response.json())
            .then((data)=> {
                const pos = {
                    lat: parseFloat(data[0].lat),
                    lng: parseFloat(data[0].lon)
                }
                setNewBiz((prev)=> {prev.position = pos})
                const payload = {
                    id: id,
                    newValues: {...newBiz }
                }
                dispach(editBusiness(payload))
                navigate("/business")
            })
            .catch((err)=> console.log(err))
    }

    return (
        <Container className="addContainer">
            <Paper>
            <h1>Edit a business' details!</h1>
            <form onSubmit={handleSubmit} >
            <TextField 
                id="name" 
                className="addInput"
                placeholder="Business Name" 
                value={newBiz.name} 
                onChange={handleTextChange} 
                required />
            <TextField 
                id="description" 
                className="addInput"
                placeholder="Type a description of this business" 
                value={newBiz.description} 
                onChange={handleTextChange} 
                required />
            <TextField 
                id="address" 
                className="addInput"
                placeholder="What's the address?" 
                value={newBiz.address} 
                onChange={handleTextChange} 
                required />
            <TextField 
                id="hours" 
                className="addInput"
                placeholder="When are they open? e.g. Sunday: 1 pm - 5 pm" 
                value={tempHours} 
                onChange={updateTempHours} 
                 />
            <Button onClick={handleHours}>Add hours</Button>
            {newBiz.hours.map((entry, index)=> {
                // May need to add Stack element here 
                return <Chip label={entry} onDelete={()=> {deleteHour(index)}}></Chip>
            })}
            <TextField 
                id="url" 
                className="addInput"
                placeholder="What's the business' website?" 
                value={newBiz.url} 
                onChange={handleTextChange} 
                required />
            <Button variant="contained" type="submit">Edit business!</Button>
            </form>
            </Paper>
        </Container>
    )

}

export default EditBusiness