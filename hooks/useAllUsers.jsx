import useSWR from 'swr'

import fetcher from '@/lib/fetcher'


const useAllUser= (url)=>{
    const {data,error,caches,isLoading,mutate} = useSWR(url?url:'/api/allUsers',fetcher)

    return {
        data,
        error,
        caches,
        isLoading,
        mutate
    }
}
export default useAllUser