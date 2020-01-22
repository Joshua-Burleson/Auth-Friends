const initialState = {
    loading: false,
    friends: []
}


const friendsReducer = (state = initialState, action) => {
    switch(action.type){
        case('LOAD'):
                return {...state, loading: true};

        case('ADDED_FRIEND'):
                console.log(`friends: ${[...state.friends, action.payload]}`)
                return {loading: false, friends: [...action.payload]};

        case('FRIEND_REFRESH'):
                console.log(`friends: ${[...state.friends, action.payload]}`)
                return {loading: false, friends: [...action.payload]};
        default:
                return {...state};
    }
}

export default friendsReducer;