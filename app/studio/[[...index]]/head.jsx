export {NextStudioHead} from 'next-sanity/studio/head'

import { NextStudioHead } from 'next-sanity/studio/head'

export default function CustomStudioHead() {
    return (<>
    Free-Bird
    <NextStudioHead favicons={false}></NextStudioHead>
    <link
    rel ="icon"
    type="image/png"
    sizes= "12x32"

    ></link>
    
    </>)
}
