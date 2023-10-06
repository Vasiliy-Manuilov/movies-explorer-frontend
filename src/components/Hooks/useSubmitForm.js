import { useState } from 'react';

export function useSubmitForm(fetcher, onSuccess) {
  const [error, setError] = useState();
  const [isSuccessfulRes, setisSuccessfulRes] = useState(false)

  const submit = (...args) => {    
    return fetcher(...args)
      .then((data) => onSuccess?.(data))
      .catch((err) => setError(err))      
  };
  return {
    error,
    isSuccessfulRes,
    setisSuccessfulRes,
    submit,
  };
}
