import spotifyVid from '~/assets/videos/spotify.mp4'
import girlVid from '~/assets/videos/girl.mp4'
import cityVid from '~/assets/videos/city.mp4'
import creativeVid from '~/assets/videos/creative.mp4'
import skullVid from '~/assets/videos/skull.mp4'
import podVid from '~/assets/videos/pod.mp4'
import ewwVid from '~/assets/videos/eww.mp4'
const StudioSection = () => {
    return (  <section className="bg-black  flex items-center justify-center px-40  pt-40 overflow-hidden lg:px-0  pb-60 md:py-20">
        <div className="flex flex-col items-start w-[900px]  leading-tight relative lg:w-full">
<h1 className="cool tracking-widest font-black text-[108px] text-white relative z-20 lg:text-7xl sm:text-5xl " >A MODERN</h1>
<h1 className="ber text-[180px] text-transparent font-bold relative z-20 lg:text-8xl lg:self-center sm:text-7xl 2xs:text-5xl">CREATIVE</h1>
<h1 className="cool tracking-widest font-black text-[108px] self-end text-white relative z-20 lg:text-7xl sm:text-5xl">STUDIO</h1>
<video className="absolute top-[-19%] left-[-13%] w-52 lg:w-40 lg:left-0 md:hidden" src={spotifyVid} autoPlay muted loop    />
<video className="absolute top-[-45%] left-[30%] w-64 lg:w-52 md:w-40 2xs:w-32 md:left-[70%] " src={girlVid} autoPlay muted loop    />
<video className="absolute top-[-17%] right-[-15%] w-64 lg:w-52 lg:right-0 md:hidden " src={cityVid} autoPlay muted loop    />
<video className="absolute top-[35%] left-[-10%] lg:w-52  w-64 2xs:hidden md:w-40" src={skullVid} autoPlay muted loop    />
<div className='absolute top-[20%] left-[30%] w-80 flex  md:w-52 items-center justify-center s md:top-[80%] md:hidden'>
<video className="w-full h-full relative z-10" src={creativeVid} autoPlay muted loop   />
<div className='absolute z-20 px-10 py-16 rounded-full border border-2 border-lightBlue text-lightBlue  font-bold  text-lg  hover:bg-blue hover:text-white ease-out duration-300'>
<h1>
    view work
</h1>
</div>
<video className="absolute top-[65%] right-[-120%] w-64 md:hidden" src={podVid} autoPlay muted loop   />
<video className="absolute top-[120%] left-[30%] w-64 md:hidden" src={ewwVid} autoPlay muted loop   />
</div>
        </div>
    </section>);
}
 
export default StudioSection;