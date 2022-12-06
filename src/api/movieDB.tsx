import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '3dcfd4a8842e4b6b17ade1102af99e93',
    lenguage: 'es-ES',
    page: 1,
  },
});

export default movieDB;
