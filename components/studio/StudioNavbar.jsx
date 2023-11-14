
import { Link } from 'next/link';
import { ArrowUpLeftSquareIcon } from 'lucide-react';
const StudioNavbar = (props) => {
  return (
    <div>
        <div className='flex flex-row items-center justify-center p-5'>
            <Link href="/" className="text-orange-400 flex items-center"> Free Bird Home </Link>
            <ArrowUpLeftSquareIcon className='h-6 w-6 text-blue-800 mr-2'></ArrowUpLeftSquareIcon>
        </div>
        <>
        {props.renderDefault}</>
      
    </div>
  )
}

export default StudioNavbar
