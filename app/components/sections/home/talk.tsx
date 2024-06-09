import Button from '~/components/buttons';
import bounceVid from '~/assets/videos/bounce.mp4'
const TalkSection = () => {
    return (<section className="flex items-center gap-10 py-20 pl-28 text-lightBlue bg-black  lg:p-4 xs:flex-col">
<div className="flex flex-col gap-6 xs:text-center">
<h1 className="text-[27px] tracking-wider xl:text-xl md:text-base">Have a project in mind?</h1>
<h1 className="text-[52px] font-black xl:text-4xl md:text-2xl" >We{`'`}re excited to hear all about your brand</h1>
<Button fancy=" " action="let's talk" link="/contact"/>
</div>
<div>
<video className="w-[800px] lg:w-[500px]" src={bounceVid} autoPlay muted loop />
</div>
    </section>  );
}
 
export default TalkSection;