import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import BillBoard from "@/components/BillBoard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import { useEffect, useState } from "react";
import useFavourites from "@/hooks/useFavourites";
import InfoModal from "@/components/InfoModal";
import { useInfoModal } from "@/hooks/useInfoModal"; // Use named import

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: movies = [] } = useMovieList();
  const [clientMovies, setClientMovies] = useState([]);
  const { data: favourites = [] } = useFavourites();
  const { isOpen, closeModal } = useInfoModal(); // Destructure isOpen and closeModal from useInfoModal
  
  useEffect(() => {
    if (movies.length > 0) {
      setClientMovies(movies);
    }
  }, [movies]);

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />      
      <BillBoard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={clientMovies} />
        <MovieList title="My list" data={favourites} />
      </div>
    </>
  );
}
