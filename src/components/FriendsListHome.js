import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import friend1 from '../static/images/friend1.jpeg';
import friend2 from '../static/images/friend2.jpeg';

export default class Home extends Component {
    constructor() {
        super();
    }

    render() {
        const friends = [
            {number: '01', name: 'Ngoc Anh', img: friend1},
            {number: '02', name: 'Ngoc Dung', img: friend2},
        ];
        return <div className='friend'>
            <Link to=''>
                <div>
                    <h5>Friends (3)</h5>
                    <div className='friend-avt'>
                        { friends.length > 0 && friends.map(item => <div className='friend-info'>
                            <p className='friend-number'>{item.number}</p>
                            <img src={item.img} />
                            <p className='friend-name'>{item.name}</p>
                        </div>) }
                    </div>
                </div>
            </Link>
        </div>
    }
}