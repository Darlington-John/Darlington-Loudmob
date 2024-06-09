import Card from "~/components/cards";
import recentProductsData from "~/components/data/recentProducts";

function RecentsSection() {
    return (  <section className="flex flex-col text-white bg-black items-start gap-10 xs:gap-4 py-10">
<div className="flex items-start cool text-[90px] font-bold px-20 gap-4 flex-col leading-[70px] md:text-6xl md:flex-row md:items-center w-full md:text-center  xs:text-4xl xs:font-normal">
<h1 className="md:hidden">Our</h1>
<h1 className="md:hidden">recents</h1>
<h1 className="mx-auto hidden md:block ">Our recents</h1>
</div>
<div className="flex flex-col gap-10 px-[200px] w-full xl:px-24 lg:px-6 xs:gap-4">

          {recentProductsData.map((project, index) => (
            <Card recentCard=" "     key={index}
            {...project} project={project} link={`/loudmob/projects/${project.url}`}  />
                    ))}
</div>
    </section>);
}

export default RecentsSection;