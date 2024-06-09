import recentProductsData from "~/components/data/recentProducts";
import { useLoaderData } from '@remix-run/react';
import { json, LoaderFunction } from '@remix-run/node';



export const loader: LoaderFunction = async ({ params }) => {
  const projectUrl = params.project; 
  const projects = [...recentProductsData] 
  
;
  const project = projects.find((project) => project.url === projectUrl);

  if (!project) {
    return json(
      { message: 'project not found' },
      { status: 404 }
    );
  }

  return json({
   project
  });
};
export default function LoudmodIndex() {
  const { project } = useLoaderData<{ project }>();
  return (

    <div>
      <section>
<video src={project.heroVid}
 autoPlay
 muted 
 loop
 className='w-full h-screen  object-cover lg:h-auto '
/>
</section>
<section className="flex flex-col px-40 py-24 gap-4  bg-black text-white text-justify lg:py-10 lg:px-10 2xs:p-4">
<h1 className="text-[96px] font-black md:text-5xl">{project.project}</h1>
<h1 className="text-[20px] leading-6  md:text-base leading-none">{project.firstDesc}</h1>
<h1 className="text-[20px] leading-6  md:text-base leading-none">{project.secondDesc}</h1>
<h1 className="text-[20px] leading-6  md:text-base leading-none">{project.thirdDesc}</h1>
<h1 className="text-[20px] leading-6  md:text-base leading-none">{project.fourthDesc}</h1>
<h1 className="text-[20px] leading-6  md:text-base leading-none">{project.fifthDesc}</h1>
</section>
<section>
<video src={project.commerceVid}
 autoPlay
 muted 
 loop
 className='w-full h-screen  object-cover  lg:h-auto'
/>
</section>
<section className="flex flex-col w-full">
<img src={project.firstPack}
alt=""
 className='w-full h-screen  object-cover  lg:h-auto'
/>
<img src={project.secondPack}
alt=""
 className='w-full h-screen  object-cover  lg:h-auto'
/>
<img src={project.thirdPack}
alt=""
 className='w-full h-screen  object-cover  lg:h-auto'
/>
</section>
    </div>
  );
}



