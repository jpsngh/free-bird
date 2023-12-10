import useSWR from 'swr'

import fetcher from '@/lib/fetcher'


const useAllTrainers= ()=>{
    const {data,error,caches,isLoading,mutate} = useSWR('/api/allTrainers',fetcher)

    return {
        data,
        error,
        caches,
        isLoading,
        mutate
    }
}
export default useAllTrainers