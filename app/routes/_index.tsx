
import { useState, useEffect } from 'react';
import Loader from "./../components/loader";
import Intro from '~/components/intro';


const Index = () => {
    const [showAlwaysLoader, setShowAlwaysLoader] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setShowAlwaysLoader(false); 
        }, 5000); 
    
        return () => clearTimeout(timer); 
      }, []);
    return (
        <div>
        {showAlwaysLoader ? (
       <Loader/>
        ) : (
            <Intro/>
        )}
        </div>
      );
}
 
export default Index;