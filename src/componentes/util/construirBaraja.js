import shuffle from 'lodash.shuffle';
import FontAwesomeClasses from './fontClasses';
const Numero_cartas = 20;

export default() =>{
    const fontAwesomeClasses = FontAwesomeClasses();
    let cartas = [];

    while(cartas.length<Numero_cartas){
        const index = Math.floor(Math.random() * fontAwesomeClasses.length);
        const carta = {
            icono: fontAwesomeClasses.splice(index,1)[0],
            fueAdivinada: falso
        };

        cartas.push(carta);
        cartas.push({...carta});
    }

    return shuffle(cartas);
};