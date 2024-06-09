import reelVid from '~/assets/videos/reel.mp4'
import Button from '~/components/buttons';

import Slide from '~/components/slide';

const ReelSection = () => {

    return ( <section className="flex flex-col gap-0 items-center bg-black">
<div className="px-24 flex  gap-10 items-center lg:flex-col md:px-6 md:py-10">
<div className="flex flex-col gap-10 items-end w-[470px] shrink-0 text-justify lg:text-center lg:w-full lg:items-center xs:gap-4 xs:text-justify">
<p className="text-white text-xl leading-7  md:text-base xs:text-sm">
We are a design, strategy, technology and marketing agency for the loud, the nimble and the game-changers! From small businesses to shark tank winners, we love working with businesses who are new-age, adaptive and think differently. We use innovative designs, marketing, strategies and technologies to create immersive experiences and engage audiences. With storytelling at the core of everything we do, we help growing businesses grow faster! Take a look at some of our work.
</p>
<Button action='about us' fancy=' ' link="/about-us"/>
</div>
<div className='cursor-none'>
<video className="w-full " src={reelVid} autoPlay muted loop    />
</div>
</div>

<Slide content='showreel' show=' ' position={-400}/>

    </section> );
}
 
export default ReelSection;