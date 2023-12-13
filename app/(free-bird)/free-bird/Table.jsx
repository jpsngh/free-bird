"use client"
import React,{useCallback} from 'react'
  import { useRouter } from 'next/navigation';
  import { Space, Table, Tag,Avatar,Column,ColumnGroup } from 'antd';
import useEditModal from '@/hooks/useLoginModal';
import Link  from 'next/link'
const TableData = ({userData:data}) => {
  

console.log(data)

if(data?.length <1) {
    return <div>Please refine your search</div>
}

const list = data?.map((item)=>{
  return {
    key: item.id,
    image: item.imageUrl,
    name: `${item?.firstName}  ${item?.lastName}` ,
    gender: item?.gender,
    email: item?.email,
    tags: [item?.goal],
    action: item?.id
  }
})


const columns = [
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: (text) => <Avatar src={text}></Avatar>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    render:(gender)=><p className="hidden md:block" >{gender}</p>
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render:(gender)=><p className="hidden md:block" >{gender}</p>
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags?.map((tag) => {
          let color = tag?.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag?.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Link href={{
          pathname:`/qrchecker/${record.id}`,
          query :{
            userId : record.id
          }
        }}
     
          className="inline-block rounded bg-orange-500 px-4 py-2 text-xs font-medium text-white hover:bg-blue-800"
        >
          View
        </Link>
       
      </Space>
    ),
  },
];

  return (
    <div className="flex flex-col flex-wrap justify-center items-center overflow-x-auto gap-3 ">

         <h2 className=" text-blue-800"> {data?.length} Users found </h2>
      
      <Table className=' text-sm text-blue-800 '   dataSource={list} >
        
        
      <Column title="Image" dataIndex="image" key="image"   render={(text) => <Avatar src={text}></Avatar>} />
      <Column title=" Name" dataIndex="name" key="name" />


    <Column className=" hidden md:block " title="Gender" dataIndex="gender" key="gender" />
   <span> </span>

   <Column className=" hidden md:block" title="Email" dataIndex="email" key="email" />
 <span> </span>
    <Column className=" hidden md:flex"
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    
   
    <Column
      title="Action"
      dataIndex="action"
      key="action"
      render={(record) => (
       
        <Space size="middle">
        <Link href={{
          pathname:`/qrchecker/${record}`,
          query :{
            userId : record
          }
        }}
     
          className="inline-block rounded bg-orange-500 px-4 py-2 text-xs font-medium text-white hover:bg-blue-800"
        >
          View
        </Link>
       
      </Space>

       
       
        )}
        />
               
        </Table>;

    </div>
  )
}

export default TableData
