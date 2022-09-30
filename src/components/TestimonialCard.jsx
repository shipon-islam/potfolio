import React from 'react'

export default function TestimonialCard({icon,title,rate}) {
  return (
    <div className="text-center">
        <{icon} className="text-5xl mx-auto"/>
        <h1 className="text-2xl font-bold mt-3 mb-2">{rate}</h1>
        <h3 className="text-2xl font-bold ">{title}</h3>
        </div>
  )
}
