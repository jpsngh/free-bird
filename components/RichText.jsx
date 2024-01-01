
'use client'
import {PortableText} from '@portabletext/react'
import {urlForImage} from '@/sanity/lib/image'

import Image from 'next/image'

const myPortableTextComponents = {
    types: {
      image: ({value}) => { return (<div className="relative w-full h-96 m-10 mx-auto">  <Image src={urlForImage(value).url()} className="object-contain"  fill alt="rich -image" /> </div> )},
      callToAction: ({value, isInline}) =>
        isInline ? (
          <a href={value.url}>{value.text}</a>
        ) : (
          <div className="callToAction">{value.text}</div>
        ),
    },
  
    marks: {
      link: ({children, value}) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
        return (
          <a href={value.href} rel={rel}>
            {children}
          </a>
        )
      },
    },
    block: {
        // Ex. 1: customizing common block types
        h1: ({children}) => <h1 className="text-2xl font-bold">{children}</h1>,
        h2 :({children}) => <h2 className="text-xl font-bold">{children}</h2>,
        blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,
    
        // Ex. 2: rendering custom styles
        customHeading: ({children}) => (
          <h2 className="text-lg text-primary text-purple-700">{children}</h2>
        ),
      },
      list: {
        // Ex. 1: customizing common list types
        bullet: ({children}) => <ul className="mt-xl">{children}</ul>,
        number: ({children}) => <ol className="mt-lg">{children}</ol>,
    
        // Ex. 2: rendering custom lists
        checkmarks: ({children}) => <ol className="m-1 text-lg">{children}</ol>,
      },listItem: {
        // Ex. 1: customizing common list types
        bullet: ({children}) => <li className="p-1 m-1" style={{listStyleType: 'disclosure-closed'}}>{children}</li>,
    
        // Ex. 2: rendering custom list items
        checkmarks: ({children}) => <li>✅ {children}</li>,
      },
  }
  
  export const RichText = (props) => {
    return <PortableText value={props.value} components={myPortableTextComponents} />
  }