import React from 'react'

const VideoListItem = ({video}) => {
  return (
    <li>
      <div className="video-thumb"><img src={video.snippet.thumbnails.default.url} /></div>
      <div className="video-description">{video.snippet.title}</div>
    </li>
  )
}

VideoListItem.propTypes = {
  video: React.PropTypes.object
}

export default VideoListItem
