import React, { Component } from 'react';
import '../static/PlayWithHuman.css';

import back from '../static/images/back.png'
import opponentAvatar from '../static/images/opponentAvatar.jpeg'
import avt from '../static/images/avt.jpg'
import seehistory from '../static/images/seehistory.svg'
import setup from '../static/images/setup.svg'
import back1 from '../static/images/back1.svg'

import Board from './Board';

import {
    Link
} from "react-router-dom";

export default class PlayWithHuman extends Component {
    render() {
        return <div className='container humanplay'>
            <div className='row'>
                <div className='col-2'>
                    <div className='game-title'>
                        <Link to='/'>
                            <img src={back} className='back' width='30px' alt='back' />
                        </Link>
                        <span>Human</span>
                    </div>
                    <div className='timecount opponent-turn'>
                        <img src={opponentAvatar} alt='opponentAvatar' />
                        <div className='time opponent-time'>
                            <h1>30:00</h1>
                        </div>
                    </div>
                    <div className='timecount your-turn'>
                        <img src={avt} alt='avt' />
                        <div className='time your-time'>
                            <h1>30:00</h1>
                        </div>
                    </div>
                </div>
                <div className='col-7 center-board'>
                    <Board />
                </div>
                <div className='col-3'>
                    <div className='setup-game'>
                        <button className='play-button'>Play</button>
                        {/* <button className='custom-game'>Custom game</button> */}
                        <div className='three-option'>
                            <div className='anoption'>
                                <img src={setup} width='23px'/>
                                <Link to=''>Game setup</Link>
                            </div>
                            <div className='anoption'>
                                <img src={seehistory} width='23px'/>
                                <Link to=''>See history</Link>
                            </div>
                            <div className='anoption'>
                                <img src={back1} width='23px'/>
                                <Link to=''>Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}