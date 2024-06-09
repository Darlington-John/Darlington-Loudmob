import Card from "~/components/cards";
import { caseData } from "~/components/data/case";

const CaseSection = () => {
    return ( <section className="flex flex-col items-center justify-center gap-10 px-32 py-20 bg-black lg:px-4">

          {caseData.map((data, index) => (
            <Card  caseCard=" " key={index}  {...data}  data={data} />
                    ))}
    </section> );
}
 
export default CaseSection;