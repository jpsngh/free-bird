import useSWR from 'swr'

import fetcher from '@/lib/fetcher'


const useSearchUser= (headers)=>{
    const {data,error,caches,isLoading,mutate} = useSWR(['/api/searchuser',headers],fetcher)

    return {
        data,
        error,
        caches,
        isLoading,
        mutate
    }
}
export default useSearchUser