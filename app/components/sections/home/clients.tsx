import { clientsData } from "~/components/data/clients";

const ClientsSection = () => {
    return ( <section className="flex flex-col gap-16 p-12 bg-black text-white sm:p-4 sm:gap-2">
<h1 className="cool  text-[45px] font-bold sm:text-3xl">
    our clients 
</h1>
<div className="grid grid-cols-4 justify-between 2xs:grid-cols-3">
{clientsData.map((client, index) =>
(
<div key={index} className="flex items-center p-5 justify-center">
<img src={client.img} alt="" className="w-48"/>
</div>
))}
</div>
    </section> );
}
 
export default ClientsSection;