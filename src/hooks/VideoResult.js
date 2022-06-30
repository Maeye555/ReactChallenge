import useSWR from "swr";
import youtube from "../apis/youtube";
import SearchBar from "../component/Searchbar";




export default function VideoResult({term, setTerm,setVideos}) {
    

    const address = term;
    const fetcher = async (term) => await youtube.get('/search', {
        params: {
            q: term
        }
      });
    const {data:response , error, mutate} = useSWR(address,fetcher,{
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      });
    
    if (error)
      return (
        <div>
          <h1>404</h1>
          <p>Loading failed...</p>
        </div>
      );
  //check loading and display corresponding UI
    if (!response)
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
      
    
    const termChange = (termFromSearchBar) =>{
        setTerm(termFromSearchBar);
        mutate();       
    };
    const handleVideo = (response) =>{
      setVideos(response.data.items);
    }

    
    return(   
        <div>
            {handleVideo(response)}
            <SearchBar onSearchTermChange={searchTerm => termChange(searchTerm)}/>
        </div>
    );

    /*return {
      response:response,
      error,
      mutate
      <VideoList handleVideoSelect={handleVideoSelect} videos={videos}/>
    };*/
}