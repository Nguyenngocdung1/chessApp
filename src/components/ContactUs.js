import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import facebook from '../static/images/facebook.svg';
import instagram from '../static/images/instagram.svg';
import github from '../static/images/github.svg';
import twitter from '../static/images/twitter.svg';

export default class ContactUs extends Component {

    render() {
        return <div className='contact'>
            <h5>Contact</h5>
            <div className='social'>
                <a href=''><img src={facebook} /></a>
                <a href=''><img src={instagram} /></a>
                <a href=''><img src={github} /></a>
                <a href=''><img src={twitter} /></a>
            </div>
                
        </div>
    }
}