import { useDispatch } from "react-redux";
import { APIOptions } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) =>{

    const dispatch = useDispatch();

    
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      APIOptions
    );
    const json = await data.json();
    const filterData = json.results.filter((t) => t.type === "Trailer");
    const trailer = filterData.length > 0 ? filterData[0] : json.results[0];
dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

}

export default useMovieTrailer