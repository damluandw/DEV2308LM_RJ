import React, { Component } from "react";
import ListStudent from "./ListStudent";

export default class ComponentControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
        valSearch: ''
    }
  }
  handleSearchData = (evt) => {
    this.setState({
        valSearch: evt.target.value,
    })
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state.valSearch);
    // console.log(this.state.valSearch);
  };
  render() {

    return (
      <div className="m-5">
        <form className="d-flex m-4" onSubmit={this.handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            name={this.state.valSearch} 
            onChange={this.handleSearchData}
            value={this.state.valSearch} 
          />
          <button className="btn btn-outline-success" type="submit" >
            Search
          </button>
        </form>
      </div>
    );
  }
}
