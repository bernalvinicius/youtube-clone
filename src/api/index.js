import axios from 'axios';

const BASE_URL = 'http://www.youtube.com/embed/';
const URL_SEARCH = 'https://www.googleapis.com/youtube/v3/search';

// Essa credencial é do youtube clone:
// const API_KEY = 'AIzaSyBwXp0O2XorQDYhm-HIbWs5q10EkWeZZuY';

// Essa credencial que está midias.viniciusbernal:
const API_KEY = 'AIzaSyDG3i3hrEHE94CSRcdciwKM99QeJJWSmno';

export const searchVideosGet = (searchValue) =>
  axios.get(
    `${URL_SEARCH}?part=snippet&key=${API_KEY}&type=video&q=${searchValue}&maxResults=8&order=viewCount`
  );

export const playVideo = (videoId) => axios.get(`${BASE_URL}${videoId}`);
