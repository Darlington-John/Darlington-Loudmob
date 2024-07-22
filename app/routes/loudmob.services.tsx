import Navbar from "~/components/navbar";
import Overlay from "~/components/overlay";
import FeaturesSection from "~/components/sections/services/features";
import ServiceHeroSection from "~/components/sections/services/serviceHero";




export default function Services() {

  return (

    <div >
<ServiceHeroSection/>
<FeaturesSection/>
<Overlay/>
<Navbar/>
    </div>
  );
}



