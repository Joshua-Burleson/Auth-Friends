import React from 'react';

const FriendCard = props => {
    // console.log(props)
    return (
        <div>
            <h3>{props.friend.name}</h3>
            <p>{props.friend.age}</p>
            <a href={`mailto:${props.friend.email}`}>{props.friend.email}</a>
        </div>
    );
}

export default FriendCard;