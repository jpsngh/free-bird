import React from 'react'
import TeamProfile from '@/components/TeamProfile'
import { getAuthor } from '@/sanity/lib/utils'
const page = async({params}) => {
    const slug = params.slug
  
    const author = await getAuthor(slug);
    
    const {image,name,expertise,author_role,_id} = author
    
   return (
    <div >

    <TeamProfile  image={image} name={name} expertise={expertise} author_role={author_role}></TeamProfile>
    </div>
  )
}

export default page
