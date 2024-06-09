import { useContext } from "react";
import { FormContext } from "../context";

const useForm = () => {
    const context = useContext(FormContext);
    if (!context) {
      throw new Error('useForm must be used within a FormProvider');
    }
    return context;
  };
  
  export default useForm;