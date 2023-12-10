import useSWR from 'swr'

import fetcher from '@/lib/fetcher'


const useCurrentUser= ()=>{
    const {data,error,caches,isLoading,mutate} = useSWR('/api/users',fetcher)

    return {
        data,
        caches,
        error,
        isLoading,
        mutate
    }
}
export default useCurrentUser