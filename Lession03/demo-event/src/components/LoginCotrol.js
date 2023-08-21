import React, { Component } from 'react'
import LoginComp from './LoginComp';
import LogoutComp from './LogoutComp';

export default class LoginCotrol extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var LoginControl = (props) => {
            const isLogin = props.isLogin;
            if (isLogin) {
                return <LoginComp />
            } else {
                return <LogoutComp />
            }
        }
        return (
            <div>{LoginControl}</div>
        )
    }
}
