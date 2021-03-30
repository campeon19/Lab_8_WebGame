import React from 'react';
import './header.css';

class Header extends React.Component{
    render(){
        return(
            <header>
                <div className= 'titulo'>Memoria</div>
                <div className= 'titulo'>Intentos: {this.props.numeroIntentos}</div>
            </header>
        )
    }
};

export default Header;