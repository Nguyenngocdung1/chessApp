import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es.js';
import '../static/Home.css';

import ProfileHome from './ProfileHome';
import Option from './Option';

export default class Home extends Component {
    constructor() {
        super();

        this.option1Ref = React.createRef();
        this.option2Ref = React.createRef();
        this.option3Ref = React.createRef();
        this.option4Ref = React.createRef();
    }

    componentDidMount() {
        this.option1Ref.current = anime({
            targets: ".option1",
            translateY: 0,
            delay: function(el, i) {
                return i * 100;
            },
            direction: "alternate",
            easing: "easeInOutSine"
        });
    }

    render() {
        return <div className='background-home'>
            <div className='content container'>
                <ProfileHome />
                <Option itsClass='option1' ref={this.option1Ref} />
                <Option itsClass='option2' ref={this.option2Ref} />
                <Option itsClass='option3' ref={this.option3Ref} />
                <Option itsClass='option4' ref={this.option4Ref} />
            </div>
        </div>
    }
}