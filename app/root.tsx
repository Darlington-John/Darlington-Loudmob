
import {

  Links,
  LiveReload,

  Outlet,
  Scripts,
  ScrollRestoration,


} from "@remix-run/react";
import type { MetaFunction, LinksFunction  } from "@remix-run/node";
import tailwindStyles from '~/tailwind.css'
import baseStyles from '~/styles/base.css'
import LoudContext, { LoudProvider } from "./components/context";

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: tailwindStyles },
    { rel: 'stylesheet', href: baseStyles  }
  ]
}

export const meta: MetaFunction = () => {
  return [
    { title: "Graphy" },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {

  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       
        <Links />
      </head>
      <body>
      
     <LoudProvider>
        <Outlet />
        </LoudProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      
     
      </body>
    </html>
  );
}
