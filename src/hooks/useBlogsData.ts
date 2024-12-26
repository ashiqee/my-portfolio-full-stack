import axios from 'axios';
import { useEffect, useState } from 'react';

const useBlogsData = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/blogs', {
          headers: {
            'Cache-Control': 'no-store',
          },
        });
        setData(response.data);
      } catch (error:any) {
        setError(error);
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const createObjectFromData = (headers: any[], data: any[]) => {
    if (!Array.isArray(headers) || !Array.isArray(data)) return [];
    return data.map(item =>
      headers.reduce((acc, header, index) => {
        acc[header] = item[index] ?? null;
        return acc;
      }, {})
    );
  };

  const blogsData = data && Array.isArray(data) && data.length > 1
    ? createObjectFromData(data[0], data?.slice(1))
    : [];

  return { blogsData, loading, error };
};

export default useBlogsData;