import  { useState, useEffect} from 'react';

const Slide = (props: SlideProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [translateX, setTranslateX] = useState(props.position);



  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const newX = translateX + window.scrollY * 0.5; // Adjust this multiplier for speed
      setTranslateX(newX);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerContents = Array.from({ length: 200 }, (_, index) => ({
    content: props.content,
    firstFeature: props.firstFeature,
    secondFeature: props.secondFeature,
    thirdFeature: props.thirdFeature,
    fourthFeature: props.fourthFeature,
    fifthFeature: props.fifthFeature,
  }));

  return (
    <>
      {props.show && (
        <div className="flex items-start overflow-hidden w-full ber cool lg:hidden text-black">
          <h1 className="text-[19rem] lg:text-4xl" style={{ transform: `translateX(${translateX}px)` }}>
            {props.content}
          </h1>
        </div>
      )}
       {props.apps && (
        <div className="flex items-start overflow-hidden w-full berk cool  text-black md:hidden " >
          <div className='flex origin-center gap-10 ' style={{ transform: `translateX(${translateX}px)` }}>
  {headerContents.map((header, index) => (
            <h1 key={index} className="text-7xl lg:text-4xl text-nowrap " >
              {header.content}
              {header.firstFeature}
              {header.secondFeature} 
               {header.thirdFeature}  
               {header.fourthFeature}  
               {header.fifthFeature}
            </h1>
          ))}
          </div>
        </div>
      )}
      {props.skate && (
        <img src={props.figure} alt='' style={{ transform: `translateX(${translateX}px)` }} className={props.style}/>
      )}
    </>
  );
};

export interface SlideProps {
  content: string;
  show: boolean;

  apps: boolean;
  position: number;
  skate: boolean;
  figure: string;
  style: string;
  firstFeature: string;
  secondFeature: string;
  thirdFeature: string;
  fourthFeature: string;
  fifthFeature: string;
}

export default Slide;
