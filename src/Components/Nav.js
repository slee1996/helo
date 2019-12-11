import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import {logout} from '../ducks/reducer'

const Nav = (props) => {
    const logout = () => {
        axios.post('http://localhost:4000/auth/logout')
             .then(res => {
                 props.logout()
             })
             .catch(err => console.log(err))
    }

    return(
        <div id='nav'>
            <section>User: {props.user.username}</section>
            <img src={props.user.profile_pic} alt='User' />
            <Link to='/dashboard'>Home</Link>
            <Link to='/new'>New Post</Link>
            <Link onClick={logout} to='/'>Logout</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    const {user} = state
    console.log(state.username)
    return {user};
}

export default connect(mapStateToProps, {logout})(Nav)