import React, { Component } from 'react'

export default class LoginComp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var Login = (props) => {
            return (
                <div>
                    <h2>Welcome to my App</h2>
                </div>
            )
        }
        return (
            <div>
                <h2>LoginComp</h2>
                {Login}
            </div>
        )
    }
}
