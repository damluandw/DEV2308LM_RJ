import React, { Component } from 'react'

export default class Control extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valSearch: '',

        }
    }

    handleChangeData = (evt) => {
        let name = evt.target.name;
        let value = evt.target.value;
        this.setState({
            [name]: value
        })
    };

    handleSearch = (evt) => {
        evt.preventDefault();
        this.props.onSearch(this.state.valSearch);
      };

    render() {
        return (
            <div className="card-header">
                <div className="row">
                    <div className="col-3 ">
                        <button type="button" className="btn btn-primary btn-icon-text" >
                            Thêm mới sinh viên
                        </button>
                    </div>
                    <div className="col-6 ">
                        <form className="search-form" action="#">
                            <i className="icon-search" />
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search Here"
                                title="Search here"
                                name = "valSearch"
                                onChange={this.handleChangeData}
                                value={this.state.valSearch}
                            />
                            <button className="btn btn-primary btn-icon-text" onClick={this.handleSearch}>
                                Tìm kiếm
                            </button>
                        </form>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        <select className="form-control">
                            <option value="">Sắp xếp</option>
                            <option value="">ABC def</option>
                            <option value="">ABC def</option>
                            <option value="">ABC def</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}
