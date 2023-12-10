"use client"

import React,{useState} from 'react'

import BMRCalculator from '../../components/BmrCalculator'
import ResultsContainer from '../../components/ResultsContainer'
import Layout from '../(blog)/blog/Layout';
  import bmrServer from './bmrServer';

const BmrLayout = ({trainer}) => {
  console.log(trainer)
  const [bmrData, setBMRData] = useState(null);

  const handleBMRSubmit =  (data) => {
    setBMRData(data);
   
  };

  return (
    <div className='grid md:grid-cols-2 h-full  justify-center p-3 m-3 items-center gap-5 ' >

      <div className='max-w-xl m-2 p-2'> 
       <BMRCalculator onSubmit={handleBMRSubmit} ></BMRCalculator>
       
        </div>

        <div className='container m-2 max-w-2xl  mx-3 p-2  '>
            <div>
       
        <ResultsContainer data={bmrData} trainer={trainer}> </ResultsContainer>
            </div>
        </div>
        
      


    </div>
  )
}

export default BmrLayout
