import React, { Component } from 'react'
import '../styling/output.css'
import axios from 'axios'
import {getUser} from '../ducks/reducer'
import {connect} from 'react-redux'

class Auth extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    registerUser = () => {
        const {username, password} = this.state
        
        axios.post('http://localhost:4000/auth/register', {username, password})
            .then(res => {
                this.props.history.push('/dashboard')
                this.props.getUser(res.data)
            })
            .catch(err => console.log(err))
    }

    handleLogin = () => {
        axios.post('http://localhost:4000/auth/login', {username: this.state.username, password: this.state.password})
            .then(res => {
                console.log(this.state.password)
                this.props.history.push('/dashboard')
                this.props.getUser(res.data)
                console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div id='auth-wrapper'>
                <div id='auth'>
                    <h1>Helo</h1>
                    <br/>
                    <label>
                        Username: <input type='text' maxLength='20' placeholder='Enter Username' name='username' onChange={(event) => this.handleInput(event)}></input>
                    </label>
                    <label>
                        Password: <input type='text' placeholder='Enter Password' name='password' onChange={(event) => this.handleInput(event)}></input>
                    </label>
                    <button onClick={this.handleLogin}>Login</button>
                    <button onClick={this.registerUser}>Register</button>
                </div>
            </div>
        )
    }
}

export default connect(null, {getUser})(Auth);