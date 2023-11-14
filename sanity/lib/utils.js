import { client } from "@/sanity.cli";
import { groq } from "next-sanity"


/// blogs functions
export const getPosts = async ()=>{
    const query =  groq`
   *[_type=='post'][]{
  _id,
      title,
      "slug":slug.current,
      "author_slug":author->slug.current,
    "author_image":author->image.asset->url,
  "author_name":author->name,
  "author_role": author->bio[0].children[0].text,

  "image":mainImage.asset->url,
      publishedAt,
  categories[0],

     "body": body[0].children[0].text,
    
    } | order(_createdAt desc)
  `;
  const posts = await client.fetch(query,{
    next:{
      revalidate:0 
    }

  })
  console.log(posts);
  return posts
}

/// hero function 
export const getHero =async()=>{

    const query =  groq`
    *[_type=='hero'][]{
      "headline": headline[0].children[0].text,
      "content":content[0].children[0].text,
      "image":image.asset->url,
      url,
      url2
     
     
    
    } | order(_createdAt desc)
  
  `;
  
  const hero = await client.fetch(query,{
    next:{
      revalidate:0 
    }
 
  })
  console.log(hero)
  return hero
}


export const getSinglePost = async (slug)=>{
  const query =  groq`*[_type=='post' && slug.current==$slug][0]{
_id,
    title,
    "slug":slug.current,
    "author_slug":author->slug.current,
  "author_image":author->image.asset->url,
"author_name":author->name,
"author_role": author->bio[0].children[0].text,

"image":mainImage.asset->url,
    publishedAt,
categories[0],

   "body": body[0].children[0].text,
  
  }`;
const posts = await client.fetch(query,{
 cache : "no-cache",
  slug:slug
});
console.log(posts);
return posts
}

export const getAuthors = async ()=>{
  const query =  `*[_type=='author' ][]{
 
 
    "slug":slug.current,
"image":image.asset->url,
name,
"author_role": bio[0].children[0].text,
expertise,

 
  } | order(_createdAt asc)`;
const authors = await client.fetch(query,{
 next : {
  revalidate : 40
 }
  
});
console.log(authors);
return authors
}


export const getAuthor = async (slug)=>{
  const query = `*[_type=='author' && slug.current == $slug][0]{
 
 _id,
    "slug":slug.current,
"image":image.asset->url,
name,
"author_role": bio[0].children[0].text,
expertise,

 
  }`;
const author = await client.fetch(query,{
 next : {
  revalidate : 40
 },
 slug:slug
  
});
console.log(author);
return author
}

