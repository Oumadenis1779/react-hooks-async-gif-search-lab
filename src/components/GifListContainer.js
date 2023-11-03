import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }

  fetchGifs = (query) => {
    const apiKey = 'PfpHUfHj6udwDF4vBUl35zbx7jreLJDd'; // Replace with your Giphy API key
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          gifs: data.data.slice(0, 3) // Get the first 3 gifs from the response
        });
      })
      .catch(error => console.error(error));
  };

  componentDidMount() {
    this.fetchGifs('default'); // Initial fetch with a default query
  }

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
