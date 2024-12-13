import serviceVid from '~/assets/videos/Services.mp4'
import serviceMobileVid from '~/assets/videos/Services-Mobile.mp4'
import serviceMobileImg from '~/assets/images/service-mobile.png'
import arrRightBlueIcon from '~/assets/icons/arrRightBlue.svg'
import serviceImg from '~/assets/images/balls.png'
import { useLoud } from '~/components/context';
import { Link } from '@remix-run/react';

const ServiceHeroSection = () => {
    const{handleMouseEnter,handleMouseLeave}  = useLoud();
    return (  <section className="h-screen w-full flex items-center xl:items-start  text-white  pl-40  bg-black overflow-hidden  relative py-32 lg:pl-0 lg:justify-center md:flex-col md:h-auto   md:py-4 ">
<video src={serviceVid}
 autoPlay
 poster={serviceImg}
 muted  loop 
 className=' absolute top-[-20%]  z-10 h-full    object-bottom  z-10 left-0 w-full  scale-125  md:hidden object-cover'
/>
<video src={serviceMobileVid}
 autoPlay
 poster={serviceMobileImg}
 muted  loop 
 className=' h-full    object-bottom  z w-full   hidden md:flex  object-cover'
/>
<div className='flex flex-col gap-10 items-start relative z-20 w-[500px] sm:w-full md:items-center p-4 md:mx-auto' >
<div className='flex flex-col gap-4 '>
<h1 className='font-black text-[96px] leading-none lg:text-6xl md:text-center  sm:text-4xl'>services</h1>
<p className='text-justify text-[20px] leading-tight lg:text-base lg:leading-4  md:leading-snug last'  >
We work with you to create a brand that is both memorable and unique, by creating experiences and technologies that leave an impressionable mark, generate curiosity and give your audiences something to talk about. We have an obsession with innovation and love cultivating fresh and bold ideas for businesses that love themselves and their fans. We have worked across several industries like entertainment, lifestyle, technology and retail. With a team that is driven by creativity, we work with you to create unique solutions and bring all kinds of ideas to life!
</p>
</div>
<div>
<Link  to="/loudmob/case-study" className='flex flex-wrap gap-4 items-center '  onMouseEnter={ handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
<img src={arrRightBlueIcon} alt="" className='w-8'/>
<h1 className='text-[20px] font-bold '>view case  studies</h1>
</Link>
</div>
</div>
    </section>);
}
 
export default ServiceHeroSection;