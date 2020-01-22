import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../actions/friendActions';
import axiosWithAuth from '../resources/axiosWithAuth';

const Login = props => {
    const dispatch = useDispatch();
    const [formState, setFormState] = useState({username: '', password: ''});

    const handleChange = event => {
        const updatedKey = event.target.name;
        setFormState({...formState, [updatedKey]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(login(formState, props.history));
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