
import splashDarkImg from "./../assets/images/splashDark.png"
import nigImg from "./../assets/images/nig.png"
import arrDownImg from "./../assets/icons/arrDown.png"
import eyeOpenImg from "./../assets/icons/eyeOpen.png"
import eyeCloseImg from "./../assets/icons/eyeClose.png"
import dangerIcon from "./../assets/icons/danger.svg"
import warningIcon from "./../assets/icons/warning.svg"
import googleImg from "./../assets/images/google.png"

import { useCallback, useState, useRef } from 'react';
import useForm from "~/components/hooks/useForm"


const CreateAcct = () => {
  const { formState, updateFormState } = useForm();

  const [password, setPassword] = useState('');
  const [errorPwdMessage, setErrorPwdMessage] = useState(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [number, setNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorEmailMessage, setErrorEmailMessage] = useState(null);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [errorfirstNameMessage, setErrorfirstNameMessage] = useState(null);
  const [errorSurnameMessage, setErrorSurnameMessage] = useState(null);
  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };




  const validateForm = () => {
    let valid = true;
  
    // Validate phone number
    if (formState.number.trim() === '') {
      setErrorMessage('Phone number is required.');
      valid = false;
    }
  
    // Validate email
    const trimmedEmail = formState.email.trim();
    if (trimmedEmail === '') {
      setErrorEmailMessage('Email is required.');
      valid = false;
    } else {
      const noSpaces = trimmedEmail.replace(/\s/g, '');
      const isValidEmail = noSpaces.endsWith('@gmail.com') && /^[^\s@]+$/.test(noSpaces.slice(0, -10));
      setErrorEmailMessage(isValidEmail ? null : 'Invalid email format. Must end with @gmail.com');
      if (!isValidEmail) {
        valid = false;
      }
    }
  
    // Validate first name
    if (formState.firstName.trim() === '') {
      setErrorfirstNameMessage('First name is required.');
      valid = false;
    }
  
    // Validate surname
    if (formState.surname.trim() === '') {
      setErrorSurnameMessage('Surname is required.');
      valid = false;
    }
    if (formState.password.trim() === '') {
setErrorPwdMessage('Password  is required.');
      valid = false;
    }
    return valid;
  };
  

  const handleChange = (e) => {
    const text = e.target.value;
    const onlyNumbers = text.replace(/[^0-9]/g, '');
    const newNumber = onlyNumbers.slice(0, 11);

    updateFormState('number', newNumber);

    if (text !== newNumber) {
      setErrorMessage('Please enter only numeric values.');
    } else if (onlyNumbers.length > 11) {
      setErrorMessage('You have reached the maximum limit of 11 digits.');
    } else if (newNumber.length !== 11) {
      setErrorMessage('Number must be exactly 11 digits.');
    } else {
      setErrorMessage(null);
    }
  };

   
const getErrorMessageStyle = (message) => {
  
  if (message === 'Please enter only numeric values.') {
    return { color: '#FF8D8D', fontSize: 12}; 
  } else if (message === 'Number must be exactly 11 digits.') {
    return { color: '#F7CA18', fontSize: 12}; 
  }
  else if (message === 'Phone number is required.') {
    return { color: '#FF8D8D', fontSize: 12}; 
  } else {
    return { color: 'black', fontSize: 12}; 
  }
};
 
    return (<div 
    className=" flex  h-screen w-full    items-center    justify-center   overflow-auto"
    >
    <img
     src={splashDarkImg}
     className="w-full h-full fixed  z-10 top-0" alt=""
   />
<div

className="w-full gap-8 z-20   flex flex-col  ">

<div 
className="gap-3"
>
<h1 
className="text-lg  text-[#fff]  text-[28px] font-semibold text-center">
Create account
</h1>
<div 
className="flex-row gap-2 flex- row flex-wrap items-center justify-center flex">
<h1 
className="text-lg  text-[#fff]  text-lg  text-center ">
Already have an account?
</h1>
<h1 
className="text-lg  text-green     ">
Log in
</h1>
</div>
</div>
<div>
<div 
className="px-6 gap-8 flex flex-col">
      <div 
      className="items-start gap-2 w-full  flex flex-col">
        <h1 
        className="text-base text-[#fff]">
            Phone number
        </h1>
        <div  className={`w-full bg-[#2D312F]  rounded-md border  border-[#444A47] border-2 flex-row px-2 py-1 gap-2 flex  ${errorMessage === 'Please enter only numeric values.' ? 'border-[#ff8d8d]' : ''}  ${errorMessage === 'Number must be exactly 11 digits.' ? 'border-[#f7ca18]' : ''} ${errorMessage === 'Phone number is required.' ? 'border-[#ff8d8d]' : ''}`}  >
            <div className="gap-1 items-center flex-row  pr-4 border-r-2 border-[#444A47] flex">
            <img
       alt="" src={nigImg}

   />
   <h1 className="text-[#fff]  text-base">
    +234
   </h1>

            </div>
        <input
 className="text-sm text-[#fff] w-full h-full py-1 px-2    outline-none bg-transparent bg-transparent"

 value={formState.number}
 onChange={handleChange}
    maxLength={11} 
    placeholder="Enter number (max 11 digits)"
      />
      {errorMessage? <>{errorMessage === 'Number must be exactly 11 digits.' ?( <img src={warningIcon} alt="" className="w-6  h-6 self-center"/> ) : (<img src={dangerIcon} alt="" className="w-6  h-6 self-center"/>)} </> : null}

        </div>
        {errorMessage && <h1  style={getErrorMessageStyle(errorMessage)}>{errorMessage}</h1>}
      </div>
      <div className="items-start gap-2 w-full flex flex-col">
        <h1 className="text-base text-[#fff]">
         Email address
        </h1>
        <div className={`w-full bg-[#2D312F]  rounded-md border   border-2 flex-row px-2 py-1 gap-2 flex ${errorEmailMessage? 'border-[#ff8d8d]' : 'border-[#444A47]'} `}>

        <input
    className="text-sm text-[#fff] w-full h-full py-1 px-2   outline-none bg-transparent"
    value={formState.email}
    onChange={(e) => updateFormState('email', e.target.value)}
        placeholder="Enter your email address"
      />
 {errorEmailMessage && <img src={dangerIcon} alt="" className="w-6  h-6 self-center"/>}

        </div>
        {errorEmailMessage && <h1 className="text-[#FF8D8D]  text-[12px]">{errorEmailMessage}</h1>}
      </div>
      <div className="w-full flex-row justify-between gap-2 flex">
      <div className="items-start gap-1  flex-1 flex flex-col">
        <h1 className="text-base text-[#fff]">
         First name
        </h1>
        <div className={`bg-[#2D312F]  rounded-md border   border-2 flex-row px-1 py-2 gap-2 flex items-center flex-1 w-full  ${errorfirstNameMessage? 'border-[#ff8d8d]' : 'border-[#444A47]'}  `}>

        <input

 
className="text-sm text-[#fff]    outline-none bg-transparent w-full flex-1"
value={formState.firstName}
onChange={(e) => updateFormState('firstName', e.target.value)}
      />
       {errorfirstNameMessage && <img src={dangerIcon} alt="" className="w-4  h-4 self-center"/>}
        </div>
{errorfirstNameMessage && <h1 className="text-[12px] text-[#ff8d8d]">{errorfirstNameMessage}</h1>}
      </div>
      <div className="items-start gap-1 flex-1 flex flex-col">
        <h1 className=" text-base text-[#fff] outline-none bg-transparent">
     Surname
        </h1>
        <div className={`bg-[#2D312F]  rounded-md border   border-2 flex-row px-1 py-2 gap-2 flex flex-1 w-full  ${errorfirstNameMessage? 'border-[#ff8d8d]' : 'border-[#444A47]'}  `}>

        <input

 className="text-sm text-[#fff] w-full h-full   outline-none bg-transparent flex-1"
 value={formState.surname}
 onChange={(e) => updateFormState('surname', e.target.value)}
      />
      {errorSurnameMessage && <img src={dangerIcon} alt="" className="w-4  h-4 self-center"/>}
        </div>
        {errorSurnameMessage && <h1 className="text-[12px] text-[#ff8d8d]">{errorSurnameMessage}</h1>}
      </div>
      </div>
      <div className="items-start gap-1 w-full flex flex-col">
        <h1 className="text-base text-[#fff] ">
      Password
        </h1>
        <div className={`w-full bg-[#2D312F]  rounded-md border  border-[#444A47] border-2 flex-row px-2 py-1 justify-beeen  items-center flex  ${errorPwdMessage === 'Password  is required.' ? 'border-[#ff8d8d]' : ''}`}>

        <input

 className="text-sm text-[#fff] w-full h-full py-1 px-2  outline-none bg-transparent"
 value={formState.password}
 onChange={(e) => updateFormState('password', e.target.value)}
    placeholder="Enter Password"
    type={isPasswordVisible ? 'text' : 'password'}
      />

      <img
       alt=""  src={isPasswordVisible ? eyeCloseImg : eyeOpenImg}
  onClick={handleTogglePasswordVisibility}
className="w-5  h-5"
   />


        </div>
        {errorPwdMessage && <h1 className="text-[12px] text-[#ff8d8d]">{errorPwdMessage}</h1>}
      </div>


        <div onClick={validateForm}
        className="text-base text-[#fff] w-full  py-1 px-2  bg-[#18A551] items-center rounded-md flex justify-center">
<h1  className="text-white text-base py-2 text-center">Continue</h1>
        </div>

    </div>
</div>
<div  className="px-6 gap-4 items-center flex flex-col">
<h1 className="text-white text-xs">- OR CREATE ACCOUNT WITH -</h1>
<div className="w-full bg-[#C0F8D6] p-4 items-center justify-center gap-2 flex-row rounded-md flex">
      <img
       alt="" src={googleImg}
  className="w-5  h-5"
   /> 
   <h1  className="text-base text-[#05662C] font-semibold">   Google</h1>

</div>
</div>

</div>
   </div>  );
}
 
export default CreateAcct;