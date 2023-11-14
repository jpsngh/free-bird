

import { getAuthors } from "@/sanity/lib/utils"


const useAuthors= async()=>{
    const data = await getAuthors();
    return data
}
export default useAuthors