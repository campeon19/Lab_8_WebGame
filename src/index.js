import React from 'react';
import ReactDOM from 'react-dom';
import Header from './componentes/header';
import Tablero from './componentes/tablero';
import './index.css';
import construirBaraja from './componentes/util/construirBaraja';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const estadoInicial = () =>{
    const baraja = construirBaraja();
    return {
        baraja,
        parejasSeleccionadas: [],
        estaComparando: false,
    };
}

class App extends React.Component{

    constructor(props) {
        super(props);
        //this.state = {baraja: estadoInicial()};
        this.state = estadoInicial();
    }

    render(){
        return(
            <div className='app'>
                <Header />
                <Tablero 
                 baraja={this.state.baraja}
                 parejasSeleccionadas={this.state.parejasSeleccionadas}
                 seleccionarCarta={(carta) => this.seleccionarCarta(carta)}
                />
            </div>
        );
    }

    seleccionarCarta(carta){
        if(
            this.state.estaComparando || 
            this.state.parejasSeleccionadas.indexOf(carta)> -1 ||
            carta.fueAdivinada   
        ){
            return;
        }

        const parejasSeleccionadas = [...this.state.parejasSeleccionadas, carta];
        this.setState({
            parejasSeleccionadas
        }) 
    }
}

ReactDOM.render(<App></App>, document.getElementById('root'));
