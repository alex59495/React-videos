import axios from 'axios'

const KEY = 'AIzaSyAtWMOFOL7XSRFZUK7QdrBrZw5ZhkT7yuw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    type: 'video',
    key: KEY
  }
})