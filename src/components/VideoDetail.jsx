import React from 'react'

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={`https://youtube.com/embed/${video.id.videoId}`}></iframe>
      </div>
      <div className="ui segment">
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p></p>
      </div>
    </div>
  )
}

export default VideoDetail
