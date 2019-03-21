import React from "react";

class TodoSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: ""
    };
  }

  handleChanges = event => {
    console.log("event: ", event.target.value);
    console.log([event.target.name], event.target.value);
    this.setState({
      searchTerm: event.target.value
    });
    console.log(this.state.searchTerm);
    this.props.searchFilter(this.state.searchTerm);
  };

  render() {
    return (
      <input
        className="todoSearch"
        type="text"
        value={this.state.searchTerm}
        name="searchTerm"
        placeholder="Search here..."
        // onChange goes here
        onChange={this.handleChanges}
      />
    );
  }
}

export default TodoSearch;
