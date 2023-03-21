const API_KEY = process.env.API_KEY;

export const FETCH_ALL_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key=" +
  API_KEY;

export const FETCH_VIDEO_URL = (id) =>
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`;

export const YOUTUBE_VIDEO_SEARCH_RESULTS = (query) =>
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=" +
  API_KEY +
  "&q=" + query;

export const FECTH_AUTOSUGGESTION_URL =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
