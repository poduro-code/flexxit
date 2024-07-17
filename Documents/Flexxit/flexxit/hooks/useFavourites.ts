import useSWR from "swr";
import fecher from "@/lib/fetcher";

const useFavourites = () => {
    const { data, error, isLoading, mutate} = useSWR ('/api/favourites', fecher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return {
        data,
        error,
        isLoading,
        mutate
    }
};

export default useFavourites;
