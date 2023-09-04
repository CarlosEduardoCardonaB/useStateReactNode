import React, {useState} from 'react';
//El useState es un hook. Para ver todos los hooks disponibles solo tenemos que copiar la palabra "use"  
//aqui arriba y nos muestra todos los hooks disponibles

export const MiPrimerEstado = () => {

    // let nombre = 'Carlos';

    // const cambiarNombre = e =>{
    //     nombre = 'Eduardo';
    // }

    //Con los usesStates podemos cambiar los valores en pantalla sin necesidad de refrescar toda la página
    const [nombre, setNombre] = useState("Eduardo Cardona");

    const cambiarNombre = (e, nombreFijo) =>{
      //Este es un llamado a una función que se declara en el "const [nom..." de arriba. 
      //Al llamar esta función desde un botón cambia el nombre que se había declarado inicialmente

      setNombre(nombreFijo);
    }

  return (
    <div>
        <h3>Componente mi primer estado</h3>
        <p>Mi nombre es: <strong className={nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre}</strong></p>
        
        &nbsp;
        <button onClick={ e => cambiarNombre(e, 'Pepito') }>Cambiar Nombre por Pepito</button>
        &nbsp;
        <input type="text" onKeyUp={  e => cambiarNombre(e, e.target.value) } placeholder='Cambia el con onKeyUp'></input>
        <input type="text" onChange={  e => cambiarNombre(e, e.target.value) } placeholder='Cambia el con onChange'></input>
    </div>
  )
}
