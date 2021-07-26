import React, { Component } from 'react';
import '../static/Login.css';

export default class Login extends Component {
    render() {
        return <div className="login">

            <div className="row">
                <div className="col-6">
                    <div className="form-login">
                        <h1>Login</h1>
                        <div className="form">
                            <p>Email:</p>
                            <input type="text" placeholder="your email" />
                            <p>Password:</p>
                            <input type="password" placeholder="your password" />
                            <button>Login</button>
                            <p>Not registered yet? <span>Create an Account</span></p>
                        </div>
                    </div>
                </div>
                <div className="col-6 login-img"></div>
            </div>
        </div>
    }
}