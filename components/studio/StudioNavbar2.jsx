
import { Link } from 'next/link';
import { ArrowUpLeftSquareIcon } from 'lucide-react';
const StudioNavbar2 = (props) => {
   
  return (
    <div>
        <div className='flex flex-row items-center justify-center p-5'>
            <Link href="/" className="text-orange-400 flex items-center"> Free Bird Home </Link>
            <ArrowUpLeftSquareIcon className='h-6 w-6 text-blue-800 mr-2'></ArrowUpLeftSquareIcon>
       
        <>
        {props.renderDefault(props)}
        </>
        </div>
    </div>
  )
}

export default StudioNavbar2
