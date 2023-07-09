import React, { useEffect, useState } from 'react';
import './Movies.css'
import Movie from '../Movie/Movie';
import bappy from '../../images/bappy.ico'
import Cart from '../Cart/Cart';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('movie.json')
            .then(res => res.json())
            .then(data => setMovies(data));
    }, [])
    return (
        <div className='movies-container'>

            <div >
                <h4 className='movie-select'>Select Today's Movie</h4>
                <div className='movie-container'>
                    {
                        movies.map(movie => <Movie movie={movie} key={movie.id}></Movie>)
                    }
                </div>
            </div>
            <div className='cart-container'>
                <div className='name-container'>
                    <img src={bappy} alt="" />
                    <h4>Bappy Ahashan</h4>
                </div>
                <div>
                    {
                        <Cart></Cart>
                    }
                </div>
            </div>
        </div>
    );
};

export default Movies;