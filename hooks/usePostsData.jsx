import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

import { groq } from "next-sanity"

import { client } from "@/sanity.cli"
async function getData( ) {
    const query =  groq`
    *[_type=='post'][]{
      title,
      author->,
     "body": body[0].children[0].text
    
    } | order(_createdAt desc)
  
  `;
  const posts = await client.fetch(query)
  console.log(posts);
  return posts
  
  }

const usePostsData= ()=>{
    const {data,error,isLoading,mutate} = useSWR('/api/blog',getData)

    return {
        data,
        error,
        isLoading,
        mutate
    }
}
export default usePostsData