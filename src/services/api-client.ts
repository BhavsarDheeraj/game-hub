import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'f39273305ef24c09b424d1ec284638c3',
  },
});
