import axios from 'axios';

const KEY = 'AIzaSyDV62MNhegsPXz58NR0Hi9DJjNVD4XDzeI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
