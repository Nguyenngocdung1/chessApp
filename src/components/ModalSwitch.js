import React, { Component } from 'react';
import '../static/Home.css';

import PlayWithHuman from './PlayWithHuman';
import Home from './Home';

import {
    Switch,
    Route
} from "react-router-dom";

export default class ModalSwitch extends Component {
    render() {
        return <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/playwithai" children={<PlayWithHuman />} />
        </Switch>
        
    }
}