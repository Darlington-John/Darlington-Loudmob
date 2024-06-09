import React, { createContext, useState, useEffect } from 'react';

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formState, setFormState] = useState(() => {
    // Check if window object exists (indicates browser environment)
    if (typeof window !== 'undefined') {
      const savedState = JSON.parse(localStorage.getItem('formState'));
      return savedState || { // Use default values if no data in localStorage
        password: '',
        number: '',
        email: '',
        firstName: '',
        surname: '',
      };
    } else {
      // Default state for server-side rendering (optional)
      return {
        password: '',
        number: '',
        email: '',
        firstName: '',
        surname: '',
      };
    }
  });

  // Save data to localStorage whenever formState changes
  useEffect(() => {
    localStorage.setItem('formState', JSON.stringify(formState));
  }, [formState]);

  const updateFormState = (key, value) => {
    setFormState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <FormContext.Provider value={{ formState, updateFormState }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormProvider, FormContext };
