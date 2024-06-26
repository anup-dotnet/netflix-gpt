import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addNowPlayingMovies} from '../utils/moviesSlice'
import {APIOptions} from '../utils/constants'


const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

useEffect(() =>{
    getNowPlayingMovies();
  },[])

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', APIOptions);
const json = await data.json();
dispatch(addNowPlayingMovies(json.results));

}
}

export default useNowPlayingMovies;
