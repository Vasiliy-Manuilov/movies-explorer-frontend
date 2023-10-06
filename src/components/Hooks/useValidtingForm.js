import {useCallback, useMemo, useState} from "react";

export function useValidationForm(initialValues = {}) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
  
    const set = (event) => {
      const target = event.target;
      const name = target.name;
      const value = target.value;
      setValues({...values, [name]: value});
      setErrors({...errors, [name]: target.validationMessage });
      setIsValid(target.closest("form").checkValidity());
    };
  
    const resetForm = useCallback(
      (newValues = {}, newErrors = {}, newIsValid = false) => {
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);
      },
      [setValues, setErrors, setIsValid]
    );

    const isChanged = useMemo(() => {
        return Object.keys(values).some(field => {
            return initialValues[field] !== values[field]
        })
    }, [values, initialValues])
  
    return { values, set, errors, isValid, resetForm, isChanged };
  }