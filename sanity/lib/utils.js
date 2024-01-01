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
     "rich_body": body
    
    } | order(_createdAt desc)
  `;
  const posts = await client.fetch(query,{
    next:{
      revalidate:0 
    }

  })

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
      url2,
      url3,
      url4,
      btn1,
      btn2,
      btn3,
      btn4
     
     
    
    } | order(_createdAt desc)
  
  `;
  
  const hero = await client.fetch(query,{
    next:{
      revalidate:0 
    }
 
  })

  return hero
}


export const getWork =async()=>{

  const query =  groq`
  *[_type=='work'][]{
    "headline": headline[0].children[0].text,
    "content":content[0].children[0].text,
    "image":image.asset->url,
    url,
    url2,
  
   
      url3,
      url4,
      btn1,
      btn2,
      btn3,
      btn4
   
   
  
  } | order(_createdAt desc)

`;

const work = await client.fetch(query,{
  next:{
    revalidate:0 
  }

})

return work
}

// single post

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
   "rich_body": body
  
  }`;
const posts = await client.fetch(query,{
 cache : "no-cache",
  slug:slug
});

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

return author
}

// career 
export const getCareers = async ()=>{
  const query =  groq`
 *[_type=='careers'][]{
_id,
    title,
    "slug":slug.current,



"image":mainImage.asset->url,
    publishedAt,
categories[0],

   "body": body[0].children[0].text,
   "rich_body": body
  
  } | order(_createdAt desc)
`;
const careers = await client.fetch(query,{
  next:{
    revalidate:0 
  }

})

return careers
}

// single career

export const getSingleCareer = async (slug)=>{
  const query =  groq`*[_type=='careers' && slug.current==$slug][0]{
_id,
    title,
    "slug":slug.current,


"image":mainImage.asset->url,
    publishedAt,
categories[0],

   "body": body[0].children[0].text,
   "rich_body": body
  
  }`;
const careers = await client.fetch(query,{
 cache : "no-cache",
  slug:slug
});

return careers
}

// get cta
export const getCta = async (slug)=>{
  const query =  groq`*[_type=='cta' && slug.current==$slug][0]{
_id,
    title,
    "slug":slug.current,


"image":image.asset->url,
    publishedAt,
categories[0],

  paragraph,
  buttonText,
  
  }`;
const cta = await client.fetch(query,{
 cache : "no-cache",
  slug:slug
});

return cta
}
//
export const getBanner = async ()=>{
  const query =  groq`*[_type=='banner'][]{
_id,
    title,
    title2,
    "slug":slug.current,
      isActive,
    url,
urlTitle,

 
  }`;
const banner = await client.fetch(query);

return banner
}

// get Transformations

export const getTransformations = async ()=>{
  const query =  groq`
 *[_type=='transformation'][]{
_id,
    name,
    title,
    "slug":slug.current,


"beforeImage":beforeImage.asset->url,
    publishedAt,
categories[0],
"afterImage":afterImage.asset->url,

   "body": body[0].children[0].text,
   "rich_body": content
  
  } | order(_createdAt desc)
`;
const transformations = await client.fetch(query,{
  next:{
    revalidate:0 
  }

})

return transformations
}

// single Transformation

export const getSingleTransformation = async (slug)=>{
  const query =  groq`*[_type=='transformation' && slug.current==$slug][0]{
_id,
    name,
    title,
    "slug":slug.current,


"beforeImage":beforeImage.asset->url,
    publishedAt,
categories[0],
"afterImage":afterImage.asset->url,

   "body": body[0].children[0].text,
   "rich_body": body
  
  }`;
const transformation = await client.fetch(query,{
 cache : "no-cache",
  slug:slug
});

return transformation
}

export const getLocations = async ()=>{
  const query =  groq`
 *[_type=='location'][]{
_id,
    headline,
    "slug":slug.current,
   
"firstImage":image.asset->url,
    publishedAt,
categories[0],
"secondImage":image2.asset->url,
    publishedAt,
categories[0],

   "body": content[0].children[0].text,
   url,
   btn,
   address1,
   address2

  
  } | order(_createdAt desc)
`;
const locations = await client.fetch(query,{
  next:{
    revalidate:0 
  }

})

return locations
}


export const getTrust = async ()=>{
  const query =  groq`
 *[_type=='trust'][]{
_id,
    title,
    "body": content[0].children[0].text,
    leaderName1,
    leaderName2,
    leaderName3,
    leaderName4,
    leaderName5,
    leaderRole1,
    leaderRole2,
    leaderRole3,
    leaderRole4,
    leaderRole5,
   



"firstImage":clientImage1.asset->url,
    publishedAt,
categories[0],
"secondImage":clientimage2.asset->url,
    publishedAt,
categories[0],
"thirdImage":clientimage3.asset->url,
    publishedAt,
categories[0],
"fourthImage":clientimage4.asset->url,
    publishedAt,
categories[0],
"fifthImage":clientimage5.asset->url,
    publishedAt,
categories[0],

  
  } | order(_createdAt desc)
`;
const trust = await client.fetch(query,{
  next:{
    revalidate:0 
  }

})

return trust
}


export const getLeaderShip = async ()=>{
  const query =  groq`
 *[_type=='leadership'][]{
_id,
    title,
    ,
    title2,
    title3,
    title4,
    title5,
   



"firstImage":clientImage1.asset->url,
    publishedAt,
categories[0],
"secondImage":clientimage2.asset->url,
    publishedAt,
categories[0],
"thirdImage":clientimage3.asset->url,
    publishedAt,
categories[0],
"fourthImage":clientimage4.asset->url,
    publishedAt,
categories[0],
"fifthImage":clientimage5.asset->url,
    publishedAt,
categories[0],

  
  } | order(_createdAt desc)
`;
const trust = await client.fetch(query,{
  next:{
    revalidate:0 
  }

})

return trust
}
export const getParallax = async ()=>{
  const query =  groq`
 *[_type=='parallax'][]{
_id,

"firstImage":Image.asset->url,
    publishedAt,
categories[0],
"secondImage":Image2.asset->url,
    publishedAt,
categories[0],
"thirdImage":Image3.asset->url,
    publishedAt,
categories[0],

  
  } | order(_createdAt desc)
`;
const parallax = await client.fetch(query,{
  next:{
    revalidate:0 
  }

})

return parallax
}

export const getReviews = async ()=>{
  const query =  groq`
 *[_type=='reviews'][]{
_id,
    name,
   
"authorImage":authorImage.asset->url,
 


   "review": review[0].children[0].text,
   authorWork

  
  } | order(_createdAt desc)
`;
const reviews = await client.fetch(query,{
  next:{
    revalidate:0 
  }

})

return reviews
}
