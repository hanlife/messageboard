import React, {Component} from "react";
import {Router, Route, Switch, Redirect} from "react-router";
import createHashHistory from "history/createHashHistory";

import Login from '../components/login/login'
import Home from '../container/home/home'
import Regist from '../components/regist/regist'

import page404 from '../components/errorpage/404'


const newHistory = createHashHistory();

class CRouter extends Component {
    render() {
        return (
            <Router history={newHistory}>
                <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/regist" exact component={Regist}/>
                    <Route path='/home' component={Home}></Route>
                    <Route path="/details/:detail_Id" exact component={Login}/>
                    <Redirect from="*" to="/home"/>
                </Switch>
            </Router>
        );
    }
}

export default CRouter;