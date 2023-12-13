"use client"
import React, { useState } from 'react';
import useCurrentUser from '@/hooks/useCurrentUser'
import useAllUser from "@/hooks/useAllUsers"

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  FileAddOutlined
} from '@ant-design/icons';
import { Avatar, Layout, Menu, Button, theme } from 'antd';
import UserDetails from './UserDetails';
import Loading from '@/app/loading';


const { Header, Sider, Content } = Layout;
const AdminDashboard = ({}) => {

    const {data:current,isLoading} =  useCurrentUser()
    const {data:users} = useAllUser("/api/allUsers")

  const [collapsed, setCollapsed] = useState(false);
  const [content, setContent] = useState("1")

  console.log("users",users);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

   
   if(isLoading){
    return <Loading></Loading>
   }

  if(!current?.isAdmin){
    return <div className='flex text-center m-5 p-5 text-blue-800 text-xl'> Not Authorized</div>
  }

  const DateMonth = users?.filter((data)=>{


    if(data?.joinedAt >  Date.now() - (7 * 24 * 60 * 60 * 1000))
    {
   
      return true
    }
   

  })




  const trainerData = users?.filter((data)=>{
    if(data?.isTrainer){
      return true
    }
      
  })
  var resultProductData = users?.filter( (user)=> {
    var date = new Date(user.joinedAt)
    return (date >= ( Date.now() - 10 * 24 * 60 * 60 * 1000) && date <= Date.now());
  });

  console.log("r",resultProductData)
  return (
    <Layout>
      <Sider 
      
      style={{
        overflow: 'auto',
      
       
        left: 0,
       
        bottom: 0,
      }}
      trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        
        <Menu
          theme="dark"
          mode="inline"
          onClick={(selectedKeys)=>setContent(selectedKeys.key)  }
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Infographics',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Users',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Trainers',
            },
            {
              key : '4',
              icon: <FileAddOutlined />,
              label: 'Other',
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 5,
            background: "white",
            display : "flex",
            flexDirection :"row",
            justifyContent : "space-between",
            alignItems:"center",
            marginRight :"10px"
            
          }}
        >

          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,

            }}
          />
         
           
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 580,
            overflow: 'initial',
            background:"white",
          }}
        >

         {content==="2"&&<UserDetails user={users} ></UserDetails>}
         {content==="3"&&<UserDetails user={trainerData} ></UserDetails>}

        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminDashboard;