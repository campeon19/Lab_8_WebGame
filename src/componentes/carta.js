import React from 'react';
import './carta.css'
import FlipCard from 'react-flipcard-2';

class Carta extends React.Component{
    render(){
        return(
            <div className='carta'onClick={this.props.seleccionarCarta}>
                <FlipCard
                    flipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
                    disabled={true}
                >
                    <div className="portada"></div>
                    <div className="contenido">
                    <i className={'fa ' + this.props.icono + ' fa-5x' }></i>
                    </div>
                </FlipCard>
            </div>
        );
    }
};

export default Carta;

/*

                <FlipCard
                    flipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
                    disabled={true}
                >
                    <div className="portada"></div>
                    <div className="contenido">
                    <i className={'fa ' + this.props.icono + ' fa-5x' }></i>
                    </div>
                </FlipCard>

                <div className='carta' onClick={this.props.seleccionarCarta}>
                
            </div>


*/