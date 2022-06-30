import React from 'react';
import '../style/video.css';

const VideoItem = ({video}) => {
    const videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;
    const openurl = (videoUrl) => {
        window.open(videoUrl);
    }

    return (
        <div onClick={() => openurl(videoUrl)} className=' video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className='header '>{video.snippet.title}</div>
            </div>
        </div>
    )
};
export default VideoItem;