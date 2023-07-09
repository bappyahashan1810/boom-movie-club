import React from 'react';
import './Movie.css';
const Movie = (props) => {
    const { picture, name, about, gender, time } = props.movie;
    return (
        <div className='container'>
            <div className='movie-containers'>
                <img src={picture} alt="" />
                <h5>{name}</h5>
                <p>{about.slice(0, 100)}</p>
                <p><small>Age: {gender}</small></p>
                <p><strong>Time Required: {time}hrs</strong></p>

            </div>
            <button className='btn-movie'><strong>Add To List</strong></button>

        </div>
    );
};

export default Movie;