import React from 'react';
import ReactDOM from 'react-dom';
import Header from './componentes/header';
import Tablero from './componentes/tablero';
import './index.css';
import 'font-awesome/css/font-awesome.css';
import construirBaraja from './componentes/util/construirBaraja';


const estadoInicial = () =>{
    const baraja = construirBaraja;
    return{
        baraja
    };
}

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = estadoInicial();
    }

    render(){
        return(
            <div className='app'>
                <Header />
                <Tablero 
                 baraja={this.state.baraja}
                />
            </div>
        );
    }
}

ReactDOM.render(<App></App>, document.getElementById('root'));
