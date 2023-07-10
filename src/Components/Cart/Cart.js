import React, { useEffect, useState } from 'react';
import './Cart.css';
import { getDataLocalStorage, setDataLocalStorage } from '../../LocalStorageDB/localdb';

const Cart = (props) => {
    // const { picture, time } = props.movie;

    const totalTime = props.cart.reduce((previous, current) => previous + current.time, 0);


    const [breakTime, setBreakTime] = useState(0);
    const eventHandler = time => {
        setBreakTime(time);
        setDataLocalStorage(time);

    }
    useEffect(() => {
        const getTime = getDataLocalStorage();
        setBreakTime(getTime);
    }, [])



    return (
        <div className='movie-cart-container'>
            <h5><b>Add A Break:</b></h5>
            <div className='btn-time-break'>
                <button onClick={() => { eventHandler(20) }}>20Min</button>
                <button onClick={() => { eventHandler(30) }}>30Min</button>
                <button onClick={() => { eventHandler(60) }}>60Min</button>
                <button onClick={() => { eventHandler(90) }}>90Min</button>
                <button onClick={() => { eventHandler(120) }}>120Min</button>
            </div>
            <h5><b>Movie Details Time:</b></h5>
            <div>
                <h6>Total Movie Time: {totalTime}hr </h6>
                <h6>Break Time: {breakTime}Min</h6>
            </div>
            <div className='cart-picture'>
                {/* <img src={picture} alt="" /> */}
            </div>
        </div>
    );
};

export default Cart;