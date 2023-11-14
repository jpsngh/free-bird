import TeamList from "@/components/TeamList"
import { getAuthors } from "@/sanity/lib/utils"


const page = async() => {

  const authors = await getAuthors();

  return (
    <div>
  
  <TeamList authors={authors}> </TeamList>
    </div>
  )
}

export default page
