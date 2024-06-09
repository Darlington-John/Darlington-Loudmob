import BehIcon from '~/assets/icons/Beh.svg'
import InsIcon from '~/assets/icons/Ins.svg'
import PinIcon from '~/assets/icons/Pin.svg'
import honorsImg from '~/assets/images/honors.png'
import { motion } from "framer-motion"
const Banner = () => {
    return ( <div className="flex items-center justify-between bg-transparent fixed top-40 z-40 w-full md:justify-end 2xs:hidden relative">
<motion.div className="bg-lightBlue py-4 px-3 flex flex-col gap-4 items-center md:hidden fixed top-40 left-0" initial={{ translateX: '-100px', opacity: 0,  }}
        animate={{translateX: 0, opacity: 1  }}  transition={{   ease: "linear",
        duration: 1,  delay: 2, }}>
<img src={BehIcon} alt=""  className='w-5'/>
<img src={InsIcon} alt="" className='w-5'/>
<img src={PinIcon} alt="" className='w-5'/>
</motion.div>
<motion.div initial={{ translateX: '100px', opacity: 0,  }}
        animate={{translateX: 0, opacity: 1  }}  transition={{   ease: "linear",
        duration: 1,  delay: 2, }} className='fixed top-40 right-0'>
<img src={honorsImg} alt="" className='w-10 sm:w-6'/>
</motion.div>
    </div> );
}
 
export default Banner;