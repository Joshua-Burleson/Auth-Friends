import axiosWithAuth from '../resources/axiosWithAuth';

const load = {type: 'LOAD'};


const retrieveFriends = (dispatch, windowHistory) => {
    axiosWithAuth().get('/friends')
        .then(res => {
            dispatch({type: 'FRIEND_REFRESH', payload: res.data});
            windowHistory && windowHistory.push('/friends');
        })
        .catch(err => console.log(err));
};

export const addFriend = newFriend => dispatch => {
    dispatch(load);
    axiosWithAuth().post('/friends', newFriend)
        .then(res => {
            console.log('Success! ', res.data);
            dispatch({type: 'ADDED_FRIEND', payload: res.data})
        })
        .catch(err => console.log(err))
};

export const login = (formData, windowHistory) => dispatch => {
    dispatch(load);
    axiosWithAuth().post('/login', formData)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                retrieveFriends(dispatch, windowHistory);
            })
            .catch(err => console.log('Oops! ', err))
};

export const friendCheck = windowHistory => dispatch => {
    retrieveFriends(dispatch, windowHistory);
}