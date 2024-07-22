import Navbar from "~/components/navbar";
import Overlay from "~/components/overlay";
import BrandingSection from "~/components/sections/home/branding";
import ClientsSection from "~/components/sections/home/clients";
import HomeHeroSection from "~/components/sections/home/homeHero";

import LabSection from "~/components/sections/home/lab";
import RecentsSection from "~/components/sections/home/recents";
import ReelSection from "~/components/sections/home/reel";
import ServicesSection from "~/components/sections/home/services";
import StudioSection from "~/components/sections/home/studio";



export default function LoudmodIndex() {

  return (

    <div >
<HomeHeroSection/>

<ReelSection/>
<Navbar/>
<Overlay/>

<RecentsSection/>
<ServicesSection/>
<BrandingSection/>
<StudioSection/>
<LabSection/>
<ClientsSection/>

    </div>
  );
}



