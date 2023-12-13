"use client"

import React, { useState,useEffect } from 'react';
import { Avatar, List, Space,Tag } from 'antd';
import SideDrawer from "./Drawer"




const ClientList = ({clients,trainer}) => {
  const [open, setOpen] = useState(false);
  const [data,setData] = useState()
  const [refresh, setRefresh] = useState(false);
  const [align, setAlign] = useState('center');

  const showDrawer = (item) => {
    console.log(item)
    setData(item)
    console.log(data)
    setOpen(true);
  };


  useEffect(()=>{
    if(refresh){
        setTimeout(()=>{
            window.location.reload();
            setRefresh(false)
       
        },2000)
    }
  
  },[refresh])

   

  return (
    <>
    {open &&  <SideDrawer trainer={trainer} setRefresh={setRefresh}  open={open} setOpen={setOpen}  data={data} /> }
   
      <Space
        direction="vertical"
        style={{
          marginBottom: '20px',
        }}
        size="middle"
      >
        
      
      </Space>
      <List
        pagination={{
          position:"bottom",
          align:"center",
          pageSize:5
        }}
        dataSource={clients}
        renderItem={(item, index) => (
          <List.Item
          actions={[
            <button onClick={()=>showDrawer(item)} value={item}   key={`a-${item.id}`}>
              View Profile
            </button>,
          ]}
        
          >
            <List.Item.Meta
              avatar={
                <Avatar src={item.imageUrl} />
              }
            
              title={<a >{item.firstName}</a>}
              description={item.email}
            />
            <div className=' hidden md:flex lg:flex flex-row items-center gap-3' > 
            <Tag>  {item.phone} </Tag>
            <Tag> {item.goal} </Tag>
           

          
            </div>
          </List.Item>
        )}
      />
    </>
  );
};
export default ClientList;