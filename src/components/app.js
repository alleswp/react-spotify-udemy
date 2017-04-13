import React, { Component } from 'react';
import SearchBar from './searchbar/SearchBar';
import searchSpotify from '../utils/searchSpotify';
import SongItem from './songitem/SongItem';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
      song: '',
      tracks: [],
    };
  }
  testFlow(testVar: number): string {
    console.log(testVar);
    return "Flow Baby";
  }
  fetchSongs = () => {
    searchSpotify(this.state.song)
      .then(({ tracks }) => this.setState({ tracks }));
  }
  render() {
    console.log(this.testFlow(5));
    const { tracks } = this.state;
    console.log('tracks', tracks);
    return (
      <div>
        <SearchBar
          updateText={(songName) => this.setState({ song: songName })}
          fetchSongs={this.fetchSongs}
        />
        {tracks.items && <SongItem songData={tracks.items[0]} />}
      </div>
    );
  }
}
