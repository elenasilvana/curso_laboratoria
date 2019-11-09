import React from 'react';

function About(props) {

  const {perritos, agregarPerro } = props;
  console.log('desde about', props);
  
  const mostrarPerritos = (array) => {
    return(
      array.map((perrito)=>(<h2>{perrito.name}</h2>))
    );
  }

  const addDog = (value) => {
    return value
    console.log(value);
  }

  return(
    <div>
      <div>
        <h1>Los perritos son</h1>
        {mostrarPerritos(perritos)}
      </div>
      <div>
        <h2>Agregar perrito</h2>
        <input type="text" placeholder="wishbone" onKeyUp={(e) => addDog(e.target.value)}></input>
        <button onClick={console.log('holamundo')}>agregar</button>
      </div>
    </div>
    
  );
}

export default About;
