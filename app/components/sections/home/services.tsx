import Slide from "~/components/slide";

const ServicesSection = () => {
    return ( <section className="flex flex-col gap-0 items-center bg-black py-20 sm:py-10">
<Slide content='services'  position={-1900} show=" "/>
<div className="px-40 text-center text-white lg:px-20 md:px-6 xs:text-justify">
<p className="text-white text-xl leading-7  md:text-base xs:text-sm">
We are a design, strategy, technology and marketing agency for the loud, the nimble and the game-changers! From small businesses to shark tank winners, we love working with businesses who are new-age, adaptive and think differently. We use innovative designs, marketing, strategies and technologies to create immersive experiences and engage audiences. With storytelling at the core of everything we do, we help growing businesses grow faster! Take a look at some of our work.
</p>
</div>

    </section> );
}
 
export default ServicesSection;