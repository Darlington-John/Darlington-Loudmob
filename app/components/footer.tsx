import { Link } from "@remix-run/react";
import BehIcon from '~/assets/icons/Beh.svg'
import InsIcon from '~/assets/icons/Ins.svg'
import PinIcon from '~/assets/icons/Pin.svg'
const Footer = () => {
    return ( <footer className="grid grid-cols-2 items-start justify-between px-16 py-10 bg-lightBlue text-black  text-base cool lg:px-4 md:grid-cols-1">
        <div className="grid grid-cols-4 items-start 2xs:grid-cols-3">
<div className="flex flex-col gap-3 2xs:gap-1  2xs:gap-1">
<Link to="/">
    home
</Link>
<Link to="/loudmob/about-us">
about us
</Link>
<Link to="/loudmob/process">
process
</Link>
<Link to="/loudmob/case-study">
case studies
</Link>
<Link to="/loudmob/work">
work
</Link>
</div>
<div className="flex flex-col gap-3 2xs:gap-1 ">
<Link to="/loudmob/case-study">
labs
</Link>
<Link to="/loudmob/work">
blogs
</Link>
<Link to="/">
contact us
</Link>
</div>
<div className="flex flex-col gap-3 2xs:gap-1 ">
<Link to="/">
 services
</Link>
<Link to="/">
design
</Link>
<Link to="/">
branding
</Link>
</div>

        </div>
        <div className="flex items-end justify-end flex-col gap-6">
<div className="flex gap-3 flex-wrap">
<img src={BehIcon} alt=""  className='w-6'/>
<img src={InsIcon} alt="" className='w-6'/>
<img src={PinIcon} alt="" className='w-6'/>
</div>
<div className="flex flex-col items-end">
<h1>
    onuohadarlington38@gmail.com
</h1>
<h1>
Loudmob media Plc, 2020
</h1>
        </div>
        <div className="flex flex-col items-end">
<h1>Pune</h1>
<h1>Bangalore</h1>
<h1>India</h1>
        </div>
        </div>

    </footer> );
}
 
export default Footer;