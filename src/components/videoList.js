import React from 'react'
import VideoListItem from './videoListItem'

const VideoList = ({videos}) => {
  const videoList = videos.map(video => <VideoListItem video={video} />)
  return <ul>{videoList}</ul>
}

VideoList.propTypes = {
  videos: React.PropTypes.array
}

export default VideoList
