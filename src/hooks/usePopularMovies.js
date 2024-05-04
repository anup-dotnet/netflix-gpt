import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addPopularMovies} from '../utils/moviesSlice'
import {APIOptions} from '../utils/constants'


const usePopularMovies = () => {

    const dispatch = useDispatch();

useEffect(() =>{
    getPopularMovies();
  },[])

  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', APIOptions);
const json = await data.json();
dispatch(addPopularMovies(json.results));

}
}

export default usePopularMovies;
