import React, { Component } from 'react';
import BackdropFilter from 'react-backdrop-filter';
import AnimatedNumber from 'react-animated-number';

import '../static/Home.css';
import avtimg from '../static/images/avt.jpg';

export default class ProfileHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elo: 1420
        }
    }

    render() {
        const { elo } = this.state;
        return <BackdropFilter className='profile' filter={"blur(20px)"}>
            <img src={avtimg} />
            <div>
                <h3>Peter Parker</h3>
                <AnimatedNumber value={elo} component="text" 
                    style={{
                        transition: '1s ease-in-out',
                        color: '#0c0c0caf',
                        fontSize: 100,
                        transitionProperty:
                            'background-color, color, opacity'
                    }}
                    duration={2700} 
                    formatValue={n => n.toFixed(0)}
                    />
            </div>
        </BackdropFilter>
    }
}