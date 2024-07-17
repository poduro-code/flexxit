import useSWR from 'swr';
import fecher from '@/lib/fetcher'

const useBillBoard = () => {
    const {data,error, isLoading} = useSWR ('/api/random', fecher, {
     revalidateIfStale: false,
     revalidateOnFocus: false,
     revalidateOnReconnect:false,    
    })

    return {
        data,
        error,
        isLoading
    }
}

export default useBillBoard;