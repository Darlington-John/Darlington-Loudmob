import Card from "~/components/cards";
import { worksData } from "~/components/data/works";

const WorksSection = () => {
    return ( <section className="grid grid-cols-3 sm:grid-cols-2">
{worksData.map((work, index)=>
(<Card workCard=" "  work={work} {...work} key={index}/>)
)}
    </section> );
}
 
export default WorksSection;