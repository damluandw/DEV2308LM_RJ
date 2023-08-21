import React, { Component } from 'react'

export default class LogoutComp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var Logout = (props) => {
            return (
                <div>
                    <h2>Please sign in</h2>
                </div>
            )
        }
        return (
            <div>{Logout}</div>
        )
    }
}

