import React,{useState} from 'react'
 import Link from "next/link"
 import { Radio,Button,Card, Statistic,List,Avatar,Collapse } from 'antd'; 
 import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

const InfoCards = ({user,trainerData}) => {
   
  const [radio,setRadio] = useState(7)




  const onRadioChange = ({ target: { value } }) => {
    console.log('radio1 checked', value);
    setRadio(value);
  };
  

  const adminUsers = user?.filter((use)=>{

    if(use.isAdmin){
      return true
    }

  })



  const resultProductData = user?.filter( (use)=> {
    var date = new Date(use.joinedAt)
    return (date >= ( Date.now() - radio * 24 * 60 * 60 * 1000) && date <= Date.now());
  });



 const items=[
    {
      key: '1',
      label: 'New Users',
      children: <List
      itemLayout="horizontal"
      dataSource={resultProductData}
      renderItem={(item, index) => (
        <List.Item
     
        >
          <List.Item.Meta
            avatar={<Avatar src={item.imageUrl} />}
            title={<Link href={{
              pathname:`/qrchecker/${item.id}`,
              query :{
                userId : item.id
              }
            }}
         
  
            >
              {item.firstName}
            </Link>}
            description={item.email}
          
          />
               { }
        </List.Item>
      )}
    
    />,
    },
    
    {
      key: '2',
      label: 'Administrators',
      children: <List
      itemLayout="horizontal"
      dataSource={adminUsers}
      renderItem={(item, index) => (
        <List.Item
     
        >
          <List.Item.Meta
            avatar={<Avatar src={item.imageUrl} />}
            title={<Link href={{
              pathname:`/qrchecker/${item.id}`,
              query :{
                userId : item.id
              }
            }}
         
  
            >
              {item.firstName}
            </Link>}
            description={item.email}
          
          />
               { }
        </List.Item>
      )}
    
    />,
    }
  ]
 

  console.log("r",resultProductData)
  const data = user?.map((dat)=>{
    return {

      title: `${dat?.firstName} ${dat?.lastName}`,
      image : dat?.imageUrl,
      email : dat?.email,
      action : dat?.id

    }
  }) 

  

  const paidUsers = user?.filter((client)=>{

    if(client.paid===true){
      return true
    }

  })

  const newPaidUsers = resultProductData?.filter((data)=>{
    if(data.paid){
      return true
    }
  })

  const options = [{

    label:"Week",
    value:7

  },{
    label : "Month",
    value:30
  }]

  
  return (
   <div  className=" w-full flex flex-col gap-3 justify-center p-3 m-2 items-center"> 

   <div className="flex flex-row gap-5 justify-between p-2  items-center" >
   <Statistic title="Total Users" value={user?.length}  />
   <Statistic title="Total Trainers" value={trainerData?.length}  />
   <Statistic title="Paid Users" value={paidUsers?.length}  />
   </ div>

   <div className="flex flex-row gap-5 justify-center p-2  items-center">
    <div> 
   <Radio.Group options={options} onChange={onRadioChange} value={radio} optionType="button" />
      <br />
   <Card bordered={false}>
        <Statistic
          title={`${resultProductData?.length} New Users since last ${radio===7?"Week":"Month"} `}
          value={(resultProductData?.length / user?.length) * 100 }
          precision={2}
          valueStyle={{ color: '#3f8600' }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Card>
    </div>

   
    
      <Card bordered={false}>
        <Statistic
          title= { ` ${newPaidUsers?.length} paid users since last ${radio===7?"Week":"Month"}  `}
          value={ (newPaidUsers?.length / user?.length) * 100 }
          precision={2}
          valueStyle={(newPaidUsers?.length / user?.length) * 100 < 50 ?{ color: '#cf1322' }:{ color: '#3f8600' }}
 
          suffix="%"
        />
      </Card>

     

   </div>


   <div className=" w-full flex flex-row justify-center gap-2 "> 
 <Collapse ghost
 className="w-full"
      items={items}
    />
   
  </div>


   </div>
  )
}

export default InfoCards
