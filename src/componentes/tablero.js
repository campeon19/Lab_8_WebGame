import React from 'react';
import Carta from './carta';
import './tablero.css';

class Tablero extends React.Component{
    render(){
        return(
            <div className='tablero'>
                {
                    this.props.baraja.map((carta) => 
                    <Carta icono={carta.icono}/>)
                }
            </div>
        );
    }
};

export default Tablero;
