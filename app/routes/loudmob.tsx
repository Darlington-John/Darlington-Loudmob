import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import favicon from '~/assets/images/favicon.png'
import Banner from "~/components/banner";
import CustomCursor from "~/components/customCursor";
import Footer from "~/components/footer";
// import Loader from "~/components/loader";
import Navbar from "~/components/navbar";
import Overlay from "~/components/overlay";
import TalkSection from "~/components/sections/home/talk";


export const meta: MetaFunction = () => {
  return [
    { title: "Loud Mob Media" },
    { name: "description" },
  ];
};
export const links: LinksFunction = () => {
  return [

    { rel: 'icon', href: favicon ,
  type: 'image/png'},
  ]
}
export default function LoudmodIndex() {
  return (
    <div>
      {/* <Loader> */}
     <CustomCursor/>
     <Navbar/>
     <Banner/>
     <Overlay/>
     <Outlet/>
     <TalkSection/>
     <Footer/>
     {/* </Loader> */}
    </div>
  );
}
