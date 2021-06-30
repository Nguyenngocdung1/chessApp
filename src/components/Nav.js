import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es.js';
import '../static/Nav.css';
import homeHome from '../static/images/homeHome.svg';
import humanHome from '../static/images/humanHome.svg';
import aiHome from '../static/images/aiHome.svg';
import lessonHome from '../static/images/lessonHome.svg';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class Nav extends Component {
    constructor() {
        super();
    }

    render() {
        return <Router>
        <div className='navigation'>
            <div className='logo'>
                <h2>ChessApp</h2>
            </div>
            <nav>
                <p className='menu-title'>menu</p>
                <ul>
                    <li>
                        <Link to="/">
                            <img src={homeHome} />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <img src={humanHome} />
                            <span>Play with human</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/users">
                            <img src={aiHome} />
                            <span>Play with AI</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/users">
                            <img src={lessonHome} />
                            <span>Lesson</span>
                        </Link>
                    </li>
                </ul>
            </nav>
                
                {/* <Switch>
                    <Route path="/about">
                        <ProfileHome />
                    </Route>
                    <Route path="/users">
                        <Option />
                    </Route> */}
                    {/* <Route path="/">
                        <HomeTest />
                    </Route> */}
                {/* </Switch> */}
            </div>
        </Router>
    }
}