import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import FriendCard from './FriendCard';
import AddFriendForm from './AddFriend';
import { friendCheck } from '../actions/friendActions';
import { logout } from '../resources/utils';

const FriendList = props => {
    const dispatch = useDispatch();
    const state = useSelector( state => {
        return ({
            friends: state.friends
        });
    });

    if(state.friends.length < 1){
        try{
            dispatch(friendCheck(props.history));
        } catch(err){
            console.log(err);
            logout(props.history);
        }
    }

    return (
        <div>
            <h1>Friends</h1>
            {state.friends.map(friend => <FriendCard key={`${friend.id}${friend.name}${friend.email}`} friend={friend} />)}
            <hr />
            <AddFriendForm />
        </div>
    );
}

export default FriendList;