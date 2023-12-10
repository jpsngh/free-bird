"use client"
import React,{useCallback} from 'react'
  import { useRouter } from 'next/navigation';

import useEditModal from '@/hooks/useLoginModal';
import Link  from 'next/link'
const Table = ({userData:data}) => {
  const router = useRouter()

  console.log(router)





if(!data){
    return <div>Loading...</div> 
}
if(data.length <1) {
    return <div>Please refine your search</div>
}

  return (
    <div>
      

<div className="overflow-x-auto">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Name
        </th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
         Gender
        </th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Email
        </th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Phone
        </th>
        <th className="px-4 py-2"></th>
      </tr>
    </thead>

{ data.map((userData)=>{ return (
    <tbody  key={userData.id} className="divide-y divide-gray-200">
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          {userData?.firstName} <span></span> {userData?.lastName}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{userData?.gender}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{userData.email}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{userData.phone}</td>
        <td className="whitespace-nowrap px-4 py-2">
          <Link href={{
            pathname:`/qrchecker/${userData.id}`,
            query :{
              userId : userData.id
            }
          }}
       
            className="inline-block rounded bg-orange-500 px-4 py-2 text-xs font-medium text-white hover:bg-blue-800"
          >
            View
          </Link>
        </td>
      </tr>

    </tbody>)})
}
  </table>
</div>
    </div>
  )
}

export default Table
