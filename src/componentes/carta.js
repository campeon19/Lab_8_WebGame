import React from 'react';
import './carta.css'
//import FlipCard from 'react-flipcard-2';
import ReactCardFlip from 'react-card-flip';

class Carta extends React.Component{
    render(){
        return(
            <div className='carta' onClick={this.props.seleccionarCarta}>
                <ReactCardFlip
                    isFlipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
                >
                    <div className="portada">
                        <img src="https://i.pinimg.com/originals/9f/27/50/9f2750b762d5f725c98d43945ceb2b83.jpg"></img>
                    </div>
                    <div className="contenido">
                    <i className={'fa ' + this.props.icono + ' fa-5x' }></i>
                    </div>
                </ReactCardFlip>
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