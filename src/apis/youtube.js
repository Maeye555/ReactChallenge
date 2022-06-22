import axios from 'axios';
const KEY = 'AIzaSyBMwqFyFoD9T6By0SKgbbLVARoWXyByrQo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 50,
        key: KEY
    }
})
