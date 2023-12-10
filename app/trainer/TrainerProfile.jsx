
"use client"
import React from 'react';
import { Image,Descriptions } from 'antd';




const TrainerProfile = ({author}) => {

   

    const items = [{

        key: '1',
        label: 'Name',
        children: `${author?.name}`

    },{

        key: '2',
        label: 'Slug',
        children: `${author?.slug}`

    },{

        key: '3',
        label: 'Expertise',
        children: `${author?.expertise}`
,
    },{

        key: '4',
        label: 'Bio',
        children: `${author?.author_role}`

    }]

   

  return (  <div className='flex flex-col gap-2 justify-center items-center'>
   
  <Image
    width={200}
    alt='data'
    src={author?.image}
  />
<Descriptions title={author?.name} items={items} />

   </div>
) };
export default TrainerProfile;