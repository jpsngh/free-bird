export const dynamic = 'force-dynamic'
import { getSinglePost } from '@/sanity/lib/utils';

import Blog from './Blog';
const page = async({params}) => {
 
  const { slug } = params;
  const data = await  getSinglePost(slug)

  
  console.log(slug)
  console.log("data: " + data)
   
  const {title,author_name,publishedAt,_id,author_slug,body,author_role,} = data;
   return (
    <div>
           
    


      <Blog   title={title} author_name={author_name} publishedAt={publishedAt}  author_image={data.author_image} body={body} author_role={author_role} _id={_id}  image={data.image} rich_body={data.rich_body}    ></Blog>
    </div>
  )
}

export default page
