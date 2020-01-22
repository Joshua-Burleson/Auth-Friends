import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';

import Login from '../components/Login';
import FriendList from '../components/FriendList';


export default props => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <ProtectedRoute path="/friends" component={FriendList} />
        </Switch>
    );
}