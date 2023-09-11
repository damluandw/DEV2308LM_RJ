import React, { Component } from 'react'
import { connect } from "react-redux";
// connect: dùng đẻ kết nối state trong store với props trên component

class WellcomeRedux extends Component {

    render() {
        return (
            <div>
                <h2>
                    Xin chào, <span className='btn btn-danger'>{this.props.userName}</span>
                </h2>
                <h2>
                    Chào mừng bạn đến với khoá học,
                    <span className='btn btn-success'>{this.props.courseName}</span> tại
                    Devmaster Acdemy
                </h2>
            </div>
        )
    }
}

// Hàm map state trong store với props
const mapStateToProps = (state) => {
    return {
        userName: state.userName,
        courseName: state.courseName,
    }
};
export default connect(mapStateToProps, null)(WellcomeRedux);
