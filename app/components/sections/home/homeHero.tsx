import createBrands from '~/assets/videos/createBrands.mp4'
import paintMobile from '~/assets/videos/paintMobile.mp4'
import Button from '~/components/buttons'
import { motion } from "framer-motion"
const HomeHeroSection = () => {
    return (
         <section  className="text-4xl h-screen w-full  
    overflow-clip box-border relative pt-20 lg:pt-32  grid grid-cols-2 bg-black md:h-auto md:py-36 md:px-20 md:flex ">
<video src={createBrands}
 autoPlay
 muted 
 className='w-full absolute top-[0px]  z-10 h-full md:top-0  object-cover md:hidden'
/>
<video src={paintMobile}
 autoPlay
 muted 
 className='w-full absolute top-[-90px]  z-10 h-full md:top-0 object-cover  hidden md:flex left-0 2xs:object-contain'
/>
<motion.div className='flex flex-col gap-[36px] text-[84px] lg:text-[60px] z-20 text-white relative font-black  lg:leading-3  items-center ease-out duration-300 md:items-start md:hidden ' initial={{ translateX: '-200px', opacity: 0,  }}
        animate={{translateX: 0, opacity: 1  }}  transition={{   ease: "linear",
        duration: 1,  delay: 1, }}>
    <div className='flex flex-col gap-[36px] items-end md:flex-row flex-wrap md:text-4xl md:gap-4'>
<h1>loud</h1>
<h1>mob</h1>
<div className='flex items-end flex-col'>
<div className='p-6 h-full bg-white rounded-full  lg:hidden '></div>
<h1>media</h1>
</div>
</div>
</motion.div>
<motion.div className='flex items-end pb-20 relative z-20 justify-end pr-20 lg:pb-12 lg:pr-12 md:absolute right-10 bottom-4 md:p-0' initial={{ opacity: 0,  }}
        animate={{opacity: 1  }}  transition={{   ease: "linear",
        duration: 1,  delay: 1, }}>
    <Button fancy=" " link="/loudmob/work" action="our-work"/>
</motion.div>
    </section> );
}
 
export default HomeHeroSection;