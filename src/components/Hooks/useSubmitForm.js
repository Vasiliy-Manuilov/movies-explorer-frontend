import { useState } from 'react';

export function useSubmitForm(fetcher, onSuccess) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false)

  const submit = (...args) => {
    setIsLoading(true)
    return fetcher(...args)
      .then((data) => onSuccess?.(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };
  return {
    error,
    isLoading,
    submit,
  };
}
