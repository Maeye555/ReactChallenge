import './App.css';
import React, {useState} from 'react';
import VideoResult from './hooks/VideoResult';
import RouteList from './component/RouteList';
import LinkList from './component/LinkList';



const App = () => {
  
  const [videos,setVideos] = useState([]);
  const [term, setTerm] = useState('default text');
  //const {response,error,mutate} = VideoResult({term, setTerm,selectedVideo, setselectedVideo,videos,setVideos});

  if(!videos)return(<VideoResult term = {term} setTerm={setTerm} setVideos={setVideos}/>);
  
  return (
    <div className="App">
      <VideoResult term = {term} setTerm={setTerm} setVideos={setVideos}/>
      <LinkList videos = {videos}/>
      <RouteList videos={videos}/>
    </div>
    
  );
}

export default App;
