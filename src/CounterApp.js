// import moduleName from 'module';

import PropTypes from 'prop-types'
import React, { useState } from 'react';

const CounterApp = ({ value }) => {

    const [lamarca, setLamarca] = useState(value);

    // Funcion handleAdd
    // const handleAdd = () => {
    //     setLamarca(lamarca + 1);
    //     // Otra manera de hacerlo ===> setLamarca((m) => m+1);
    // }

    // Funcion handleReset
    // const handleReset = () => { setLamarca(value); }

    // Funcion handleSubstract
    // const handleSubstract = () => { setLamarca(lamarca - 1); }

    return (
        <>
            <h1>La Marca</h1>
            <h2>{lamarca}</h2>
            {/* <button onClick={handleAdd}> Add </button>
            <button onClick={handleReset}> Reset </button>
            <button onClick={handleSubstract}> Substract </button> */}

            {/* Sin tener que declarar las funciones por aparte */}
            <button onClick={(e) => { setLamarca(lamarca + 1) }} > Add </button>
            <button onClick={(e) => { setLamarca(value) }} > Reset </button>
            <button onClick={(e) => { setLamarca(lamarca - 1) }} > Substract </button>
        </>
    );

}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;