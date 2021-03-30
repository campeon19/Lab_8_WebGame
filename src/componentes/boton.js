import React from 'react';
import './boton.css';

class Boton extends React.Component{
    render(){
        return(
            <div className="estiloBoton">
                <button  onClick={this.props.reiniciarPartida}>Reiniciar</button>
            </div>
        )
    }
};

export default Boton;