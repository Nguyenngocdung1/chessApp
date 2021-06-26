import React, { Component } from 'react';
import '../static/Home.css';
import BackdropFilter from 'react-backdrop-filter';

import option1 from '../static/images/vsAi.jpg';
import option2 from '../static/images/vsHuman.jpg';
import option3 from '../static/images/history.jpg';
import option4 from '../static/images/learnChess.jpg';


export default class Option extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionHovering: ''
        }
    }

    setTrueHovering = (option) => {
        this.setState({
            optionHovering: option
        })
    }

    setFalseHovering = () => {
        this.setState({
            optionHovering: ''
        })
    }

    render() {
        const { itsClass } = this.props;
        let imgOption = null;
        let title = null;
        switch (itsClass) {
            case 'option1': {
                imgOption = option1;
                title = 'Play with AI'
                break;
            }
            case 'option2': {
                imgOption = option2;
                title = 'Play with Human'
                break;
            }
            case 'option3': {
                imgOption = option3;
                title = 'Play with AI'
                break;
            }
            case 'option4': {
                imgOption = option4;
                title = 'Learn to play chess'
                break;
            }
        }
        console.log(this.state.hovering + this.state.optionHovering)
        return <BackdropFilter 
            className={'option ' + itsClass} 
            filter={"blur(20px)"} 
        >
            <button onMouseEnter={() => this.setTrueHovering(itsClass)} onMouseLeave={this.setFalseHovering}>
                <img src={imgOption} className={itsClass === this.state.optionHovering? 'hover-img':'unhover-img'} />
                <div>
                    <h3>{title}</h3>
                </div>
            </button>
        </BackdropFilter>
    }
}