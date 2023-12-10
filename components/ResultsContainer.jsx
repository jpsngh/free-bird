// ResultsContainer.js
"use client"


import Image from 'next/image';
import Link from 'next/link';
import React,{useState} from 'react';
import bmrServer from '@/app/bmr/bmrServer';

const ResultsContainer = ({ data,trainer }) => {
  const [bmr,setBmr] = useState();

  const fatLoss = trainer.filter((train)=>train.expertise === "fat-loss")
  console.log(fatLoss)

  if (!data) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Results</h2>
        <p>No data to display. Please calculate BMR.</p>
       
      </div>
    );
  }

  // Based on the BMR data, determine the body type and display the corresponding content
  const bodyType = determineBodyType(data);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-fit">
      <h2 className="text-2xl font-semibold mb-4">Results</h2>
      <h3 className="text-xl font-semibold mb-2">{bodyType.title}</h3>

 

      {/* Display additional information or details based on the body type */}
     {
      bodyType.value>2000? 
      

  
   
     
   
<div className='p-2 flex flex-col gap-2'> 
   

<p>
       Great! Looks like you already doing great 

      </p>
      <hr></hr>
<p> Our trainers can help you enhance your goal </p>

      <div  className='relative w-fit h-full gap-2 flex flex-row   p-5 '>



        {fatLoss.map((trainer)=>{
         return  (
          <Link key={trainer.name} href={`/author/${trainer.slug}`}> 
         <div className='w-fit h-full flex  gap-2 ' >
          <div className='flex flex-col gap-2 border shadow-md rounded p-2'>
          <div> 

          <Image src={trainer.image} height={100} width={100} alt="img" className='w-5 h-5'></Image>
         <h2>{trainer.name}</h2>
          </div>
                   

         <p className='bg-gray-300 text-black p-1 m-2 rounded '> {trainer.expertise}</p>
         </div> </div> </Link>)
        })}

 </div>  </div> : <div> {trainer.splice(3).map((train)=>{

         return   <div key={trainer.name}>
         <h2>{trainer.name}</h2>
         <Image src={trainer.image} alt="img"></Image>
         <p> {trainer.expertise}</p>
         </div>
         })}

         </div>
        
     }
     
    </div>
       
  );
};

// Function to determine body type based on BMR data
const determineBodyType =  (data) => {
  // Perform logic to determine body type based on BMR data
  // For simplicity, I'll use a placeholder logic. You may replace it with your actual logic.

  const bmrValue = calculateBMR(data); // You need to implement this function

  if (bmrValue > 2500) {
    return {
      title: `Athletic Body   bmr : ${parseInt(bmrValue)}`,
      value : bmrValue
    
    };
  } else if (bmrValue > 2000) {
    return {
      title: `Normal Body  bmr : ${parseInt(bmrValue)}`,
      value : bmrValue,

    };
  } else {
    return {
      title: `Overweight Body  bmr : ${parseInt(bmrValue)}`,
      bmr : bmrValue

    };
  }
};

// Function to calculate BMR based on input data
const calculateBMR = (data) => {
  // Implement your BMR calculation logic here based on the provided data
  // For simplicity, you can use a placeholder calculation.

  // Placeholder calculation
  const { age, weight, height, gender, activityLevel } = data;
  const baseBMR = gender === 'male' ? 88.362 : 447.593;
  const heightFactor = 3.2 * parseInt(height, 10);
  const weightFactor = 13.397 * parseInt(weight, 10);
  const ageFactor = 5.677 * parseInt(age, 10);

  // Placeholder activity level adjustment
  let activityMultiplier = 1.2;
  if (activityLevel === 'moderate') {
    activityMultiplier = 1.55;
  } else if (activityLevel === 'active') {
    activityMultiplier = 1.9;
  }

  const bmrValue = (baseBMR + weightFactor + heightFactor - ageFactor) * activityMultiplier;
 
  return bmrValue;
};

export default ResultsContainer;
