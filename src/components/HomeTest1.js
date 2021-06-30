import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es.js';
import BackdropFilter from 'react-backdrop-filter';
import '../static/Home.css';

import Nav from './Nav';
import MainOption from './MainOption';

export default class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return <div className=''>
            <div className='img-intro'>
                <BackdropFilter className='intro-title'  filter={"blur(10px)"}>
                    <h1>The Chess</h1>
                    <p>Every chess master was once a beginner.</p>
                    <button className='intro-button'>Play now</button>
                </BackdropFilter>
            </div>
            <div className='row'>
                <div className='col-7'>
                    <MainOption />
                </div>
                <div className='col-5'>
                    <h1>assad</h1>
                </div>
            </div>
        </div>
    }
}