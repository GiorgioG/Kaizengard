import * as React from 'react';
require('./header.scss');
let logo = require('assets/images/logo.png');
export const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="is-pull-left">
                <img className="logo" src={logo}/><span className="kaizen-text">Kaizen</span><span className="gard-text">gard</span>
            </div>
            <div className="is-pull-right">
                <a href="login" className="auth-link">Sign Up</a>
                <span className="or">or</span>
                <a href="login" className="auth-link">Sign In</a>
            </div>
            <div className="is-clear-fix"></div>

        </div>
    );
}