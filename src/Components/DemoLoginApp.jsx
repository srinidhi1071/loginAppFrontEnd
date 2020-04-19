import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom'
import LoginComponent from './LoginComponent'
import Signup from './Signup';
import ErrorComponent from './ErrorComponent'
import DashBoard from './DashBoard';
import AuthenticatedRoute from './AuthenticatedRoute'

const DemoLoginApp = () =>{

    return(
        <Router>
            <>
            <Switch>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/signup" exact component={Signup} />
            <AuthenticatedRoute path="/dashboard" exact component={DashBoard} />
            <Route component={ErrorComponent} />
            </Switch>
            </>
        </Router>
    )

}

export default DemoLoginApp