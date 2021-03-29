import React from 'react';
import './header.css';

class Header extends React.Component{
    render(){
        return(
            <header>
                <div className= 'titulo'>Memoria</div>
                <div>
                    <button className="reiniciar">Reiniciar</button>
                </div>
                <div className= 'titulo'>Intentos:</div>
            </header>
        )
    }
};

export default Header;