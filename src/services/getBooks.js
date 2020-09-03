import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;
const defaultParams = { page: 1, itemsPerPage: 20, filters: [] };

async function getBooks(params = {}) {
  const { data } = await axios.post(`${API_BASE}/books`, {
    ...defaultParams,
    ...params
  });

  return data;
}

export default getBooks;
