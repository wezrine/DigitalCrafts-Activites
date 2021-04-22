import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'

function LoginPage(props) {

    const [user, setUser] = useState({})

    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value 
        })
    }  

    const handleLogin = () => {
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({user})
        }).then(props.onLogin())
    }

    return (
        <div>
            <div className="login-container">
                <h3>Login</h3>
                <input onChange={handleOnChange} type="text" placeholder="Username" name="username"></input>
                <input onChange={handleOnChange} type="password" placeholder="Password" name="password"></input>
                <button onClick={handleLogin}>Login</button>
            </div>
            <NavLink to = "/register"><div className="link bootstrap-link">Register</div></NavLink>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: () => dispatch({type: 'LOGIN'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)