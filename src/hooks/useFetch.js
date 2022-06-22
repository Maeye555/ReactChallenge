import useSWR from 'swr';
import youtube from '../apis/youtube';

export function useFetch(url,termFromSearchBar) {
  const {data, error} = useSWR(url,  async url =>{
    
    const response = await youtube.get(url, {
    params: {
        q: termFromSearchBar
    }});
    return response.data
})
return {data, error}
}