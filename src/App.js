import './App.css';
import { useState } from 'react';

import { suma, resta, multiplicacion, division } from './Calculator';

function App() {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    const [oper, setOper] = useState("");

    const ops = ['/', '*', '+', '-'];

    const calcular = value => {
        var numeros = calc.split('/');
        switch (oper) {
            
            case "/":
                var resultado = division( parseInt(numeros[0]), parseInt(numeros[1]))
                setResult( resultado.toString() )
                break;
            case "*":
                var resultado = multiplicacion( parseInt(numeros[0]), parseInt(numeros[1]))
                setResult( resultado.toString() )
                break;
            case "+":
                var resultado = suma( parseInt(numeros[0]), parseInt(numeros[1]))
                setResult( resultado.toString() )
                break;
            case "-":
                var resultado = resta( parseInt(numeros[0]), parseInt(numeros[1]))
                setResult( resultado.toString() )
                break;
            default:
                break;
        }
        setCalc("")
    }


    // Colocar resultado en pantalla para saber expresiones matematicas anotadas
    const updateCalc = value => {
        if (ops.includes(value)){
            console.log(value)
            setOper(value);
        }

        if (ops.includes(value) && calc === ''){
            
            return; 
        }

        if (ops.includes(value) && ops.includes(calc.slice(-1))){
            setOper(value);
            setCalc(calc.slice(0, -1) + value);
        }

        else {
            console.log(value)
            setCalc(calc + value);
        }



        /*
        if (!ops.includes(value)) {
            switch (calc.slice(-1)) {
                case '+':
                    console.log("sumaaaaaaa");
                    setResult( suma( parseInt(calc.slice(0, -1)) , parseInt( calc.substring(calc.indexOf("+") + 1) )).toString() )

                    console.log( suma( parseInt(calc.slice(0, -1)) , parseInt( calc.substring(calc.indexOf("+") + 1) )).toString() );
                    break;

                default:
                    break;
            }
        }
        */
    }

    // Crear lista interna de digitos 1-9
    const crearDigitos = () => {
        const digitos = [];
        for (let x = 1; x < 10; x++) {
            digitos.push(
                <button key={x} onClick={() => updateCalc(x.toString())}>{x}</button>
            )
        }

        return digitos;
    }



    return (
        
        <div className="App" >
            
            <div className='calculadora'>
            <h2>Calculadora de 1 sola operacion, despues de 2 numeros se debe presionar igual =</h2>
                <div className='resultado'>

                    {result ? <span>{result}</span> : ''} {calc || "0"}
                </div>

                <div className='operadores'>
                    <button onClick={() => updateCalc('/')}>/</button>
                    <button onClick={() => updateCalc('*')}>*</button>
                    <button onClick={() => updateCalc('+')}>+</button>
                    <button onClick={() => updateCalc('-')}>-</button>

                    <button>DEL</button>
                </div>

                <div className='digitos'>
                    {crearDigitos()}
                    <button onClick={() => updateCalc('0')}>0</button>
                    <button onClick={() => updateCalc('')}>:D</button>

                    <button onClick={() => calcular('')}>=</button>
                </div>
            </div>

        </div>
    );
}

export default App;