import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>No video selected yet</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    const videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;
    window.open(videoUrl);
    console.log(typeof(video));
    //console.log(video.id.videoId);
    return (
        <div>
            <div className='ui embed'>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title} {videoSrc}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;