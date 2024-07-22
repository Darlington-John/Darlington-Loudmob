import Navbar from "~/components/navbar";
import Overlay from "~/components/overlay";
import CaseSection from "~/components/sections/case-study/case";
import CaseStudyHeroSection from "~/components/sections/case-study/caseHero";




export default function CaseStudy() {

  return (

    <div >
<CaseStudyHeroSection/>
<CaseSection/>
<Overlay/>
<Navbar/>
    </div>
  );
}



