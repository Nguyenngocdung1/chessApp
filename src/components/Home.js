import React, { Component } from 'react';
import '../static/Home.css';

import ProfileHome from './ProfileHome';
import Option from './Option';

export default class Home extends Component {
    render() {
        return <div className='background-home'>
            <div className='content container'>
                <ProfileHome />
                <Option itsClass='option1'/>
                <Option itsClass='option2'/>
                <Option itsClass='option3'/>
                <Option itsClass='option4'/>
            </div>
        </div>
    }
}