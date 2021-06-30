import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es.js';
import '../static/HomeTest.css';

import Nav from './Nav';
import HomeTest1 from './HomeTest1';

export default class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return <div className='row home'>
            <div className='col-2 nav-home'>
                <Nav />
            </div>
            <div className='col-10'>
                <div className=''>
                    <h1>ádasd</h1>
                </div>
                <HomeTest1 />
            </div>
        </div>
    }
}