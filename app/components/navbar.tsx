import { Link, useLocation  } from "@remix-run/react";
import logoImg  from '~/assets/images/logo.png'
import { motion } from "framer-motion"
import BarsIcon from '~/assets/icons/Bars.svg';
import XmarkIcon from '~/assets/icons/Xmark.svg';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const location = useLocation();
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [icon, setIcon] = useState(BarsIcon);
  useEffect(() => {
    const navElement = document.getElementById('myNav');
    // Check initial height of navElement
    const initialHeight = getComputedStyle(navElement).height;

    // Set isOverlayOpen based on initial height
    setIsOverlayOpen(initialHeight === '60%');
  }, []);
  const handleToggleNav = () => {
    toggleNav();
    setIsOverlayOpen(!isOverlayOpen);
    setIcon(isOverlayOpen ? BarsIcon : XmarkIcon);
  };
    return ( <motion.nav className="flex items-center justify-between py-4 px-8  w-full fixed top-0 text-white z-50 md:px-6 "  initial={{ translateY: '-100px', opacity: 0,  }}
    animate={{translateY: 0, opacity: 1  }}  transition={{   ease: "linear",
    duration: 1,  delay: 2, }}>
<div className="w-16 md:w-12">
    <Link to="/">
        <img src={logoImg} alt="logo"/>
    </Link>
</div>
<div className="flex items-center gap-10 text-lg  md:gap-6 md:text-sm xs:hidden " >

<Link to="/loudmob/services" className={` ${
  location.pathname ==='/loudmob/services' 
    ? 'border-b-2  border-white  border-dashed ' 
    : ' '
}`}>
    services
</Link>
<Link to="/loudmob/case-study"  className={` ${
  location.pathname ==='/loudmob/case-study' 
    ? 'border-b-2  border-white  border-dashed ' 
    : ' '
}`}>
    case studies 
</Link>
<Link to="/loudmob/work" className={` ${
  location.pathname ==='/loudmob/work' 
    ? 'border-b-2  border-white  border-dashed ' 
    : ' '
}`}>
    work
</Link>
<Link to="/loudmob/about-us" className={` ${
  location.pathname ==='/loudmob/about-us' 
    ? 'border-b-2  border-white  border-dashed ' 
    : ' '
}`} >
about us
</Link>
<Link to="/loudmob/process" className={` ${
  location.pathname ==='/loudmob/process' 
    ? 'border-b-2  border-white  border-dashed ' 
    : ' '
}`}>
    process
</Link>


</div>
<div className="BarsIcon hidden xs:flex">
          <div  onClick={handleToggleNav}>
            <img id="barsIcon" src={icon}  className='w-6' alt=""/>
          </div>
        </div>
    </motion.nav> );
}
export const toggleNav = () => {
    const navElement = document.getElementById('myNav');
  
    if (navElement.style.height === '60%') {
      navElement.style.height = '0%';
    } else {
      navElement.style.height = '60%';
    }
  };
export default Navbar;