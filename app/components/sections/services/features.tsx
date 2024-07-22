import Slide from "~/components/slide"

import Button from "~/components/buttons";
import { Link } from "@remix-run/react";
import arrRightBlueIcon from "~/assets/icons/arrRightBlue.svg"

import { featuresData } from "~/components/data/featuresData";
const Features = (props : FeatureProps) => {

    return (<div className="flex flex-col items-start w-full gap-10 bg-black text-white  py-20 md:gap-4 2xs:pt-10 ">
<h1 className="text-[84px] font-black px-32  xl:px-10 md:text-5xl  sm:text-4xl md:px-4  md:mx-auto">{props.feature}</h1>
<Slide firstFeature={props.firstFeature} secondFeature={props.secondFeature} thirdFeature={props.thirdFeature}
fourthFeature={props.fourthFeature}  fifthFeature={props.fifthFeature}  apps=" " position={props.position}/>
<div className="flex items-end justify-between gap-10 px-32  xl:px-10 md:px-4 lg:flex-col lg:items-center mx-auto">
<div className="flex flex-col gap-10 w-[580px] shrink-0 md:w-full lg:order-2 items-start">
<p className='text-justify text-[20px] leading-tight md:text-base  md:leading-snug last' >
{props.description}
</p>
<Link  to="#" className='flex flex-wrap gap-4 items-center'  >
<img src={arrRightBlueIcon} alt="" className='w-8'/>
<h1 className='text-[20px] font-bold '>read more</h1>
</Link>

</div>
<div className="flex items-end justify-end flex-col lg:order-1">
<video src={props.video} loop muted autoPlay  className="xl:max-w-[600px]  lg:w-full"/>
<Button fancy=" " action="view work" link="/loudmob/work"/>
</div>
</div>
    </div>  );
}
 const FeaturesSection = () => {
    return ( <section>
        {featuresData.map((feature, index) =>
        (<Features key={index} feature={feature} {...feature}/>)
        )}

    </section> );
 }
  export interface FeatureProps {
    feature: string;
    firstFeature: string;
    secondFeature: string;
    thirdFeature: string;
    fourthFeature: string;
    fifthFeature: string;
    position: number;
    description: string;
    video: string;
  }
 export default FeaturesSection;
