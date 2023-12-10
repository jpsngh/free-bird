"use client"

import React,{useCallback, useState,useEffect} from 'react';
import axios from "axios"
import { DatePicker,TimePicker, Space, Button ,Card,message,Collapse} from 'antd';
 import useAllSchedule from '@/hooks/useAllSchedule';


const Scheduler = ({clients,trainer}) => {

    const [messageApi, contextHolder] = message.useMessage();
  

    const [scheduleId,setScheduleId] = useState()

    const [dateString,setDateString] = useState()
    const [timeString,setTimeString] = useState()
    const [timeEndString,setTimeEndString] = useState()
    const [refresh,setRefresh] = useState();

    
    const onChangeDate = (date, dateString) => {

        setDateString(dateString)

      };


      const onChangeTime = (time, timeString) => {
        setTimeString(timeString)

        };

      const onEndChangeTime = (time, timeString) => {
        setTimeEndString(timeString)

        };



    const handleChange = useCallback(async(e)=>
    {
       
      
        try {
              
             
             console.log(e.currentTarget.value)
            const deleteSchedule =    await axios.post('/api/deleteSchedule',{
               
                scheduleId : e.currentTarget.value
                
                
            })
            if(deleteSchedule){
    
                messageApi.open({
                    type: 'success',
                    content: 'Schedule Removed',
                  });
                
                  setRefresh(true);
    
            }}catch(err){
                messageApi.open({
                    type: 'error',
                    content: 'Something went wrong',
                  });
    
              
    
                console.log(err)
            }

   
 
    },[messageApi] )

    const handleSubmit = useCallback(async()=>
    {  
        try {
      
        const setSchedule =    await axios.post('/api/addSchedule',{
           
            scheduleStart : timeString,
            scheduleEnd : timeEndString,
            scheduleDate : dateString,
            author : trainer,
            trainerId : trainer.id,
            
            
        })
        if(setSchedule){

            messageApi.open({
                type: 'success',
                content: 'Schedule Added',
              });
            
              setRefresh(true);

        }}catch(err){
            messageApi.open({
                type: 'error',
                content: 'Something went wrong',
              });

             

            console.log(err)
        }
 
    } ,[trainer,messageApi, timeString, timeEndString, dateString,])

    useEffect(()=>{
        if(refresh){
            setTimeout(()=>{
                window.location.reload();
                setRefresh(false)
           
            },2000)
        }

    },[refresh])

   
 
    const items = [{
      key :"1",
      label:"Add a Schedule",
      children: <div>  <Space direction="vertical" >
  
  
       Select a Date:
       <DatePicker onChange={onChangeDate} />
   
        Start Time:
       <TimePicker onChange={onChangeTime} />
   
       End Time :
       <TimePicker onChange={onEndChangeTime} />
   
  <Button onClick={handleSubmit}> Submit </Button> </Space> </div>
    
    
    
    
    }]
    


        return (
            <div className="overlay-y-scroll  md:block">
                {contextHolder}
 
    
   <Collapse items={items} ></Collapse>
  

  <hr className= "w-5 h-2" /> 
  <h2 className="text-xl text-blue-800"> Schedule's</h2> 
  <div className=" grid md:grid-cols-3 lg:grid-cols-4 gap-2 justify-center items-center">
   
 

     {trainer.schedule.map((scheduler)=>{
  return (
    
   <div key={scheduler.id} className='  md:hover:shadow-xl hover:z-index-2 '>  <Card 
  title={scheduler.scheduleDate}
  bordered={true}
  style={{
    width: 200,
  }}
>
  <p> Starting at : {scheduler.scheduleStart}</p>
  <p> Ending at :{scheduler.scheduleEnd}</p>
  <p> Assigned Client: {scheduler?.user?.firstName}</p>
  <Button onClick={(e)=>  handleChange(e)
} value={scheduler.id} className="mt-2" danger> Delete </Button>
</Card> </div>)

     })}

     </div>



    
 
  
  </div>)
};
export default Scheduler;