import React, { Component } from 'react';

import '../static/Nav.css';

import homeHome from '../static/images/homeHome.svg';
import humanHome from '../static/images/humanHome.svg';
import aiHome from '../static/images/aiHome.svg';
import lessonHome from '../static/images/lessonHome.svg';
import article from '../static/images/article.svg';

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
        return <div className='navigation'>
            <div className='logo'>
                <h2>ChessApp</h2>
            </div>
            <nav>
                <p className='menu-title'>Menu</p>
                <ul>
                    <li>
                        <Link to="/">
                            <img src={homeHome} />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/playwithai">
                            <img src={humanHome} />
                            <span>Play with human</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/playwithai">
                            <img src={aiHome} />
                            <span>Play with AI</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/lesson">
                            <img src={lessonHome} />
                            <span>Lesson</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/articles">
                            <img src={article} />
                            <span>Article</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    }
}