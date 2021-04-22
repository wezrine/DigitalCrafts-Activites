import React, { useState } from 'react'

function AddBookPage () {

    const [details, setDetails] = useState({})

    const handleOnChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value 
        })
    }   

    const handleSubmit = () => {

        fetch('http://localhost:8080/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({details})
        }).then(window.location.href = "/books")
    }

    return (
        <div className="add-book-input">
            <h1>Add Book</h1>
            <input type="text" onChange = {handleOnChange} placeholder="Title" name = "title" />
            <input type="text" onChange = {handleOnChange} placeholder="Author" name = "author" />
            <input type="text" onChange = {handleOnChange} placeholder="Genre" name = "genre" />
            <input type="text" onChange = {handleOnChange} placeholder="Year" name = "year" />
            <input type="text" onChange = {handleOnChange} placeholder="Image URL" name = "imageURL" />
            <button onClick = {handleSubmit} >Save</button>
        </div>
    )
}

export default AddBookPage