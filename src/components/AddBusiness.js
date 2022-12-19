import React, { useState } from "react"



const addBusiness = (props) => {

    const [newBiz, setNewBiz] = useState({
        name: "",
        description: "",
        address: "",
        hours: [],
        url: "",
        position: {}
    })

    handleTextChange = (e) => {
        const newState = { ...newBiz }
        newState[e.target.id] = e.target.value
        setNewBiz(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...newBiz }
        console.log("NEW BUSINESS: ", payload)
        // props.addBusiness(payload)
    }
// see https://stackoverflow.com/questions/53519578/forms-as-functional-components-with-react
// add {position} with https://geocode.maps.co/
// examples of input fields on wk6 repo, AddCar component
    return (
        <div>
            Hello World!
        </div>
    )

}