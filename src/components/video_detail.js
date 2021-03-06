import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className='video-detail col-md-8'>
      <div id='mainVideo' className="embed-responsive embed-responsive-16by9">
        <iframe className='embed-responsive-item' src={url}></iframe>
      </div>
      <div className='details'>
        <div className='media-body title'>{video.snippet.title}</div>
        <div className='media-body description'>{video.snippet.description}</div>
      </div>
    </div>

  )
}

export default VideoDetail;
