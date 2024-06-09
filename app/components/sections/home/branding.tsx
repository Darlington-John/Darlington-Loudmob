import Card from "~/components/cards";
import { brandsData } from "~/components/data/brands";
import Slide from "~/components/slide";

const BrandingSection = () => {
    return (<section className="py-32 bg-black md:py-10">

{brandsData.map((data, index) => (
    <Card brand=" " key={index} data={data} {...data}/>
))}
<Slide apps=" " position={-3200}  content="We make cool apps and websites"/>
    </section>  );
}
 
export default BrandingSection;