import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
    //.map extract every video in vedeos to generate video item component
    const renderedVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video}/>
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;