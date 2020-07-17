import axios from 'axios';

const BASE_URL = 'http://www.youtube.com/embed/';
const URL_SEARCH = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = '';

export const searchVideosGet = (searchValue) =>
  axios.get(
    `${URL_SEARCH}?part=snippet&key=${API_KEY}&type=video&q=${searchValue}&maxResults=8&order=viewCount`
  );

export const playVideo = (videoId) => axios.get(`${BASE_URL}${videoId}`);
