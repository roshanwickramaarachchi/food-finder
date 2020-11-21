import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [result, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm, 
          // term: term ,term eka api eke turm kiyla tiyeno eken tmai search krnne
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, result, errorMessage];
};
