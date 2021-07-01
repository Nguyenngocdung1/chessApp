import React, { Component } from 'react';
import BackdropFilter from 'react-backdrop-filter';

import MainOption from './MainOption';
import HistoryHome from './HistoryHome';
import FriendsListHome from './FriendsListHome';

export default class HomePage extends Component {
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
                <div className='col-8'>
                    <MainOption />
                    <HistoryHome />
                </div>
                <div className='col-4'>
                    <FriendsListHome />
                </div>
            </div>
        </div>
    }
}