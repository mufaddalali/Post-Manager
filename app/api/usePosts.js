import { useEffect, useState } from 'react';

export const usePosts = (page=1, limit=10) => {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (response.ok) {
          const data = await response.json();
          const totalCount = data.length;
          const startIndex = (page - 1) * limit;
          const slicedData = data.slice(startIndex, startIndex + limit);
          setTotalPages(Math.ceil(totalCount / limit));
          setPosts(slicedData);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPosts();
  }, [page,limit]);

  return { posts, totalPages };
};
