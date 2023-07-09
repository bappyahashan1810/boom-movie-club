import React, { useState } from 'react';
import './Cart.css';

const Cart = (props) => {
    const [breakTime, setBreakTime] = useState(0);
    const eventHandler = time => {
        if (time) {

            setBreakTime(time);
        }
        else {
            time = 0;
            setBreakTime(time);
        }
    }
    console.log(breakTime);

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
                <h6>Total Movie Time: </h6>
                <h6>Break Time: {breakTime}Min</h6>
            </div>
        </div>
    );
};

export default Cart;