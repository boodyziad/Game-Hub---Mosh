import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'c6ff92745b374bfbba66e158e3b22232',
  },
});
