import Axios from '@/services/axios';

export default {
  getFeeds(category) {
    const query = { params: { category } };
    return Axios.get('/feed', query);
  },
};
