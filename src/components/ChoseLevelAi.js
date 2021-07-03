import React, { Component } from 'react';

import '../static/ChoseLevelAi.css';

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';

import level1 from '../static/images/level1.svg';
import level2 from '../static/images/level2.svg';
import level3 from '../static/images/level3.svg';
import choseTime from '../static/images/choseTime.svg';

export default class ChoseLevelAi extends Component {

    render() {
        return <div className='lesson row'>
            <div className='col-8'>

                <div class="row">
                    <div class="col-sm-6">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="fw-600">Level</h5>
                                <hr class="style-1 mb-4" />
                                <div className="level level-1">
                                    <img src={level1} />
                                    <div className="level-title level-title-1">
                                        <p>Level 1</p>
                                    </div>
                                    <input className="inp-cbx" id='cap-opt-1' type="radio" value="lv1" name='levelai'/>
                                    <label className="cbx" for='cap-opt-1'><span>
                                        <svg width="12px" height="9px" viewbox="0 0 12 9">
                                            <polyline points="1 5 4 8 11 1"></polyline>
                                        </svg></span>
                                    </label>
                                </div>
                                <div className="level level-2">
                                    <img src={level2} />
                                    <div className="level-title level-title-2">
                                        <p>Level 2</p>
                                    </div>
                                    <input className="inp-cbx" id='cap-opt-2' type="radio" value="lv2" name='levelai'/>
                                    <label className="cbx" for='cap-opt-2'><span>
                                        <svg width="12px" height="9px" viewbox="0 0 12 9">
                                            <polyline points="1 5 4 8 11 1"></polyline>
                                        </svg></span>
                                    </label>
                                </div>
                                <div className="level level-3">
                                    <img src={level3} />
                                    <div className="level-title level-title-3">
                                        <p>Level 3</p>
                                    </div>
                                    <input className="inp-cbx" id='cap-opt-3' type="radio" value="lv3" name='levelai'/>
                                    <label className="cbx" for='cap-opt-3'><span>
                                        <svg width="12px" height="9px" viewbox="0 0 12 9">
                                            <polyline points="1 5 4 8 11 1"></polyline>
                                        </svg></span>
                                    </label>
                                </div>
                                {/* <div class="">
                                    <input type="radio" class="" id="cap-opt-1" name="capacity1" value="lv1" checked="true" />
                                    <label class="" for="cap-opt-1">Mức dễ</label>
                                </div>
                                <div class="">
                                    <input className="inp-cbx" id='cap-opt-2' type="radio" value="lv2" />
                                    <label className="cbx" for='cap-opt-2'><span>
                                        <svg width="12px" height="9px" viewbox="0 0 12 9">
                                            <polyline points="1 5 4 8 11 1"></polyline>
                                        </svg></span><span>danh</span>
                                    </label>
                                </div>
                                <div class="">
                                    <input type="radio" class="" id="cap-opt-3" name="capacity1" value="lv3" />
                                    <label class="custom-control-label" for="cap-opt-3">Mức khó</label>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card h-100">
                            <div class="card-body row">
                                <h5 class="fw-600">Time</h5>
                                <hr class="style-1 mb-4" />
                                <label class="card-radio-btn col-6">
                                    <input type="radio" name="demo" class="card-input-element d-none" id="demo1" />
                                    <div class="card card-body timecount">
                                        <div class="content_head">10</div>
                                        <div class="content_sub">minute</div>
                                        <img src={choseTime} />
                                    </div>
                                </label>
                                <label class="card-radio-btn col-6">
                                    <input type="radio" name="demo" class="card-input-element d-none" value="demo2" />
                                    <div class="card card-body timecount">
                                        <div class="content_head">15</div>
                                        <div class="content_sub">minute</div>
                                        <img src={choseTime} />
                                    </div>
                                </label>
                                <label class="card-radio-btn col-6">
                                    <input type="radio" name="demo" class="card-input-element d-none" value="demo2" />
                                    <div class="card card-body timecount">
                                        <div class="content_head">20</div>
                                        <div class="content_sub">minute</div>
                                        <img src={choseTime} />
                                    </div>
                                </label>
                                <label class="card-radio-btn col-6">
                                    <input type="radio" name="demo" class="card-input-element d-none" value="demo2" />
                                    <div class="card card-body timecount">
                                        <div class="content_head">30</div>
                                        <div class="content_sub">minute</div>
                                        <img src={choseTime} />
                                    </div>
                                </label>
                                <div className="col-12">
                                    <button className="letsplay">Play</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='col-4'>
                <div className='article-rightcontent'>
                    <FriendsListHome />
                    <ContactUs />
                </div>
            </div>
        </div>
    }
}