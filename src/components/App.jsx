import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term 
      }
    });
    const videos = response.data.items
    this.setState({ 
      videos: videos,
      selectedVideo: response.data.items[0]
    })
  };

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  componentDidMount() {
    this.onTermSubmit('Bière')
  }
  

  render() {
    return (
      <div className='ui-container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className='five wide column'>
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
