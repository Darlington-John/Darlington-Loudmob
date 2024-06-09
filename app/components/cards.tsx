
import { useState, useEffect, useRef } from 'react';
import { useLoud } from './context';
import arrRightIcon from '~/assets/icons/arrRight.svg'
import arrRightBlueIcon from '~/assets/icons/arrRightBlue.svg'
import { Link } from '@remix-run/react';
const Card = (props: CardProps, link : string) => {
  const{handleMouseEnter,handleMouseLeave}  = useLoud();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    props.first,
    props.second,
    props.third,
    props.fourth,
    props.fifth,
    props.sixth,
    props.seventh,
    props.eighth,
    props.ninth,
    props.tenth,
    props.eleventh,
    props.twelfth,
    props.thirteenth,
    props.fourteenth,
    props.fifteenth,
    props.sixteenth,
    props.seventeenth,
    props.eighteenth,
    props.nineteenth,
    props.twentieth,
  ];

  const slideImages = [    props.first,
    props.second,
    props.third,
    props.fourth,
    props.fifth,]; // List of image URLs
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const slideshowInterval = useRef(null);

  const startSlideshow = () => {
    slideshowInterval.current = setInterval(changeImage, 500); // Change image every second (1000 milliseconds)
  };

  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
  };

  const stopSlideshow = () => {
    clearInterval(slideshowInterval.current);
  };
  const [isScrolling, setIsScrolling] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  useEffect(() => {
    const handleShift = () => {
      
      if (isScrolling) return;

      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const cardTop = document.querySelector('.card')?.getBoundingClientRect().top;

      if (cardTop !== null && scrollPosition + windowHeight >= cardTop) {
        const transitionThreshold = cardTop - windowHeight * 2/10;
        if (scrollPosition >= transitionThreshold) {
          
          const scrollDirection = scrollPosition > prevScrollPosition ? 'down' : 'up';
          
          setIsScrolling(true);
          setCurrentIndex((prevIndex) => {
            
            setTimeout(() => {
              setIsScrolling(false); 
            }, 100); 
            if (scrollDirection === 'down') {
              return (prevIndex + 1) % images.length; 
            } else {
              
              return ((prevIndex - 1) % images.length + images.length) % images.length;
            }
          });
          setPrevScrollPosition(scrollPosition); 
        }
      }
    };

    window.addEventListener('scroll', handleShift);

    return () => {
      window.removeEventListener('scroll', handleShift);
    };
  }, [images, currentIndex, isScrolling, prevScrollPosition]);



  return (
    <>
      {props.recentCard && (
        <Link to={props.link}>
         <div className={`w-full round-2xl  text-[#fff]  text-2xl cool relative overflow-hidden lg:p-0 xs:gap-4 xs:flex flex-col cursor-none w-[1080px] h-[450px] xl:w-[800px] xl:w-[300px] xl:w-full xs:h-[300px]   rounded-xl  card` }   onMouseEnter={() => handleMouseEnter(arrRightIcon)} 
        onMouseLeave={handleMouseLeave}  style={{backgroundColor: `${props.bgColor}`}}>
          <h1 className='relative z-30 font-thin top-[70px] left-[70px] md:top-10 md:left-4 md:text-lg xs:text-base  xs:top-4 xs:text-white ease-out duration-300'>{props.product}</h1>
          <img
            key={currentIndex}
            src={images[currentIndex]}
            className=" w-full h-full top-0 left-0 z-20 rounded-xl ease-out duration-300 object-cover  absolute "
            alt=""
          />
        </div>
        </Link>
      )}
      {props.brand && (
        <div className='flex flex-col items-start px-20 gap- text-white bg-black lg:px-4'>
<div className='flex items-center justify-between w-full px-12 md:px-6 sm:px-0 2xs:flex-col' >
<div className='flex flex-col gap- text-[32px] md:text-base 2xs:text-center 2xs:text-sm xl:text-2xl'>
<h1 className='font-black text-[45px] xl:text-3xl xl:font-bold md:text-2xl 2xs:text-xl'>{props.brandHeader}</h1>
<ul>
  <li>{props.firstBrand}</li>
  <li>{props.secondBrand}</li>
  <li>{props.thirdBrand}</li>
  <li>{props.fourthBrand}</li>
  <li>{props.fifthBrand}</li>
</ul>
</div>
<div className='w-[500px] h-[500px] xl:w-[300px] xl:h-[300px] md:w-[200px] md:h-[200px]'>
<img
            key={currentIndex}
            src={images[currentIndex]}
            className=" w-full h-full top-0 left-0 z-20 rounded-xl ease-out duration-300 object-cover "
            alt=""
          />
</div>
</div>
<div className='flex gap-4 items-center text-xl font-bold md:text-sm md:font-normal'>
<img src={arrRightBlueIcon} alt="" className='w-8 md:w-6'/>
<h1>
  view more
</h1>
</div>
        </div>
      )}
      {props.caseCard && (
<div className='w-full  h-[450px]  xl:w-full xs:h-[300px] relative flex items-center justify-center  card tracking-tighter cursor-none  '  onMouseEnter={() => handleMouseEnter(arrRightIcon)} 
        onMouseLeave={handleMouseLeave} style={{backgroundColor: `${props.bgColor}`}}>
<img             key={currentIndex}
            src={images[currentIndex]} alt='' className='absolute top-o left-0 w-full h-full object-cover z-10'/>
            <h1 className='text-[96px] text-white font-black relative z-20 lg:text-6xl sm:text-3xl md:font-bold'>
              {props.case}
            </h1>
</div>
      )}
      {props.workCard && (<div    onMouseEnter={startSlideshow}
      onMouseLeave={stopSlideshow}>
<img src={slideImages[currentImageIndex]} alt=""/>
{props.slideVideo && (<video src={props.video} loop autoPlay muted/>)}
      </div>)}
    </>
  );
};


export interface CardProps {
    recentCard: string;
    product: string;
    first: string;
    link: string;
    second: string;
    third: string;
    fourth: string;
    fifth: string;
    sixth: string;
    seventh: string;
    eighth: string;
    ninth: string;
    tenth: string;
    eleventh: string;
    twelfth: string;
    thirteenth: string;
    fourteenth: string;
    fifteenth: string;
    sixteenth: string;
    seventeenth: string;
    eighteenth: string;
    nineteenth: string;
    twentieth: string;
    bgColor: string;
    brandHeader: string;
    firstBrand: string;
    secondBrand: string;
    thirdBrand: string;
    fourthBrand: string;
    fifthBrand: string;
    brand: string;
    caseCard: boolean;
    case: string;
    workCard: boolean;
    slideVideo: boolean;
    video: string;
}
export default Card;