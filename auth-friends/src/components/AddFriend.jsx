import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addFriend } from '../actions/friendActions';


const AddFriendForm = props => {
    const dispatch = useDispatch();
    const [formState, setFormState] = useState({name: '', age: '', email: ''});

    const handleChange = event => {
        const updatedKey = event.target.name;
        setFormState({...formState, [updatedKey]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addFriend(formState));
        // axiosWithAuth().post('/friends', formState)
        //     .then(res => {
        //         localStorage.setItem('token', res.data.payload);
        //     })
        //     .catch(err => console.log('Oops! ', err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formState.name} onChange={handleChange}></input>
            <input type="number" name="age" placeholder="Age" value={formState.age} onChange={handleChange}></input>
            <input type="email" name="email" placeholder="EMail" value={formState.email} onChange={handleChange}></input>
            <input type="submit"></input>
        </form>
    );
}

export default AddFriendForm;