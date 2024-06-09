import casestudyVid from '~/assets/videos/casestudy.mp4'
const CaseStudyHeroSection = () => {
    return (<section className="flex items-center justify-center h-screen w-full overflow-hidden relative lg:h-auto">
<video src={casestudyVid} className='absolute top-0 left-o w-full h-full object-cover z-10 lg:static' loop autoPlay muted/>
<h1 className='absolute z-20 text-[144px] font-bold text-[#ffffffd0] lg:text-[80px] sm:text-6xl 2xs:text-5xl'>
case studies
</h1>
    </section>  );
}
 
export default CaseStudyHeroSection;