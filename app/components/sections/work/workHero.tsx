import arrRightBlueIcon from '~/assets/icons/arrRightBlue.svg'
import workVid from '~/assets/videos/Work.mp4'
const WorkHeroSection = () => {
    return (  <section className="flex  items-center justify-between px-28 h-screen w-full bg-black text-white lg:px-6 md:h-auto md:flex-col md:py-20 md:px-4 overflow-hidden">
<div className="flex items-start w-[450px] flex-col gap-8 shrink-0 lg:shrink md:order-2 md:w-full  2xs:gap-2 md:items-center 2xs:items-start">
<h1 className='font-black text-[96px] leading-[60px] md:mx-auto md:text-5xl  2xs:text-3xl md:font-bold' ><span className='text-[72px] md:text-5xl  2xs:text-3xl '>our</span>  <br className='md:hidden'/>work</h1>
<h1 className='text-[20px] text-justify leading-tight last md:text-[18px] 2xs:text-base'>
We build award-winning brands and websites. Some of our work across branding, packaging, 3D, motion design, product design, advertising, animation, illustration and UIUX that we’re very proud of. We love working on fresh concepts, ideas and brands that break industry standards and generate online traction
</h1>
<div className="flex items-center gap-2 font-bold text-white">
<img src={arrRightBlueIcon} alt="" className='w-8'/>
<h1 className='text-[20px] font-bold md:text-[18px]'>view work</h1>
</div>
</div>
<div className='shrink-0 md:order-1 '>
<video src={workVid} loop autoPlay muted  className='w-[600px] lg:w-[400px] md:w-full'/>
</div>
    </section>);
}
 
export default WorkHeroSection;