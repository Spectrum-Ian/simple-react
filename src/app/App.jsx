import React from 'react';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';

const RouteGuard = Component => ({match}) =>
    !store.getState().session.authenticated ?
        <Redirect to="/"/> :
        <Component match={match}/>;

export default function App() {
    return (<div className="container mt-3 bg-green-500">
        <h1>HI MOM</h1>
        {/* <ConnectedNavigation/> */}
        {/* <Route exact path="/" component={ConnectedLogin} />
        <Route exact path="/dashboard" render={RouteGuard(ConnectedDashboard)}/> */}
    </div>)
}