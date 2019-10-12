import axios from 'axios';

const API_URL = `https://pixabay.com/api/`;
const API_KEY = '13871773-a660d3f12fc84710292c43b38';
const DEFAULT_QUERY = 'car';

/* eslint-disable-next-line */
export const fetchImages = (page, query = DEFAULT_QUERY) =>
  axios.get(`${API_URL}?key=${API_KEY}&q=${query}&page=${page}&per_page=12`);
