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
        });
        
        if(parejasSeleccionadas.length === 2){
            this.compararParejas(parejasSeleccionadas);
        }
    }

    compararParejas(parejasSeleccionadas){
        this.setState({estaComparando:true});
        setTimeout(() => {
            const [primeraCarta, segundaCarta] = parejasSeleccionadas;
            let baraja = this.state.baraja;

            if(primeraCarta.icono === segundaCarta.icono){
                baraja = baraja.map((carta) =>{
                    if(carta.icono !== primeraCarta.icono){
                        return carta;
                    }

                    return{...carta, fueAdivinada:true};
                });


            }

            this.setState({
                parejasSeleccionadas: [],
                baraja,
                estaComparando: false
            });
            
        }, 1000)
    }
}

ReactDOM.render(<App></App>, document.getElementById('root'));
