
import SplashImg from './../assets/images/Splash.png'
import LogoImg from './../assets/images/Logo.png'

const Loader = () => {
    return (<div   

    className='relative h-screen overflow-hidden  w-screen items-center  justify-center flex'>
        <img 
               src={SplashImg}
               className='w-full h-screen  absolute z-10'
               alt=""
             />
              <img
               src={LogoImg}


                className='relative z-20 '
                alt=""
             />
    </div>  );
}
 
export default Loader;