import Navbar from "~/components/navbar";
import Overlay from "~/components/overlay";
import WorkHeroSection from "~/components/sections/work/workHero";
import WorksSection from "~/components/sections/work/works";





export default function Work() {

  return (

    <div >
      <Overlay/>
      <Navbar/>
<WorkHeroSection/>
<WorksSection/>
    </div>
  );
}



