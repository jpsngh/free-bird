
import Testimonials from "./Testimonials"
import {getReviews} from "@/sanity/lib/utils"

const Reviews = async ()=>{

    const data = await getReviews();
    return (
   <Testimonials testData={data} />
    )
}

export default Reviews