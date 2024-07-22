import { Link } from "@remix-run/react";
import BehIcon from '~/assets/icons/Beh.svg'
import InsIcon from '~/assets/icons/Ins.svg'
import PinIcon from '~/assets/icons/Pin.svg'
const Overlay = () => {
  return (
    <div className=" hidden h-[0px] w-full fixed z-40 top-0 right-0 bg-black overflow-hidden  ease-out duration-300 md:flex text-white max-h-[60%]" id="myNav">
      <div className="relative top-[10%] w-auto  py-10 px-6  rounded-md   flex flex-col gap-2 font-semibold ">
    
      <Link to="/loudmob/work">work</Link>
          <Link to="/loudmob/services">services</Link>
          <Link to="/loudmob/case-study">case studies</Link>
          <Link to="/loudmob/process">process</Link>

          <Link to="/loudmob/process">contact</Link>
          <div className="flex">
          <img src={BehIcon} alt=""  className='w-5'/>
<img src={InsIcon} alt="" className='w-5'/>
<img src={PinIcon} alt="" className='w-5'/>
          </div>
      </div>
    </div>
  );
};

export default Overlay;
