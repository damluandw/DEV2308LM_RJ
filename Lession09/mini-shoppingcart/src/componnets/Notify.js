import React, { Component } from 'react'
import { connect } from "react-redux";
class Notify extends Component {
    render() {
        return (
            <div className="alert alert-success" role="alert" id="mnotification">
                Message <b>{this.props.message}</b>
            </div>
        )
    }
}

// map state trong store với props trong component
const mapStateToProps = (state) => {
    return {
        message: state.notify,
    };
};

export default connect(mapStateToProps, null)(Notify);