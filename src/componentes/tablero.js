import React from 'react';
import Carta from './carta';
import './tablero.css';


class Tablero extends React.Component{
    render(){
        console.log( this.props.baraja);
        return(
            <div className='tablero'>
                {
                    this.props.baraja.map((carta, index) => {
                        const estaSiendoComparada = this.props.parejasSeleccionadas.indexOf(carta)> -1;
                        
                        return <Carta
                        key={index} 
                        icono={carta.icono}
                        estaSiendoComparada={estaSiendoComparada}
                        seleccionarCarta={() => this.props.seleccionarCarta(carta)}
                        fueAdivinada = {carta.fueAdivinada}
                        />;
                    })
                    
                }
            </div>
        );
    }
};

export default Tablero;

/*
                       const estaSiendoComparada = this.props.parejaSellecionadas.idexOf(carta) > -1;
                        
                        return <Carta
                        key={index} 
                        icono={carta.icono}
                        estaSiendoComparada={estaSiendoComparada}
                        seleccionarCarta={() => this.props.seleccionasCarta(carta)}
                        fueAdivinada = {carta.fueAdivinada}

                        this.props.baraja.map((carta) => 
                    <Carta icono={carta.icono}/>)
*/
