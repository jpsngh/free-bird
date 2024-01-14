import useSWR from 'swr'

import fetcher from '@/lib/fetcher'


const useAllTrainers= ()=>{
    const {data,error,isLoading,mutate} = useSWR('/api/allTrainers',fetcher)

    return {
        data,
        error,
        isLoading,
        mutate
    }
}
export default useAllTrainers