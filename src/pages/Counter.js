import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/counter.css';

export default function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>{counter}</h1>
            <div className="container__btn">
            <button className='btn__counter' onClick={() => {
                setCounter(counter + 1)
            }}>+</button>
            <button className='btn__counter' onClick={() => {
                setCounter(counter - 1);
            }}>-</button>
            </div>
        
            <Link to='/'>Voltar</Link>
        </div>
    )
}