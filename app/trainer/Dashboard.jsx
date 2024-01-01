"use client"
import React, { useState } from 'react';
import ClientList from './ClientList';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  FileAddOutlined
} from '@ant-design/icons';
import { Avatar, Layout, Menu, Button, theme } from 'antd';
import TrainerProfile from './TrainerProfile';
import Scheduler from './Scheduler'
import Workouts from './Workouts';


const { Header, Sider, Content } = Layout;
const Dashboard = ({trainer,author}) => {

  const [collapsed, setCollapsed] = useState(true);
  const [content, setContent] = useState("1")

  const {
    token: { colorBgContainer },
  } = theme.useToken();
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
              label: 'Profile',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Users',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Schedule',
            },
            {
              key : '4',
              icon: <FileAddOutlined />,
              label: 'Workouts',
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
          <div className="flex flex-row gap-2 m-2 justify-center items-center mr-3">
             <Avatar src={author?.image} width={10} height={10} > </Avatar>
           <h2> {trainer.trainerName}</h2>
            </div>
           
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
          {content==="1"&&<TrainerProfile author={author} ></TrainerProfile>}
         {content==="2"&&<ClientList clients={trainer.assignedClient} trainer={trainer} ></ClientList>}
         {content==="3"&&<Scheduler clients={trainer.assignedClient} trainer={trainer} ></Scheduler>}
         {content==="4"&&<Workouts  trainer={trainer} ></Workouts>}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;