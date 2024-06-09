
import { useCallback, useState } from 'react';
import womanImg from './../assets/images/woman.png'
import LogoImg from './../assets/images/Logo.png'
import rightIcon from './../assets/icons/arr-right.png'

import SplashImg from './../assets/images/Splash.png'
import { slideData } from './data/introSlide';
import { Link } from '@remix-run/react';
const Intro = (props: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideData.length);
    };

    const handleChangeIndex = (index) => {
      setCurrentIndex(index);
    };

    return (  

      <div 
      className={`w-full    items-center h-screen flex   flex-col overflow-auto  ${slideData[currentIndex].img? ('justify-end')  : 'justify-between'}  `}
      >

              <img
               src={SplashImg}
              //  style={{ width: '100%', height: '100vh', resizeMode: 'cover', overflow: 'visible',  
              //  position: 'absolute',
              //  zIndex: 1}}
               className=' w-full h-screen absolute z-10 flex flex-col '
               alt=""
             />
        <div
        
        className={`items-center gap-4 flex flex-col     ${slideData[currentIndex].img? ('')  : '  pt-40'} relative z-20`}>
              <div 
              className='items-center gap-4 flex flex-col'
              >
              <div 
              className='items-center flex flex-col'>
            <img src={LogoImg} 
            className='w-[130px] h-[42px]'
            alt=""/>
            <h1 
            className='text-[34px] text-white font-semibold text-center'
            >
            {slideData[currentIndex].feature}
            </h1>
            </div>
            <div 
            className='px-4'>
            <h1 
            className='text-lg  text-[#fff] text-center'
            >
            {slideData[currentIndex].featureText}
            </h1>
            {slideData[currentIndex].secFeatureText?    <h1 
            className='text-lg  text-[#fff] text-center'
            >
            {slideData[currentIndex].secFeatureText}
            </h1> : null}
         
            </div>
         
            </div>
{slideData[currentIndex].img? (<img alt="" src={slideData[currentIndex].img} className='w-full h-full'/>)  : null}
        </div>
        <div 
        className='items-stretch gap-5 bg-[#002C12] px-5  py-10 w-full  relative z-20 flex flex-col 2xs:py-2'
        >
        {currentIndex === 3 ? (
          <Link to='/create-account' className='w-full'>
       
       
    <div
    className='rounded-lg bg-[#18A551] w-full items-center justify-center  py-5 gap-2 flex-row flex  2xs:py-3 '
    >
    <h1 className='text-lg  text-[#fff]'>

  Let{`'`}s start
            </h1>
            <img alt="" src={rightIcon}/>
    </div>

  </Link>) : (  <div onClick={handleNextSlide}>
    <div className='rounded-lg bg-[#18A551] w-full items-center justify-center  py-5 gap-2 flex-row flex 2xs:py-3'>
    <h1 className='text-lg  text-[#fff]'>

Continue
            </h1>
            <img alt="" src={rightIcon}/>
    </div>
  </div>)}



  <div className='flex-row gap-2 items-center justify-center  flex'>
<div onClick={() => handleChangeIndex(0)}>
  <div className={`p-1 rounded-full ${currentIndex === 0 ? 'bg-[#fff]' : 'bg-[#444A47]'}`}>

  </div>
</div>
<div onClick={() => handleChangeIndex(1)}>
  <div  className={`p-1 rounded-full ${currentIndex === 1 ? 'bg-[#fff]' : 'bg-[#444A47]'}`}>

  </div>
</div>
<div onClick={() => handleChangeIndex(2)}>
  <div  className={`p-1 rounded-full ${currentIndex === 2 ? 'bg-[#fff]' : 'bg-[#444A47]'}`}>

  </div>
</div>
<div onClick={() => handleChangeIndex(3)}>
  <div  className={`p-1 rounded-full ${currentIndex === 3 ? 'bg-[#fff]' : 'bg-[#444A47]'}`}>

  </div>
</div>
  </div>
        </div>
    </div>
);
}
 
export default Intro;