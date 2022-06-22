import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


class App extends React.Component {
    state = {
        pages : 0,
        videos: [],
        selectedVideo: null
    }


    handleSubmit = async (termFromSearchBar) => {
      //Call the youtube search API with search keyword from search bar
       const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        /*const {data, error} = useSWR(termFromSearchBar,await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        }))*/
        this.setState({
            videos: response.data.items,
            pages: Math.ceil(response.data.items.length/10)        
        })
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        
                        <Router>
                            {[...Array(this.state.pages)].map((e,i) =>{                              
                             return(
                                <li><Link to={`/page/${i+1}`}>Page {i+1}</Link></li>
                             );   
                            })}
                            <Routes>
                                <Route exact path='/' element={App}></Route>

                                {[...Array(this.state.pages)].map((e,i) =>{
                                    let max_result = 0
                                    if(i*10+10 <= this.state.videos.length){
                                        max_result = i*10+10
                                    }
                                    else{
                                        max_result = this.state.videos.length
                                    }
                                    return(
                                        <Route path = {`/page/${i+1}`} element = {
                                            <div className="five wide column">                                                  
                                                <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos.slice(i*10,max_result)}/>
                                            </div>
                                        }></Route>
                                    );   
                                })}    
                            </Routes>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
