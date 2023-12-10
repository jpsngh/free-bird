import useSWR from 'swr'

import fetcher from '@/lib/fetcher'


const useAllSchedule= ()=>{
    const {data,error,caches,isLoading,mutate} = useSWR('/api/getSchedule',fetcher)

    return {
        data,
        error,
        caches,
        isLoading,
        mutate
    }
}
export default useAllSchedule