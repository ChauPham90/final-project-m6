import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './core/Home'
import Menu from './core/Menu'
export default function Routers() {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route path="/signup" exact component={Signup}></Route>
                <Route path="/signin" exact component={Signin}></Route>
                <Route path="/" exact component={Home}></Route>
            </Switch>
        </BrowserRouter>
    )
}
