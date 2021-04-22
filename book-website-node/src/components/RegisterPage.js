import React, { useState } from 'react'

function RegisterPage(props) {

    const [user, setUser] = useState({})

    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value 
        })
    }  

    const handleRegister = () => {
        fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({user})
        }).then(window.location.href = "/login")
    }
    
    return (
        <div>
            <div className="login-container">
                <h3>Register</h3>
                <input onChange={handleOnChange} type="text" placeholder="Username" name="username"></input>
                <input onChange={handleOnChange} type="password" placeholder="Password" name="password"></input>
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>

    )
}

export default RegisterPage