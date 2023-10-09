import { useState } from 'react';

export function useSubmitForm(fetcher, onSuccess) {
  const [error, setError] = useState();

  const submit = (...args) => {
    return fetcher(...args)
      .then((data) => onSuccess?.(data))
      .catch((err) => setError(err));
  };
  return {
    error,
    submit,
  };
}
