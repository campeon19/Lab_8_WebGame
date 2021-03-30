import React from 'react';
import ReactDOM from 'react-dom';
import Header from './componentes/header';
import Tablero from './componentes/tablero';
import Boton from './componentes/boton';
import './index.css';
import construirBaraja from './componentes/util/construirBaraja';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const estadoInicial = () =>{
    const baraja = construirBaraja();
    return {
        baraja,
        parejasSeleccionadas: [],
        estaComparando: false,
        numeroIntentos: 0
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
                <Header 
                    numeroIntentos={this.state.numeroIntentos}
                    reiniciarPartida={() => this.reiniciarPartida()}
                />
                <Tablero 
                 baraja={this.state.baraja}
                 parejasSeleccionadas={this.state.parejasSeleccionadas}
                 seleccionarCarta={(carta) => this.seleccionarCarta(carta)}
                />
                <Boton
                reiniciarPartida={() => this.reiniciarPartida()}
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
            this.verificarVictoria(baraja);
            this.setState({
                parejasSeleccionadas: [],
                baraja,
                estaComparando: false,
                numeroIntentos: this.state.numeroIntentos + 1
            });

        }, 1000)
    }

    verificarVictoria(baraja){
        if(
            baraja.filter((carta) => !carta.fueAdivinada).length === 0
        ){
            alert(`Ganaste! Te tomo ${this.state.numeroIntentos} intentos`);
        }
    }

    reiniciarPartida(){
        this.setState(
            estadoInicial()
        )
    }
}

ReactDOM.render(<App></App>, document.getElementById('root'));
