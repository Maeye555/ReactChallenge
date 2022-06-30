import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VideoList from './VideoList';

const RouteList = (videos) => {
        const pages = Math.ceil(videos.videos.length/10);
        return (
        <div  className='routelist'>   
            <Routes>{[...Array(pages)].map((e,i) =>{
                    let max_result = 0
                    if(i*10+10 <= videos.videos.length){
                        max_result = i*10+10
                    }
                    else{
                        max_result = videos.videos.length
                    }
                    const video_slice = videos.videos.slice(i*10,max_result);
                    console.log(video_slice);
                    return(
                        <Route path = {`/page/${i+1}`} element = {
                            <div className="five wide column">                                                  
                                <VideoList videos={video_slice}/>
                            </div>
                }></Route>
            );})}</Routes>
  
        </div>   
        );
};
export default RouteList;