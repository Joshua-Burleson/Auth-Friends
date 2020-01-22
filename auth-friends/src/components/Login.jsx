import React, {useState} from 'react';
import axiosWithAuth from '../resources/axiosWithAuth';

const Login = props => {
    const [formState, setFormState] = useState({username: '', password: ''});

    const handleChange = event => {
        const updatedKey = event.target.name;
        setFormState({...formState, [updatedKey]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth().post('/login', formState)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
            })
            .catch(err => console.log('Oops! ', err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="username" value={formState.username} onChange={handleChange}></input>
            <input type="password" name="password" placeholder="password" value={formState.password} onChange={handleChange}></input>
            <input type="submit"></input>
        </form>
    );
}

export default Login;