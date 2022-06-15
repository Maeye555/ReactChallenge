import axios from 'axios';
const KEY = 'AIzaSyAl_TpBrhUhJ6T6v74akAOmRTy1ImXZvsA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})