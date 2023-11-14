import React from 'react'

const BmrBanner = ({results}) => {
    const overweight = (<div>
        <h2> Overweight </h2>
        <img src="https://d1l9wtg77iuzz5.cloudfront.net/assets/3713/124505/original_About-Morbid-Obesity.jpg?1443742622" alt="overweight" ></img>
    </div>)
     const underweight = (<div>
        <h2> UnderWeight </h2>
        <img src="https://d1l9wtg77iuzz5.cloudfront.net/assets/3713/124505/original_About-Morbid-Obesity.jpg?1443742622" alt="overweight" ></img>
    </div>)

     const Normal = (
        <div>
        <h2> UnderWeight </h2>
        <img src="https://d1l9wtg77iuzz5.cloudfront.net/assets/3713/124505/original_About-Morbid-Obesity.jpg?1443742622" alt="overweight" ></img>
    </div>
     ) 

     
  return (
    <div>
   {overweight}
    </div>
  )
}

export default BmrBanner
