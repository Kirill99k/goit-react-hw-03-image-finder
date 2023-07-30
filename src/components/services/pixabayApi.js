import axios from 'axios';

const API_KEY = '35042459-007e90b9c7a7a41a0e2aeab27';
const API_URL = 'https://pixabay.com/api/';

export const fetchImages = async (searchValue, page) => {
  try {
    const response = await axios.get(`${API_URL}`, {
      params: {
        key: API_KEY,
        q: searchValue,
        image_type: 'photo',
        orientation: 'horizontal',
        page: page,
        per_page: 12,
        safesearch: true,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
