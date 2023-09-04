import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const Ejercicio = ({yearProp}) => {

    let [year, setYear] = useState(yearProp);

    const changeYear = e =>{
        //Primera forma enviando el evento desde el botón
        //setYear(parseInt(newYear));

        //Y la Segunda forma captgurando el evento desde esta función
        let data = parseInt(e.target.value);
        if(Number.isInteger(data)){
            setYear(data);
        }
        else
        {
            setYear(year);
        }
        
    }

    const incrementYear = e =>{
        setYear(year + 1);
    }

    const decrementYear = e =>{
        setYear(year - 1);
    }


  return (
    <div>
        <p>Componente ejercicio</p>
        &nbsp;
        <p>Año: <strong>{ year }</strong></p>

        <div className="number">
            <span className="minus" onClick={decrementYear}>-</span>
            <input type="text" value={ year } />
            <span className="plus"  onClick={ e => incrementYear(e) }>+</span>
        </div>

        &nbsp;
        <input 
            type="text" 
            onChange={
                //una forma de pasar los datos es esta manera:  
                //e => changeYear(e, e.target.value) 

                //Y la otra es solo llamar la función y capturar el evento dentro de la función
                changeYear
            } 
            placeholder='Cambia el con onKeyUp'>
        </input>

    </div>
  )
}

Ejercicio.propTypes = {
    yearProp: PropTypes.number.isRequired
}