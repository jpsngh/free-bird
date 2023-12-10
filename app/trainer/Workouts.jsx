
'use client';

import React,{useState,useCallback,useEffect} from 'react'
import axios from "axios"
import { useEdgeStore } from '@/lib/edgestore';
import { Collapse,Button,Progress,message,Image,Card } from 'antd';

const Workouts = ({trainer}) => {

  const {Meta}= Card;
  
  const [messageApi, contextHolder] = message.useMessage();
    const [file, setFile] = React.useState();
    const { edgestore } = useEdgeStore()
    const [dietUrl,setDietUrl] = useState();
    const [progress,setProgress] = useState();
    const [dietTitle,setDietTitle] = useState();
    const [refresh,setRefresh]= useState(false)
 
    useEffect(()=>{
      if(refresh){
          setTimeout(()=>{
              window.location.reload();
              setRefresh(false)
         
          },2000)
      }

  },[refresh])
  console.log(trainer)
     
    const onChange = (key) => {
      console.log(key);
    };


     const handleDelete = useCallback(async(diet)=>{
      try {
         
        const success =    await axios.post('/api/deleteDiet',{

          dietId : diet.id,
         
         
            
        })
        
    if(success) {
        messageApi.open({
          type: 'success',
          content: 'Deleted Successfully',
          });
        
         const res =  await edgestore.publicFiles.delete({
            url: diet.dietUrl,
          });
          if(res) {
            console.log(res)
          }
           

          setRefresh(true)
  
       console.log("success")
     
        };
    

      }
      catch(err){
        messageApi.open({
          type: 'error',
          content: 'This is an error message',
          });
          console.log(err)
  

      }
     },[messageApi, edgestore.publicFiles])
     


    const handleSubmit = useCallback(async()=>{

    
   
      try
   {
   
      const success =    await axios.post('/api/addDiet',{

        trainerId : trainer.id,
        dietTitle,
        dietUrl
          



          
      })
      
  if(success) {
      messageApi.open({
        type: 'success',
        content: 'This is a success message',
        });

        setDietTitle("");
        setDietUrl("");
        setFile();
        setProgress();
        setRefresh(true)

     console.log("success")
   
      };
  
    
  

       

   }catch(err){
      messageApi.open({
        type: 'error',
        content: 'This is an error message',
        });
        console.log(err)

      

   }

  


  },[trainer.id, dietTitle, dietUrl,messageApi] )

        

    const items = [{
        key :"1",
        label:"Add a workout",
        children: <div>
           <div className=" flex flex-col justify-center items-start gap-3">
           <div>
      <label> Workout Name : </label>
      <input className=" border p-2"
      placeholder="Name of Workout"
        type="text"
        value={dietTitle}
        onChange={(e) => {
         setDietTitle(e.target.value)
        }}
      />
    </div>
        
      <input
        type="file"

        
        accept="image/*" 
        onChange={(e) => {
          setFile(e.target.files?.[0]);
        }}
      />
        
      <Progress percent={progress} size="small" />
      <Button className={`bg-orange-400 text-white  `}
      
        onClick={async () => {
          if (file) {
            const res = await edgestore.publicFiles.upload({
              file,
              onProgressChange: (progress) => {
                // you can use this to show a progress bar
                setProgress(progress)
              },
            });
            // you can run some server action or api here
            // to add the necessary data to your database
            console.log(res.url);
            setDietUrl(res.url)
                        

          }
        }}
      >
        Upload
      </Button>
     
    </div>

<div className="my-2">
    { dietTitle && dietUrl ?
    <Button onClick={handleSubmit}  > Submit </Button>
    :""
    }
</div>

        </div>
    }]
  return (
    <div className="flex flex-col gap-3 justify-center">
      {contextHolder}
    
    <div className="text-xl"> Add Workouts </div>
    
    <div>
        <Collapse items={items} defaultActiveKey={['1']} onChange={onChange}></Collapse>
    </div>

      <div> <h2 className="text-xl "> Added Workouts  </h2> </div>
       
       <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5"> 
   
       {trainer?.diet?.map((workout)=>{
        return   <Card ClassName="m-2 p-2"  key={workout.id}
        hoverable
        style={{ width: 200,
       }}
        cover={<Image alt="example" src={workout.dietUrl} />}
      >
        <div className="flex flex-col gap-2"> 
        <Meta title={workout.dietTitle} description={workout.dietUrl} />
        <Button onClick={()=>handleDelete(workout)}  danger> Delete </Button>
        </div>
      </Card>
    
       })}

       </div>


    </div>
  )
}

export default Workouts