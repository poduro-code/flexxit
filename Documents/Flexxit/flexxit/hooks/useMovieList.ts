import useSWR from "swr";
import fecher from "@/lib/fetcher";

const useMovieList = () => {
    const {data, error, isLoading } = useSWR('/api/movies', fecher,  {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return{
        data,
        error,
        isLoading
    }
};

export default useMovieList;