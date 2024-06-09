import Button from "~/components/buttons";
import Slide from "~/components/slide";
import skateImg from '~/assets/images/skate.png'

const LabSection = () => {
    return (     <section  className="  grid grid-cols-2 bg-black md:flex  py-40 items-center px-40 xs:px-4 lg:flex flex-col xl:px-20 md:py-10 relative overflow-hidden">
<div className='flex flex-col gap-[36px] text-[96px] lg:text-[60px] z-20 text-white relative font-black  lg:leading-3  items-start ease-out duration-300 md:items-start  leading-[64px] shrink-0 lg:p-10 xs:p-0' >
    <div className='flex flex-col gap-[36px] items-end lg:flex-row flex-wrap md:text-4xl md:gap-4  pl-10  xs:gap-4 xs:p-4 '>
<h1 className="xs:hidden">loud</h1>
<h1 className="xs:hidden">mob</h1>

<h1 className="xs:hidden">labs</h1>
<h1 className="xs:block text-center hidden">loud mob labs</h1>
</div>
</div>
<div className="w-full flex items-end justify-end lg:items-center lg:justify-center">
<div className="flex flex-col gap-10 items-end w-[500px] shrink-0 text-justify lg:text-center  lg:items-center xs:gap-4 xs:text-start xs:w-full">
<p className="text-white text-xl leading-7  md:text-base xs:text-sm ">
At Loud Mob Labs we make targeted marketing smarter with our homegrown products. Exploiting the latest technological advancements like Facial recognition and augmented reality, we create an emotional connect with your consumers.
</p>
<Button action='our labs' fancy=' ' link="/about-us"/>

</div>
</div>
<Slide skate=" " figure={skateImg} style="absolute z-20 w-[1000px]"  position={-3000}/>
    </section>   );
}
 
export default LabSection;