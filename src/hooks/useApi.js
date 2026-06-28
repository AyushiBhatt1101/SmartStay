import { useState, useEffect } from 'react';
import API_BASE_URL from '../api';

const useApi = (endpoint, query = '') => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_BASE_URL}${endpoint}${query}`);
        if (!response.ok) {
          const errorBody = await response.json().catch(() => ({}));
          throw new Error(errorBody.message || 'Failed to fetch data');
        }
        const payload = await response.json();
        if (active) setData(payload.data || payload);
      } catch (err) {
        if (active) setError(err.message || 'Unexpected error');
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchData();
    return () => { active = false; };
  }, [endpoint, query]);

  return { data, loading, error };
};

export default useApi;
