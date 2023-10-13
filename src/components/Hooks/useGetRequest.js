import { useEffect, useState } from 'react';

export const useGetRequest = (fetcher, initialData, loadOnMount = true) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(initialData);

  const reload = () => {
    return fetcher()
      .then(setData)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (!loadOnMount) {
      return;
    }
    reload();
    // eslint-disable-next-line
  }, []);

  return {
    isLoading,
    reload,
    setData,
    data,
  };
};
