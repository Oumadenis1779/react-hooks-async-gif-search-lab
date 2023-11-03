import React, { Component } from 'react';

class GifSearch extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchGifs(this.state.query);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.query}
          onChange={(event) => this.setState({ query: event.target.value })}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default GifSearch;
