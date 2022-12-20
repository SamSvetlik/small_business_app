import React, { useState } from "react"
import { Container, Paper, TextField, Button, Chip } from '@mui/material'



const AddBusiness = (props) => {

    const [newBiz, setNewBiz] = useState({
        name: "",
        description: "",
        address: "",
        hours: [],
        url: "",
        position: {}
    })

    const [tempHours, setTempHours] = useState("")

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
            tempHours = ""
        }
    }

    const deleteHour = (index) => {
        const newState = {...newBiz}
        newState.hours.splice(index, 1)
        setNewBiz(newState)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://geocode.maps.co/search?q=${newBiz.address}`)
            .then((response)=> response.json())
            .then((data)=> {
                const pos = {
                    lat: parseFloat(data[0].lat),
                    lng: parseFloat(data[0].lon)
                }
                const newState = {...newBiz}
                newState.position = pos
                console.log(newState)
                setNewBiz(newState)
                console.log(newBiz)
                const payload = { ...newBiz }
                console.log("NEW BUSINESS: ", payload)
                props.addBusiness(payload)
            })
            .catch((err)=> console.log(err))
    }

    return (
        <Container className="addContainer">
            <Paper>
            <h1>Add your own business to the list!</h1>
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
                required />
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
            <Button variant="contained" type="submit">Add new business!</Button>
            </form>
            </Paper>
        </Container>
    )

}

export default AddBusiness