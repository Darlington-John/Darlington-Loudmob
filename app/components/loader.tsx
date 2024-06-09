import  { useEffect, useState } from 'react';
import loadImg from '~/assets/images/load.png'
const Loader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    if (isLoading) {
      timer = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 10;
          if (newProgress >= 100) {
            clearInterval(timer);
            setIsLoading(false);
          }
          return newProgress;
        });
      }, 1000); // Change every second
    }

    return () => {
      clearInterval(timer);
    };
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center  justify-center bg-black relative">
        <h2 className='text-white text-8xl'>Loading... {progress}%</h2>
    <img    src={loadImg}
              
              className="absolute  ease-out duration-300"
              style={{ left: `${progress}%` }} alt=""/>
        
      </div>
    );
  }

  return children;
};

export default Loader;
