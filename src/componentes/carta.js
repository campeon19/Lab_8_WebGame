import React from 'react';
import './carta.css'

class Carta extends React.Component{
    render(){
        return(
            <div className='carta'>
                <i className={'fa ${this.props.icono} fa-5x'}></i>
            </div>
        );
    }
};

export default Carta;