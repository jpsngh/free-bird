import React, { useState ,useCallback} from 'react';
import { Avatar, Col, Divider, Drawer, Button, Input, Row,  Select,message } from 'antd';
import axios from "axios"
const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);
const { Option } = Select;
const { TextArea} = Input;
const SideDrawer = ({open,setOpen,data,trainer}) => {
  const [messageApi, contextHolder] = message.useMessage();

  const [trainerNotes,setMessage] = useState(data?.trainerNote)
  const [scheduling,setScheduling] = useState(data?.schedule?.id)
  const [diet,setDiet] = useState(data?.diet?.id)


  const handleSubmit=useCallback(async()=>{
    try
    {
    
       const success =    await axios.post('/api/updatebytrainer',{
 
         userId : data.id,
         scheduleId:scheduling,
         dietId:diet,
         trainerNote:trainerNotes
           
 
 
 
           
       })
       
   if(success) {
       messageApi.open({
         type: 'success',
         content: 'Successfully Updated',
         });
 
       
 
      console.log("success")
    
       };
   
     
   
 
        
 
    }catch(err){
       messageApi.open({
         type: 'error',
         content: 'This is an error message',
         });
         console.log(err)
 
       
 
    }
 

  },[data,scheduling,diet,messageApi,trainerNotes])
 
  const onClose = () => {
    setOpen(false)
   };
console.log(trainer.schedule)
  return (
    <>
    {contextHolder}
     
      <Drawer width={640} placement="right" closable={true} onClose={onClose} open={open}>
        <p
          className="site-description-item-profile-p text-2xl "
          style={{
            marginBottom: 24,
            textSize:20
          }}
        >
          Client Profile
        </p>
        <div className=" rounded-3xl shadow p-2 m-2 ">  
        <Avatar src={data.imageUrl} alt='profile'  size={100}
        ></Avatar>
        </div>
    
        <p className="site-description-item-profile-p text-blue-800 text-xl">Personal</p>
        <div className=" rounded-3xl shadow p-5 m-2 "> 
        <Row>
          <Col span={12}>
            <DescriptionItem title="Full Name" content= {`${data?.firstName}  ${data?.lastName}`} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Email" content={data?.email} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Phone" content={data?.phone} />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Address" content={data?.address  || "Not Updated"} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Home Club" content="Mississauga" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Birthday" content={data?.birthday || "Not updated"} />
          </Col>
        
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Goal"
              content={data?.goal}
            />
          </Col>
        </Row>
        </div>
        <Divider />
        <p className="site-description-item-profile-p text-blue-800 text-xl">Body Management</p>
        <div className=" rounded-3xl shadow p-5 m-2 "> 
        <Row>
          <Col span={12}>
            <DescriptionItem title="Weight" content={`${data?.weight}kg `} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Height" content={`${data?.height}cms `} />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="BMR" content={data?.bmr} />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
          </Col>
        </Row>
        <Row>
  
           
            <div className="m-1 p-2" >
            <DescriptionItem
              title="Assign Session"
   
            />
             <select className="m-1 p-2" value={scheduling} onChange={(e)=>setScheduling((e.target).value)}   placeholder="Please select an Schedule">
              {trainer.schedule.map((scheduler)=>{

         return  <option key={scheduler.id} value={scheduler.id}> <div>  {scheduler.scheduleDate} : {scheduler.scheduleStart} to {scheduler.scheduleEnd}  </div> </option>

              })}
                 
                  
                </select>
                </div>
         
        </Row>

        <div className="m-1 p-2" >
            <DescriptionItem
              title="Assign Diet"
   
            />
             <select  className="m-1 p-2" value={diet} onChange={(e)=>setDiet((e.target).value)} placeholder="Please select an Schedule">
              {trainer.diet.map((workout)=>{

         return  <option key={workout.id} value={workout.id}> <div>  {workout.dietTitle}   </div> </option>

              })}
                 
                  
                </select>
                </div>
       
        <Divider />
        <p className="site-description-item-profile-p  text-blue-800 text-xl"> Submission </p>
        <Row className="m-2 p-2">
  
            <DescriptionItem title="Trainer Notes" />
            <TextArea
        value={trainerNotes}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Controlled autosize"
        autoSize={{
          minRows: 3,
          maxRows: 5,
        }}
      />
             
       
          
        </Row>
        <Row>
          <Col span={24}>
           <Button danger onClick={handleSubmit} > Submit </Button>
          </Col>
        </Row>
        </div>
      </Drawer>
    </>
  );
};
export default SideDrawer;
