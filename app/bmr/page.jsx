import React from 'react'
import BmrLayout from './BmrLayout'

import { getAuthors } from '@/sanity/lib/utils'

const page = async() => {

  const data = await getAuthors()
  return (
    <div>
      <BmrLayout trainer={data}> </BmrLayout>
    </div>
  )
}

export default page

