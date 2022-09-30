import React from 'react'

import Heading from '../Heading'
import ServiceCard from '../ServiceCard'
const services=[
  {
    id:1,
    cardHead:"UI Design for web",
    desc:"To create the wave layout,You need to create a visual ui first.there are many tools for creating ui.Figma is best among them.",
    tools:["Figma","Adobi XD","Sketch"]
  },
  {
    id:2,
    cardHead:"Design with bootstrap",
    desc:"Bootstrap,the world’s most popular framework for building responsive, mobile-first sites, with js.it's easy and customizable framework",
    tools:["JavaScript","CSS-3","Bootstrap-5"]
  },
  {
    id:3,
    cardHead:"Design with tailwind",
    desc:"the most populer and mordern css framework is tailwind css.it's utility first framework.it build website without ever leaving HTML",
    tools:["HTML-5","Tailwind CSS","JavaScript"]
  },
  {
    id:4,
    cardHead:"fontend with react.js",
    desc:"Building a single page web application you need world's most popular React js.it's super awesome and optimizing and web page not reload.",
    tools:["React.Js","Tailwind CSS","Vite.Js"]
  },
  
  {
    id:5,
    cardHead:"build with next.js",
    desc:"Building a single page website but behave like multi-page you need next js.it's also can server site rendering that's cool and awesome.it's a react js framework",
    tools:["Next.Js","Tailwind CSS","Firebase"]
  },
  {
    id:6,
    cardHead:"web dev with firebase",
    desc:"firebase is a backend service which developed by google.without backend knowledge you will make fullstack website from fontend.",
    tools:["React.Js","Tailwind CSS","Firebase"]
  },
  {
    id:7,
    cardHead:"Web dev with express",
    desc:"Building a single page web application you need world's most popular React js.it's super awesome and optimizing and web page not reload",
    tools:["HTML-5","Express.Js","MongoDB"]
  },
  {
    id:8,
    cardHead:"web dev with mongo db",
    desc:"Building a single page web application you need world's most popular React js.it's super awesome and optimizing and web page not reload",
    tools:["React.js","Express.JS","MongoDB"]
  },
]
export default function Services() {
  return (
    <div className='py-20 md:py-0 font-Poppins'>
        <Heading title="services" subTitle="which iam able?"/>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 mt-14'>
          {
            services.map((service)=><React.Fragment key={service.id}>
              <ServiceCard {...service}/>
            </React.Fragment>)
          }
                       
        </div>
    </div>
  )
}
